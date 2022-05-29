// 原子权限
// const ATOM_AUTH_CODE = {
//     DENY: 0, // 禁止
//     PREVIEW_OP: 1, // 可预览
//     UPLOAD_OP: 2, // 可上传
//     DOWNLOAD_OP: 4, // 可下载
//     CREATE_UPLOAD_DELIVERY: 8, // 外链（可上传）
//     CREATE_DOWNLOAD_DELIVERY: 16, // 外链（可下载）
//     CREATE: 32, // 创建目录
//     DELETE: 64, // 删除
//     RENAME: 128, // 重命名
//     MOVE: 256, // 移动
//     COPY: 512, // 复制
//     LIST: 1024, // 列出所有
//     COMMENT: 2048, // 评论
// }

const ATOM_AUTH_CODE = {
    preview: 1, // 可预览
    upload: 2, // 可上传
    download: 4, // 可下载
    delivery: 24, // 创建外链
    create: 32, // 创建目录
    delete: 64, // 删除
    rename: 128, // 重命名
    move: 256, // 移动
    copy: 512, // 复制
    list: 1024, // 列出所有
    comment: 2048, // 评论
}

  // 标准权限掩码(文件共享用)
const G_STANDARD_AUTH_CODE_FILE = {
    preview: 3073,
    download: 3613,
    edit: 3615,
    deny: 0,
    list: 1024,
  }

  const G_STANDARD_AUTH_CODE_DENY_FILE = {
    preview: 0,
    download: 0,
    edit: 0,
    deny: 3615,
    list: 2591,
  }
  
// 标准权限掩码(文件共享用)
const G_STANDARD_AUTH_CODE_FILE = {
  preview: 3073,
  download: 3613,
  edit: 3615,
  deny: 0,
  list: 1024,
}

// 权限码对应的原子权限
// function hasAtomAuthOf(authCode) {
//     let authList = []
//     Object.keys(ATOM_AUTH_CODE).forEach(function(key) {
//         // 单独处理禁止的权限
//         if (key.toUpperCase() === 'DENY' && authCode === ATOM_AUTH_CODE[key]) {
//             authList.unshift(key)
//             return
//         }

//         if (authCode & ATOM_AUTH_CODE[key]) {
//             authList.unshift(key)
//         }
//     })
//     return authList
// }

// // 展开预置权限为原子权限
// function expandPresetAuth(presetAuthCode) {
//     let expandedAuth = {}
//     Object.keys(presetAuthCode).forEach(function(key) {
//         expandedAuth[`${key}-${presetAuthCode[key]}-${presetAuthCode[key].toString(2).padStart(12, '0')}`] = hasAtomAuthOf(presetAuthCode[key]).join(':')
//     })
//     return expandedAuth
// }

// console.log(expandPresetAuth(G_STANDARD_AUTH_CODE))

// function expandSinglePresetAuth(presetAuthCode) {
//     return {
//         [`${presetAuthCode}-${presetAuthCode.toString(2).padStart(12, '0')}`]: hasAtomAuthOf(presetAuthCode).join(':')
//     }
// }




// function showAuthBinaryCode() {
//     let atomAuthBinaryCode = {}
//     Object.keys(ATOM_AUTH_CODE).forEach(function(key) {
//         atomAuthBinaryCode[key] = ATOM_AUTH_CODE[key].toString(2).padStart(12, '0')
//     })

//     console.log(atomAuthBinaryCode)
// }

// **************来自 util.js*****************

// 自定义权限编码
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

// 标准权限拒绝掩码
const G_STANDARD_AUTH_CODE_DENY = {
    preview: 0,
    upload: 0,
    download: 0,
    'upload:download': 0,
    edit: 0,
    deny: 4095,
    list: 3071,
  }

  // 标准权限掩码ID
