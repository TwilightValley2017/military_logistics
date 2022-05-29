
let reg4 = /((0?[0-9])|((1)[0-9])|((2)[0-3]))([点][半])$/g

let reg5 = /(([二][十])([一]|[二]|[三])?)([点][半])/g

let reg6 = /([十]([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)([点][半])/g

let reg7 = /(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])([点][半])/g

let reg9 = /(([十])([一]|[二])?)([月])/g

let reg10 = /([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])([月])/g

let reg8 = /((([十])([一]|[二])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))([月])/g

let reg11 = /(([三][十])[一]?)[日]/g

let reg12 = /((([二][十])|[十])([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)[日]/g

let reg13 = /([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])[日]/g

let reg14 = /((([三][十])[一]?)|((([二][十])|[十])([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))[日]/g

let reg15 = /((([十])([一]|[二])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))([月])((([三][十])[一]?)|((([二][十])|[十])([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))[日]/g

// let reg7 = /(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])([点][半])/g

// let reg5 = /^(0?[1-9]|1[0-2])[月]((0?[1-9])|((1|2)[0-9])|30|31)日/g

let reg16 = /((0?[0-9])|((1)[0-9])|((2)[0-3]))([:])(((1|2|3|4|5)[0-9])|(0?[0-9]))/g

let regExpObj = {
    /**
     * 优先级1
     * 2018年7月7日
     * 2018-7-7, 2018-07-07, 2018-12-12
     * 2018/7/7, 2018/07/07, 2018/12/12
     */
    reg1a: /(\d{4})([年])(0?[1-9]|1[0-2])([月])((0?[1-9])|((1|2)[0-9])|30|31)([日])/g,

    reg1b: /(\d{4})([-])(0?[1-9]|1[0-2])([-])(((1|2)[0-9])|30|31|(0?[1-9]))/g,

    reg1c: /(\d{4})([/])(0?[1-9]|1[0-2])([/])(((1|2)[0-9])|30|31|(0?[1-9]))/g,

    /**
     * 优先级2
     * 07月07日10点半
     * 7月7日0点0分, 07月07日10点10分, 12月12日23点59分
     */
    reg2a: /(0?[1-9]|1[0-2])([月])((0?[1-9])|((1|2)[0-9])|30|31)([日])((0?[0-9])|((1)[0-9])|((2)[0-3]))([点][半])/g,

    reg2b: /(0?[1-9]|1[0-2])([月])((0?[1-9])|((1|2)[0-9])|30|31)([日])((0?[0-9])|((1)[0-9])|((2)[0-3]))([点])((0?[0-9])|((1|2|3|4|5)[0-9]))([分])/g,

    /**
     * 优先级3
     * 7月7日0点, 07月07日10点, 12月12日23点
     */
    reg3: /(0?[1-9]|1[0-2])([月])((0?[1-9])|((1|2)[0-9])|30|31)([日])((0?[0-9])|((1)[0-9])|((2)[0-3]))([点])/g,

    /**
     * 优先级4
     * 10点半
     * 四点半
     * 十点半，十一点半
     * 二十点半，二十一点半
     * 0点0分, 10点10分, 23点59分
     * 00:00, 0:0, 1:10, 11:1, 23:59
     */
    reg4a: /((0?[0-9])|((1)[0-9])|((2)[0-3]))([点][半])/g,

    reg4b: /(([二][十])([一]|[二]|[三])?)([点][半])/g,

    reg4c: /([十]([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)([点][半])/g,

    reg4d: /(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])([点][半])/g,

    reg4e: /((0?[0-9])|((1)[0-9])|((2)[0-3]))([点])((0?[0-9])|((1|2|3|4|5)[0-9]))([分])/g,

    reg4f: /((0?[0-9])|((1)[0-9])|((2)[0-3]))([:])(((1|2|3|4|5)[0-9])|(0?[0-9]))/g,

    /**
     * 优先级5
     * 0点, 10点, 23点
     * 四点
     * 十点，十一点
     * 二十点，二十一点
     */
    reg5a: /((0?[0-9])|((1)[0-9])|((2)[0-3]))([点])/g,

    reg5b: /(([二][十])([一]|[二]|[三])?)([点])/g,

    reg5c: /([十]([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)([点])/g,

    reg5d: /(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])([点])/g,

    /**
     * 优先级6
     * 7月7日, 07月07日, 12月12日
     * 7/7, 07/07, 12/12, 7-7, 07-07, 12-12
     * 七月七日, 十二月三十一日,
     */
    reg6a: /(0?[1-9]|1[0-2])([月])((0?[1-9])|((1|2)[0-9])|30|31)([日])/g,

    reg6b: /(0?[1-9]|1[0-2])([/]|[-])(((1|2)[0-9])|30|31|(0?[1-9]))/g,

    reg6c: /((([十])([一]|[二])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))([月])((([三][十])[一]?)|((([二][十])|[十])([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))[日]/g,

    /**
     * 优先级7
     * 7月, 12月
     * 七月, 十二月
     */
    reg7a: /(0?[1-9]|1[0-2])([月])/g,

    reg7b: /((([十])([一]|[二])?)|([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))([月])/g

}

let regYear = /年/g

let regHour = /[点]|[:]/g

let regHalfHour = /点半/g

// 按照数字拆分
let regSplitDigital = /(\d+)/g

// 按照汉字拆分,融合时间识别规则
// let regSplitTimeCNchar = /(([二][十])([一]|[二]|[三])?)|([十]([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)|(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])/g
let regSplitDateCharCN = /((([二]|[三])?[十]([一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九])?)|(([〇]|[零])|[一]|[二]|[三]|[四]|[五]|[六]|[七]|[八]|[九]))/g

let regExpfilter = function (value, regExp) {
    let keyword = null;

    if (!(regExp instanceof RegExp)) {
        return { matched: keyword != null, keyword: keyword }
    }

    let position = value.search(regExp)
    if (position != -1) {
        keyword = value.match(regExp)[0]
        console.warn(keyword)
        // console.log(regExp)
    }

    return { matched: keyword != null, keyword: keyword }
}

let dateDetector = function () {
    let value = $('#regEx').val()

    let keywordArray = []
    let result

    result = regExpfilter(value, reg1a)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg1b)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg1c)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg2)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg3)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg4)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg5)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg6a)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg6b)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    result = regExpfilter(value, reg7)
    if (result.matched) {
        keywordArray.push(result.keyword)
    }

    console.log(keywordArray.length == 0 ? '未匹配' : keywordArray)

    return keywordArray
}

let dateDetector2 = function () {
    let value = $('#regEx').val()
    let keywordArray = []

    for (let key in regExpObj) {
        let result = regExpfilter(value, regExpObj[key])
        console.warn(key)
        if (result.matched) {
            keywordArray.push(result.keyword)
        }
    }

    console.log(keywordArray.length == 0 ? '未匹配' : keywordArray)

    return keywordArray
}

let digitalDateConverter = function (originDate) {
    let date = new Date();
    let sliceArray

    // 拆分日期
    sliceArray = originDate.match(regSplitDigital)

    if (!sliceArray || sliceArray.length == 0) {
        return new Date('Invalid Date')
    }

    console.info('日期数组', sliceArray)

    if (sliceArray.length == 3) {
        if (originDate.search(regHalfHour) > -1) {
            // 7月7日0点半
            date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], 30, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], 30, 0).toLocaleString())
        }
        else if (originDate.search(regHour) > -1) {
            // 7月7日0点
            date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], 0, 0).toLocaleString())

            // TODO: 处理日加1
            // TODO: 处理年加1
        }
        else {
            // 2018年7月7日 2018-7-7 2018/7/7
            date = new Date(sliceArray[0], sliceArray[1] - 1, sliceArray[2], 9, 0, 0).toLocaleString()
            console.log(new Date(sliceArray[0], sliceArray[1] - 1, sliceArray[2], 9, 0, 0).toLocaleString())

            // TODO: 处理年加1
        }
    }
    else if (sliceArray.length == 4) {
        // 12月12日23点59分
        date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], sliceArray[3], 0).toLocaleString()
        console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], sliceArray[2], sliceArray[3], 0).toLocaleString())

        // TODO: 处理日加1
        // TODO: 处理年加1
    }
    else if (sliceArray.length == 2) {
        if (originDate.search(regHour) > -1) {
            // 23点59分
            // 23:59
            date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], sliceArray[1], 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], sliceArray[1], 0).toLocaleString())

            // TODO: 处理日加1
        }
        else {
            // 7月7日 07/07
            date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], 9, 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], 9, 0, 0).toLocaleString())

            // TODO: 处理年加1
        }
    }
    else if (sliceArray.length == 1) {
        if (originDate.search(regHalfHour) > -1) {
            // 3点半
            date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 30, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 30, 0).toLocaleString())
        }
        else if (originDate.search(regHour) > -1) {
            // 0点, 10点, 23点
            date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 0, 0).toLocaleString())

            // TODO: 处理日加1
        }
        else {
            // 7月, 12月
            date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, 1, 9, 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, 1, 9, 0, 0).toLocaleString())

            // TODO: 处理年加1
        }
    }
    else {
        return new Date('Invalid Date')
    }

    return date
}

