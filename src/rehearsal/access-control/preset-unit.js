import { BASIC_UNIT_MUTATION, basicUnitFieldsConvertor } from './basic-unit.js'
import { addSubsetWrapper, codeGeneratorWrapper } from './util.js'

// 禁止访问
const DENY = 0b0
const PRESET_UNIT = new Map()

/**
 * 预置（标准）权限 field 属性转换器
 * @param {权限码} accessMode
 * @returns 权限码对应的预置（标准）权限 field 属性字符串
 */
function presetUnitFieldIndicator(accessMode) {
  return PRESET_UNIT.has(accessMode) ? PRESET_UNIT.get(accessMode).field : 'custom'
}

/**
 * 重构的 getCSSActionByCode 保持与重构前参数及返回值一致
 * @param {权限码} accessMode
 * @returns basicUnitFieldsConvertor/presetUnitFieldIndicator 返回值作为对象属性
 */
function getCSSActionByCode(accessMode) {
  return {
    authCSS: basicUnitFieldsConvertor(accessMode),
    authType: presetUnitFieldIndicator(accessMode),
  }
}

/**
 * 向 PRESET_UNIT 填充成员
 * 预置权限由基本权限组合而成
 * 预置权限具备可扩展的特性
 */
function initializePresetUnit() {
  const addSubset = addSubsetWrapper(PRESET_UNIT)
  const codeGenerator = codeGeneratorWrapper(BASIC_UNIT_MUTATION)

  addSubset(
    codeGenerator('preview', 'list', 'comment'),
    { id: 3001, field: 'preview', description: '预览' },
  )
  addSubset(
    codeGenerator('upload', 'create', 'delivery', 'list', 'comment'),
    { id: 3002, field: 'upload', description: '上传' },
  )
  addSubset(
    codeGenerator('preview', 'download', 'delivery', 'copy', 'list', 'comment'),
    { id: 3003, field: 'download', description: '下载' },
  )
  addSubset(
    codeGenerator('preview', 'download', 'upload', 'create', 'delivery', 'copy', 'list', 'comment'),
    { id: 3004, field: 'upload:download', description: '上传/下载' },
  )
  addSubset(
    codeGenerator('preview', 'download', 'upload', 'create', 'delivery', 'delete', 'rename', 'copy', 'move', 'list', 'comment'),
    { id: 3005, field: 'edit', description: '编辑' },
  )
  addSubset(DENY,
    { id: 3006, field: 'deny', description: '禁止访问' })
  addSubset(
    codeGenerator('list'),
    { id: 3007, field: 'list', description: '可见列表' },
  )
}

initializePresetUnit()

export { 
  PRESET_UNIT,
  getCSSActionByCode,
}
