import ATOMIC_UNIT from './atomic-unit.js'
import { 
  BASIC_UNIT, 
  BASIC_UNIT_MUTATION, 
  basicUnitFieldsConvertor,
  resolveFileAction as resolveFileActionRefactor,
  getPrivatePrivilege as getPrivatePrivilegeRefactor } from './basic-unit.js'
import { 
  getCSSActionByCode as getCSSActionByCodeRefactor, 
  PRESET_UNIT } from './preset-unit.js'
import { 
  getPrivatePrivilege, 
  resolveFileAction, 
  getCSSActionByCode, 
  G_CUSTOM_AUTH_CODE,
  G_STANDARD_AUTH_CODE,
  G_STANDARD_AUTH_CODE_FILE,
  AUTH_CODE_FROM_FILE_ACTION } from './util-origin.js'

void function showAtomicUnit() {
    console.group('ATOMIC_UNIT')
    void [...ATOMIC_UNIT].forEach(([key, value]) => {
        console.log(value.id, value.code.toString('2').padStart(12, '0'), key, value.description, value.code)
    })
    console.groupEnd()
}()

void function showBasicUnit() {
    console.group('BASIC_UNIT_MUTATION')
    void [...BASIC_UNIT_MUTATION].forEach(([key, value]) => {
        console.log(value.id, value.code.toString('2').padStart(12, '0'), key, value.description, value.code)
    })
    console.groupEnd()
}()

void function showPresetUnit() {
    console.group('PRESET_UNIT')
    void [...PRESET_UNIT].forEach(([key, value]) => {
        console.log(value.id, key.toString('2').padStart(12, '0'), value.field, value.description, key)
    })
    console.groupEnd()
}()

/**
 * 权限码对应权限字符串及权限指示器单元测试
 * 重构 resolveFileAction 单元测试
 */
void function resolveFileActionDiffUnitTest() {
  console.log('resolveFileAction')
  let peach = AUTH_CODE_FROM_FILE_ACTION
  peach = peach.concat(...PRESET_UNIT.keys())
  peach.forEach((accessMode) => {
    console.group(accessMode)
    const origin = resolveFileAction(accessMode)
    const refactor = resolveFileActionRefactor(accessMode)
    console.log('origin', origin)
    console.log('refactor', refactor)
    console.groupEnd()
  })
}()

// 重构 getPrivatePrivilege 单元测试
void function getPrivatePrivilegeDiffUnitTest() {
  console.log('getPrivatePrivilege')
  // peach = peach.concat(...PRESET_UNIT.keys())
  AUTH_CODE_FROM_FILE_ACTION.forEach((accessMode) => {
    console.group(accessMode)
    let origin = getPrivatePrivilege(resolveFileAction(accessMode))
    let refactor = getPrivatePrivilegeRefactor(resolveFileActionRefactor(accessMode))

    Object.entries(origin).forEach(([key, value]) => {
      console.log(key, '重构前', value, '重构后', refactor[key])
      if (value === refactor[key]) {
        console.log(`%c matched`, 'color:#0f0')
      }
      else{
        console.log(`%c not matched`, 'color:#f00')
      }
    })
    console.groupEnd()
  })
}()

// 重构 getCSSActionByCode 单元测试
void function getCSSActionByCodeDiffUnitTest() {
    Object.keys(G_STANDARD_AUTH_CODE).forEach(key => {
        let authCode = G_STANDARD_AUTH_CODE
        let origin = getCSSActionByCode(authCode[key]), refactored = getCSSActionByCodeRefactor(authCode[key])
        console.group(key, '原方法', origin, '重构后', refactored)
        if (origin.authCSS === refactored.authCSS && origin.authType === refactored.authType) {
            console.log(`%c ${key}:${authCode[key]}, matched`, 'color:#0f0')
        } else {
            console.log(`%c ${key}:${authCode[key]}, not match`, 'color:#f00')
        }
        console.groupEnd()
    })
}()

void function load(DOM) {
  DOM.basicUnitFieldsConvertor = basicUnitFieldsConvertor
}(window)