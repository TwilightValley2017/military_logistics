import ATOMIC_UNIT from './atomic-unit.js'
import { addSubsetWrapper, codeGeneratorWrapper } from './util.js'

const BASIC_UNIT = new Map()
// BASIC_UNIT 变异，使用 field 作为 key
const BASIC_UNIT_MUTATION = new Map()

/**
 * 权限控制器闭包
 * 判断权限码是否具备某个基本权限
 * @param {权限码} accessMode
 * @returns 权限控制器函数，参数为基本权限 field 属性
 */
function accessControllerWrapper(accessMode) {
  return (field) => (accessMode | BASIC_UNIT_MUTATION.get(field).code) === accessMode
}

/**
 * 权限指示器
 * 指示权限码是否具备某个基本权限
 * @param {权限码} accessMode
 * @returns 指示器对象，属性为布尔类型
 */
function accessIndicator(accessMode) {
  const accessController = accessControllerWrapper(accessMode)
  return {
    canPreview: accessController('preview'),
    canUpload: accessController('upload'),
    canDownload: accessController('download'),
    canLink: accessController('delivery'),
    canCreate: accessController('create'),
    canDelete: accessController('delete'),
    canRename: accessController('rename'),
    canMove: accessController('move'),
    canCopy: accessController('copy'),
    // TODO: 需要扩展 canList/canComment
  }
}

/**
 * 基本权限 field 属性转换器
 * @param {权限码} accessMode
 * @returns 权限码对应的基本权限 field 属性字符串
 */
function basicUnitFieldsConvertor(accessMode) {
  const result = []
  const basicUnit = [...BASIC_UNIT]
  basicUnit.forEach(([key, value]) => {
    if ((accessMode | key) === accessMode) {
      result.push(value.field)
    }
  })
  return result.join(':')
}

/**
 * 基本权限码转换器
 * 注1：基本权限 field 属性转换器的反向操作
 * 注2：重构中间产物，为保证对外暴露函数行为一致性
 * @param {权限码对应的基本权限 field 属性字符串} fields
 * @returns 权限码
 */
function basicUnitCodesConvertor(fields) {
  return fields.split(':').reduce((pre, curr) => (
    BASIC_UNIT_MUTATION.has(curr) ? (pre | BASIC_UNIT_MUTATION.get(curr).code) : pre
  ), 0b0)
}

/**
 * 重构的 resolveFileAction 保持与重构前参数一致
 * 注1：与重构的 getPrivatePrivilege 配合使用
 * @param {权限码} accessMode
 * @returns
 */
function resolveFileAction(accessMode) {
  return basicUnitFieldsConvertor(accessMode)
}

/**
 * 重构的 getPrivatePrivilege 保持与重构前参数与返回一致
 * 注1：与重构的 resolveFileAction 配合使用
 * @param {重构的 resolveFileAction 返回值} cssAction
 * @returns
 */
function getPrivatePrivilege(cssAction) {
  return accessIndicator(basicUnitCodesConvertor(cssAction))
}

/**
 * 向 BASIC_UNIT 添加成员
 * 基本权限码由原子权限码组合而成
 */
function initializeBasicUnit() {
  const addSubset = addSubsetWrapper(BASIC_UNIT)
  const codeGenerator = codeGeneratorWrapper(ATOMIC_UNIT)

  addSubset(codeGenerator('preview_op'), { id: 1, field: 'preview', description: '可预览' })
  addSubset(codeGenerator('download_op'), { id: 2, field: 'download', description: '可下载' })
  addSubset(codeGenerator('upload_op'), { id: 3, field: 'upload', description: '可上传' })
  addSubset(codeGenerator('create'), { id: 4, field: 'create', description: '可新建' })
  addSubset(codeGenerator('create_upload_delivery', 'create_download_delivery'), { id: 5, field: 'delivery', description: '可创建外链' })
  addSubset(codeGenerator('delete'), { id: 6, field: 'delete', description: '可删除' })
  addSubset(codeGenerator('rename'), { id: 7, field: 'rename', description: '可重命名' })
  addSubset(codeGenerator('copy'), { id: 8, field: 'copy', description: '可复制' })
  addSubset(codeGenerator('move'), { id: 9, field: 'move', description: '可移动' })
  addSubset(codeGenerator('comment'), { id: 10, field: 'comment', description: '可评论' })
  addSubset(codeGenerator('list'), { id: 11, field: 'list', description: '可见列表' })
}

// 向 BASIC_UNIT_MUTATION 添加成员
function mutateBaicUnit() {
  const addSubset = addSubsetWrapper(BASIC_UNIT_MUTATION)
  const basicUnit = [...BASIC_UNIT]
  basicUnit.forEach(([key, value]) => {
    addSubset(value.field, { code: key, ...value })
  })
}

initializeBasicUnit()
mutateBaicUnit()

export {
  BASIC_UNIT,
  BASIC_UNIT_MUTATION,
  basicUnitFieldsConvertor,
  resolveFileAction,
  getPrivatePrivilege,
}
