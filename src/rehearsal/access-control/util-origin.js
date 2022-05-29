// 自定义权限编码
// 基本权限权限码
const G_CUSTOM_AUTH_CODE = {
    preview: 1,
    download: 4,
    upload: 2,
    create: 32,
    delivery: 24,
    delete: 64,
    rename: 128,
    copy: 512,
    move: 256,
    comment: 2048,
    list: 1024,
}

// 标准权限掩码
const G_STANDARD_AUTH_CODE = {
    preview: 3073,
    upload: 3130,
    download: 3613,
    'upload:download': 3647,
    edit: 4095,
    deny: 0,
    list: 1024,
}

// 标准权限掩码(文件共享用)
const G_STANDARD_AUTH_CODE_FILE = {
  preview: 3073,
  download: 3613,
  edit: 3615,
  deny: 0,
  list: 1024,
}

const AUTH_CODE_FROM_FILE_ACTION = [
    4095,
    1599,
    1575,
    1565,
    1541,
    1082,
    1058,
    1025,
    0
  ]

function getPrivatePrivilege(cssAction) {
    // 自定义权限定义什么就是什么权限，都是单个原子权限
    // 组合权限则可能不一定具有本身的权限
    // eg:上传者可以有创建目录的权限
    // eg:下载者可以预览还可以复制，仅仅下载又无法预览和复制，
    //    所以要剔除原子下载权限(download0)
    return {
      canPreview: /preview|edit|download\b|download-\w+/.test(cssAction),
      canUpload: /upload|edit/.test(cssAction),
      canDownload: /download|edit/.test(cssAction),
      canLink: /delivery|edit/.test(cssAction),
      canCreate: /create|edit|upload\b|upload-\w+/.test(cssAction),
      canDelete: /delete|edit/.test(cssAction),
      canRename: /rename|edit/.test(cssAction),
      canMove: /move|edit/.test(cssAction),
      canCopy: /copy|download\b|download-\w+|edit/.test(cssAction),
    }
  }
  /*
  * 通过access_mode解析都有什么原子权限
  * @param {Number} accessModeArg
  */
  function resolveFileAction(accessMode) {
   if (accessMode === 4095) return 'edit'
   if (accessMode === 1599) return 'upload:download:delivery'
   if (accessMode === 1575) return 'upload:download'
   if (accessMode === 1565) return 'download:delivery'
   if (accessMode === 1541) return 'download'
   if (accessMode === 1082) return 'upload:delivery'
   if (accessMode === 1058) return 'upload'
   if (accessMode === 1025) return 'preview'
  
  //  这里是基本权限，但是field 加了个零，很坑
   const action = []
   if ((accessMode & 1) === 1) {
     action.push('preview')
   }
   if ((accessMode & 2) === 2) {
     action.push('upload0')
   }
   if ((accessMode & 4) === 4) {
     action.push('download0')
   }
   if ((accessMode & 24) === 24) {
     action.push('delivery')
   }
   if ((accessMode & 256) === 256) {
     action.push('move')
   }
   if ((accessMode & 512) === 512) {
     action.push('copy')
   }
   if ((accessMode & 128) === 128) {
     action.push('rename')
   }
   if ((accessMode & 64) === 64) {
     action.push('delete')
   }
   if ((accessMode & 32) === 32) {
     action.push('create')
   }
   return action.join(':')
  }

  function getCSSActionByCode(code) {
    let rs = ''
    const returnData = {}
    Object.keys(G_CUSTOM_AUTH_CODE).forEach((o) => {
      if ((code & G_CUSTOM_AUTH_CODE[o]) === G_CUSTOM_AUTH_CODE[o]) {
        if (rs !== '') {
          rs += `:${o}`
        } else {
          rs = o
        }
      }
    })
    returnData.authCSS = rs
    Object.keys(G_STANDARD_AUTH_CODE).forEach((i) => {
      if (code === G_STANDARD_AUTH_CODE[i]) {
        returnData.authType = i
      }
      if (!returnData.authType) {
        returnData.authType = 'custom'
      }
    })
    return returnData
  }

  export {
    getPrivatePrivilege,
    resolveFileAction,
    getCSSActionByCode,
    G_CUSTOM_AUTH_CODE,
    G_STANDARD_AUTH_CODE,
    G_STANDARD_AUTH_CODE_FILE,
    AUTH_CODE_FROM_FILE_ACTION,
  }