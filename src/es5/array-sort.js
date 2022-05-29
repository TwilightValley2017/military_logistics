let joinFunc = function () {
        let array = ["txt"];
        console.log(array.join(','))

        let mime = ["application/vnd.ms-excel", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        console.log(mime.join(','))
    }

    let mapFunc = function () {
        let origin = [4, 5, 6, 7, 9, '十']

        let newArr = origin.map(function (currnetVal, index, arr) {
            console.log(currnetVal, index, arr)
        })


    }

    let numberArr = [1, 3, 4, 9, 6, 10]
    let lowerLetterArr = ['a', 'z', 'e', 'd', 'c']
    let upperLetterArr = ['A', 'Z', 'E', 'D', 'C']
    let letterArr = ['Z', 'c', 'A', 'a']
    let charArr = ['把你', '把我', '讲理', '讲', '讲话']
    let mixedArr = ['z', 'A', '把你', '3', 'F', '把我', '讲理', '4', '1', '讲', '讲话']
    let mixedObj = [
        {id: 1, value: 'z'},
        {id: 1, value: 'A'},
        {id: 1, value: '把你'},
        {id: 1, value: '3'},
        {id: 1, value: 'F'},
        {id: 1, value: '把我'},
        {id: 1, value: '讲理'},
        {id: 1, value: '4'},
        {id: 1, value: '1'},
        {id: 1, value: '讲'},
        {id: 1, value: '讲话'},
    ]

    let sortNumberASC = function (pre, next) {
        return pre - next
    }

    let sortNumberDESC = function (pre, next) {
        return next - pre
    }

    let letterASC = function (pre, next) {
        let handledPre = pre.toLowerCase()
        let handledNext = next.toLowerCase()
        if (handledPre > handledNext) {
            return 1
        } else if (handledPre < handledNext) {
            return -1
        } else {
            return 0
        }
    }

    let letterDESC = function (pre, next) {
        let handledPre = pre.toLowerCase()
        let handledNext = next.toLowerCase()
        if (handledPre < handledNext) {
            return 1
        } else if (handledPre > handledNext) {
            return -1
        } else {
            return 0
        }
    }

    let charASC = function (pre, next, asc) {
        console.log(asc)
        return pre.localeCompare(next, 'zh')
    }
    let charDESC = function (pre, next) {
        return next.localeCompare(pre, 'zh')
    }

    let charSort = function (asc = 'ASC') {
        return function (pre, next) {
            if (asc == 'DESC') {
                return next.localeCompare(pre, 'zh')
            } else {
                return pre.localeCompare(next, 'zh')
            }
        }
    }

    let charObjSort = function (prop, asc = 'ASC') {
        return function (pre, next) {
            if (pre[prop] && next[prop]) {
                if (asc == 'DESC') {
                    return next[prop].localeCompare(pre[prop], 'zh')
                } else {
                    return pre[prop].localeCompare(next[prop], 'zh')
                }
            } else {
                console.warn(`Property ${prop} does not exist`)
                return 0
            }
        }
    }

    $(document).ready(function () {
        mixedObj.sort(charObjSort('value1', 'DSC'))
        console.log({mixedObj})

        // joinFunc()

        // mapFunc()
    })