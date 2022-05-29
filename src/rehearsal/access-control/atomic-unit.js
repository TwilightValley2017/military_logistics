import { addSubsetWrapper } from './util.js'

// 原子权限：禁止访问
const DENY = 0b0
// 原子权限基础码
const BASE = 0b1
// 原子权限的定义
const ATOMIC_DEFINITION = [
  { id: 1001, field: 'preview_op', description: '可预览' },
  { id: 1002, field: 'upload_op', description: '可上传' },
  { id: 1003, field: 'download_op', description: '可下载文件' },
  { id: 1004, field: 'create_upload_delivery', description: '外链（可上传）' },
  { id: 1005, field: 'create_download_delivery', description: '外链（可下载）' },
  { id: 1006, field: 'create', description: '创建目录' },
  { id: 1007, field: 'delete', description: '删除' },
  { id: 1008, field: 'rename', description: '重命名' },
  { id: 1009, field: 'move', description: '移动' },
  { id: 1010, field: 'copy', description: '复制' },
  { id: 1011, field: 'list', description: '列出所有' },
  { id: 1012, field: 'comment', description: '评论' },
  // TODO: 可扩展打印权限
]

const ATOMIC_UNIT = new Map()

function initializeAmoticUnit() {
  const addSubset = addSubsetWrapper(ATOMIC_UNIT)
  ATOMIC_DEFINITION.forEach((item) => {
    addSubset(item.field, { code: BASE << (item.id % 1000) - 1, ...item })
  })

  addSubset('deny', { field: 'deny', description: '禁止访问', code: DENY })
}

initializeAmoticUnit()

export default ATOMIC_UNIT