const G_STANDARD_AUTH_CODE_ID = {
    preview: 3001,
    upload: 3002,
    download: 3003,
    'upload:download': 3004,
    edit: 3005,
    deny: 3006,
    list: 3007,
  }
  // 自定义权限编码(操作文件)
  const G_CUSTOM_AUTH_CODE_FILE = {
    preview: 1,
    download: 4,
    upload: 2,
    delivery: 24,
    copy: 512,
    comment: 2048,
    list: 1024,
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

/**
 * 通过权限掩码转换出对应的权限
 */
 function getCSSActionByCodeRefactor(code) {
    return {
        authCSS: findAtomAuth(code),
        authType: Object.keys(G_STANDARD_AUTH_CODE).find((key) => G_STANDARD_AUTH_CODE[key] === code) || 'custom',
    }
  }

  // console.log('getCSSActionByCodeRefactor', getCSSActionByCodeRefactor(1026))

/**
 * 查找并返回权限码对应的原子权限
 * @param {*} authCode 用户的权限码
 * @returns 自定义权限对象 G_CUSTOM_AUTH_CODE 的属性名字符串
 */
function findAtomAuth(authCode) {
    let authList = []
    Object.keys(G_CUSTOM_AUTH_CODE).forEach(function(key) {
        if (authCode & G_CUSTOM_AUTH_CODE[key]) {
            authList.push(key)
        }
    })
    return authList.join(':')
}
  
/**
 * 通过权限掩码转换出对应的权限
 */
//  function getCSSActionByCodeRefact(code) {
//     return {
//         authCSS: hasAtomAuthOf(code),
//         authType: Object.keys(G_STANDARD_AUTH_CODE).find((key) => G_STANDARD_AUTH_CODE[key] === code) || 'custom'
//     }
//   }

 void function getCSSActionByCodeTestCase(authCode) {
      Object.keys(authCode).forEach(function(key){
        let origin = getCSSActionByCode(authCode[key]), refacted = getCSSActionByCodeRefactor(authCode[key])
        // console.log('原方法', key, origin)
        console.log('重构后', key, refacted)
        // if (origin.authCSS === refacted.authCSS && origin.authType === refacted.authType) {
        //     console.log(`%c ${key}:${authCode[key]}, matched`, 'color:#0f0')
        // } else {
        //     console.log(`%c ${key}:${authCode[key]}, not match`, 'color:#f00')
        // }
      })
  }(G_STANDARD_AUTH_CODE)

  
/**
 * 以自定义权限对象为原型包装一个临时对象
 * 临时对象的权限属性包含一个 enabled 属性
 * enabled 属性，根据传入的用户权限码判断其真值作为返回值
 * @param {*} accessMode 用户权限码
 * @returns 临时对象
 */
function ifHasAuthFactor(accessMode) {
    let wrappedAtomAuth = new Object()
    Object.keys(ATOM_AUTH_CODE).forEach(function(key) {
        wrappedAtomAuth[key] = new Object()
        Object.defineProperty(wrappedAtomAuth[key], 'enabled', {
            enumerable: false,
            configurable: false,
            get() {
                return Boolean(accessMode & ATOM_AUTH_CODE[key])
            }
        })
    })

    return wrappedAtomAuth
}

const ifHasAuth = (accessMode, authname) => {
    const action = getCSSActionByCode(accessMode).authCSS
    return action.split(':').includes(authname)
  }

// void function ifHasAuthFactorTestCase(accessMode) {
//     let wrappedAtomAuth = ifHasAuthFactor(accessMode)

//     Object.keys(wrappedAtomAuth).forEach(function(key) {
//         console.log(key)
//         console.log('重构前', ifHasAuth(accessMode, key))
//         console.log('重构后', wrappedAtomAuth[key].enabled)
//         if (wrappedAtomAuth[key].enabled === ifHasAuth(accessMode, key)) {
//             console.log(`%c matched`, 'color:#0f0')
//         } else {
//             console.log(`%c not match`, 'color:#f00')
//         }
//     })
// }(2591)

void function display() {
  console.log(findAtomAuth(3613))
}()