let cnCharDateConverter = function (originDate) {
    let date = new Date();
    let sliceArray

    // 拆分日期
    sliceArray = originDate.match(regSplitDateCharCN)

    if (!sliceArray || sliceArray.length == 0) {
        return new Date('Invalid Date')
    }

    console.info('日期数组', sliceArray)
    $('#dateTxt').text(sliceArray.join(' ; '))

    // TODO: 汉字转阿拉伯数字

    if (sliceArray.length == 2) {
        // 七月七日
        date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], 9, 0, 0).toLocaleString()
        console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, sliceArray[1], 9, 0, 0).toLocaleString())
    }
    else if (sliceArray.length == 1) {
        if (originDate.search(regHalfHour) > -1) {
            // 三点半
            date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 30, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 30, 0).toLocaleString())

            // TODO: 处理日加1
        }
        else if (originDate.search(regHour) > -1) {
            // 零点, 十点, 二十三点
            date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), sliceArray[0], 0, 0).toLocaleString())

            // TODO: 处理日加1
        }
        else {
            // 7月, 12月
            date = new Date((new Date()).getFullYear(), sliceArray[0] - 1, 1, 9, 0, 0).toLocaleString()
            console.log(new Date((new Date()).getFullYear(), sliceArray[0] - 1, 1, 9, 0, 0).toLocaleString())

            // TODO: 处理年加1
        }
    }
    else {
        return new Date('Invalid Date')
    }

    return date
}

let dateHandler = function (val) {
    if (val.length == 0) {
        return
    }

    let value = val[0]
    let date

    date = digitalDateConverter(value)
    if (date && !isNaN(date.getTime())) {
        $('#dateTxt').text(date)
        return date
    }

    date = cnCharDateConverter(value)
    if (date && !isNaN(date.getTime())) {
        $('#dateTxt').text(date)
        return date
    }

    return
}

$(document).ready(function () {
    $('#regEx').on('change', function () {
        dateHandler(dateDetector2())

        // let value = $('#regEx').val()
        // console.log('中文日期', value.search(reg16), reg16)
        // console.log('中文日期', value.search(reg12), reg12)
        // console.log('中文日期', value.search(reg13), reg13)

    })
})