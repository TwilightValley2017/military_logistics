/**
 * 判断基本类型变量
 */

if (cookieLang && (cookieLang !== 'zh' && cookieLang !== 'en' && cookieLang !== 'tw')) {
    cookieLang = 'zh'
} 

// 场景1
if (条件1) {
    逻辑1
} else if (条件2) {
    逻辑2
} else if (条件3) {
    逻辑3
} else {
    逻辑4
}

// function ifElse(val) {
//     let dayOfWeek 
//     if (val === 1) {
//         dayOfWeek = 'Mon.'
//     } else if (val === 2) {
//         dayOfWeek = 'Tue.'
//     } else if (val === 3) {
//         dayOfWeek = 'Wed.'
//     } else {
//         dayOfWeek = 'Others'
//     }
//     return dayOfWeek
// }

// function switchCase(val) {
//     let dayOfWeek 
//     switch (val) {
//         case 1:
//             dayOfWeek = 'Mon.'
//             break;
//         case 2:
//             dayOfWeek = 'Tue.'
//             break;
//         case 3:
//             dayOfWeek = 'Wed.'
//             break;
//         default:
//             dayOfWeek = 'Others'
//             break;
//     }
//     return dayOfWeek
// }

function ifElse(val) {
    let dayOfWeek
    switch (val) {
        case 1:
        case 2:
            dayOfWeek = 'Weekday'
            break;
    
        default:
            dayOfWeek = 'Weekend'
            break;
    }
    return dayOfWeek
}

console.log(ifElse(1))

function handleResult(flag) {
    let result
    if (flag) {
        result = {
            prop1: 'prop1',
            prop1: 'prop2',
            special: 'special',
        }
    } else {
        result = {
            prop1: 'prop1',
            prop1: 'prop2',
        }
    }
    return result
}

function handleResult(flag) {
    let result = {
        prop1: 'prop1',
        prop1: 'prop2',
    }
    if (flag) {
        result.special = 'special'
    }
    flag && (result.special = 'special')
    return result
}

function getLanguage(lang) {
    let result
    if (lang !== 'zh' && lang != 'en' && lang != 'tw') {
        result = 'zh'
    } else {
        result = lang
    }
    return result
}

function getLanguage(lang) {
    let languages = ['zh', 'en', 'tw']
    return languages.indexOf(lang) > 1 ? lang : 'zh'
}

function getLanguage(lang) {
    let result, languages = ['zh', 'en', 'tw']
    if (languages.indexOf(lang) === -1) {
        result = 'zh'
    } else {
        result = lang
    }
    return result
}


/**
 * 判断引用类型变量
 */
function nestedIf(conditions) {
    const {
        singleCondition,
        groupCondition,
        specialCondition } = conditions
        
    if (singleCondition) {
        if (groupCondition === 'A') {
            ...
            return
        } else if (groupCondition === 'B') {
            if (!specialCondition) {
                ...
                return
            }
        } else if (groupConditionC === 'C') {
            ...
            return
        } else {
            ...
            return
        }
    }
}

function nestedIf(conditions) {
    const {
        singleCondition,
        groupCondition,
        specialCondition } = conditions
        
    if (!singleCondition) {
        return
    }

    if (groupCondition === 'A') {
        ...
        return
    } else if (groupCondition === 'B') {
        ...
        return
    }

    if (groupCondition === 'C' && !specialCondition) {
        ...
        return
    }

    ...
    return
}