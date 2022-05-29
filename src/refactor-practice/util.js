/**
 * 填充权限码函数闭包
 * @param {权限码数据结构 Map} map 
 * @returns 填充权限码函数，参数为 Map 数据结构 key/value
 */
function addSubsetWrapper(map) {
    // TODO: 这里可以做类型校验
    return (key, value) => {
      if (!map.has(key)) {
        map.set(key, value)
      }
    }
}

/**
 * 权限码生成器闭包
 * 注1：原子权限码能够组合成基本权限码
 * 注2：基本权限码能够组合成预置（标准）权限码
 * 注3：基本权限码能够组合成自定义权限码
 * @param {权限码数据结构 Map，仅限 key 值为 field 属性的 Map} map 
 * @returns 权限码生成器函数，参数为 Map 数据结构的 key 值集合
 */
function codeGeneratorWrapper(map) {
    return (...keys) => [...map].reduce(
        (pre, curr) => (keys.indexOf(curr[0]) > -1 ? pre | curr[1].code : pre),
        0b0,
    )
}

export {
    addSubsetWrapper,
    codeGeneratorWrapper,
}