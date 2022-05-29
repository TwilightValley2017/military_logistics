//#region calculating area

/**
 * #SCENE 场景1
 * 实现了对正方形面积的计算的需求，一切看起来很完美  
 */
!(function () {
    function Rectangle(width, height) {
        this.width = width
        this.height = height
    }

    function AreaCalculator() {
        this.area = function (shapes) {
            let area = 0
            for (let shape of shapes) {
                if (shape instanceof Rectangle) {
                    area += shape.width * shape.height
                }
            }
            return area
        }
    }

    let rectangles = [new Rectangle(1, 0.5), new Rectangle(20, 10), new Rectangle(3, 4)]
    console.log('总面积为', new AreaCalculator().area(rectangles))
})()

/**
 * #SCENE 场景2
 * 现在只计算正方形面积似乎不够了，我们还需要计算圆形的面积，经过一番思考，还是能够掌控局面的
 */
!(function () {
    function Rectangle(width, height) {
        this.width = width
        this.height = height
    }

    function Circle(radius) {
        this.radius = radius
    }

    function AreaCalculator() {
        this.area = function (shapes) {
            let area = 0
            for (let shape of shapes) {
                if (shape instanceof Rectangle) {
                    area += shape.width * shape.height
                } else if (shape instanceof Circle) {
                    area += Math.pow(shape.radius, 2) * Math.PI
                } else {
                    continue
                }

            }
            return area
        }
    }

    let shapes = [new Rectangle(1, 0.5), new Rectangle(20, 10), new Circle(3.5), new Circle(1)]
    console.log('总面积为', new AreaCalculator().area(shapes))
})()

/**
 * #TIP 小结
 * 不久之后，计算三角形面积的需求又来了，这种基本场景总不是强人所难吧，但是我们又得修改代码了。
 * 原因就是 AreaCalculator 方法，当我们需要进行扩展时，并不是对修改封闭的（closed for modification），
 * 换句话说，它不是对扩展开放的（open for extension）
 */

// 
/**
 * #SCENE 开放-封闭原则
 * 将图形进行抽象，抽象为具有某种行为规范的基类，其行为规范并不提供行为的具体实现，而是把具体实现留给了子类
 */

!(function () {
    // 基类 Shape
    function Shape() {
        this.area = function () {
            throw new Error('未对方法进行重写')
        }
    }

    // 派生类 Rectangle
    function Rectangle(width, height) {
        Shape.call(this)
        this.width = width
        this.height = height
        this.area = function () {
            return this.width * this.height
        }
    }
    Rectangle.prototype = Object.create(Shape.prototype, {
        constructor: {
            value: Rectangle,
            writable: true,
            enumerable: true,
        }
    })
    Object.setPrototypeOf(Rectangle, Shape)

    // 派生类 Circle
    function Circle(radius) {
        Shape.call(this)
        this.radius = radius
        this.area = function () {
            return Math.pow(this.radius, 2) * Math.PI
        }
    }
    Circle.prototype = Object.create(Shape.prototype, {
        constructor: {
            value: Circle,
            writable: true,
            enumerable: true,
        }
    })
    Object.setPrototypeOf(Circle, Shape)

    // 重构后的 AreaCalculator 与低层模块解耦了，并且保留了类型的校验
    // #TIP 高层模块与低层模块，是IoC中的概念
    function AreaCalculator() {
        this.area = function (shapes) {
            let area = 0
            for (let shape of shapes) {
                if (shape instanceof Shape) {
                    area += shape.area()
                }
            }
            return area
        }
    }

    let shapes = [new Rectangle(1, 0.5), new Rectangle(20, 10), new Circle(3.5), new Circle(1)]
    console.log('总面积为', new AreaCalculator().area(shapes))

    // 现在，我们看看如何应对计算三角形面积的需求

    // 派生类 Triangle
    function Triangle(base, height) {
        Shape.call(this)
        this.base = base
        this.height = height
        this.area = function () {
            return this.base * this.height * 0.5
        }
    }
    Triangle.prototype = Object.create(Shape.prototype, {
        constructor: {
            value: Triangle,
            writable: true,
            enumerable: true,
        }
    })
    Object.setPrototypeOf(Triangle, Shape)

    shapes.push(new Triangle(4, 3))
    console.log('总面积为', new AreaCalculator().area(shapes))

    /**
     * #TIP 回顾一下场景1与场景2的实现，高层模块 AreaCalculator 依赖于低层模块 Rectangle/Circle，一旦低层模块需要扩展，高层模块不可避免的被修改，
     * 而在实际场景中，低层模块的变动频率可能是10倍，而高层模块变动的代码量可能是百倍甚至千倍！
     */

})()

//#endregion

//#region ATM and Bank Card

/**
 * #SCENE 业务描述
 * 
 * 1.a 银行卡需要符合银联标准（低层模块）
 * 1.b ATM 柜员机只能识别银联标准的银行卡（高层模块）
 * 
 * 2.a 银行卡具备卡号，卡种，余额信息
 * 2.b 银行卡信息可读取
 * 2.c 银行卡余额可变动
 * 
 * 3.a ATM 可读取卡信息
 * 3.b ATM 可进行银行卡余额变动，如存款
 * 3.c ATM 可退卡
 */
!(function () {
    // 银行卡类型枚举
    const BankCardType = {
        NULL: null,
        DebitCard: 1,
        CreditCard: 2,
    }
    Object.freeze(BankCardType)

    //#region 银联卡
    // 模拟抽象类 银联卡
    class UnionPay_BankCard_AbstractClass {
        constructor() {
            if (new.target === UnionPay_BankCard_AbstractClass) {
                throw new Error('抽象类不能实例化')
            }
            /**
             * 模拟抽象属性
             */
            this.cardSN = null
            this.cardCategory = BankCardType.NULL
            this.balance = 0

            /**
             * 模拟抽象方法
             * 强制派生类必须通过重写实现
             */
            this._cardSN_Generator = function () {
                throw new Error('Method _cardSN_Generator is not overriden in derived class')
            }
            this.info = function () {
                throw new Error('Method info is not overriden in derived class')
            }
            this.changeBalance = function () {
                throw new Error('Method changeBalance is not overriden in derived class')
            }
        }
    }

    /**
     * 派生类基类
     * 提供公共的实现，提高复用性
     */
    class UnionPay_BankCard_BaseClass extends UnionPay_BankCard_AbstractClass {
        constructor(cardCategory) {
            if (new.target === UnionPay_BankCard_BaseClass) {
                throw new Error('基类不能实例化')
            }

            super()

            this.cardCategory = cardCategory ? cardCategory : BankCardType.DebitCard

            // 初始化卡号
            this._cardSN_Generator = function () {
                this.cardSN = Math.round(Math.random() * 1e10, 10)
            }
            this._cardSN_Generator()

            // 返回卡信息
            this.info = function () {
                return {
                    cardSN: this.cardSN,
                    cardCategory: this.cardCategory,
                    balance: this.balance,
                }
            }

            // 余额变动
            this.changeBalance = function (sum) {
                switch (this.cardCategory) {
                    case BankCardType.CreditCard:
                        this.balance += sum
                        break

                    case BankCardType.DebitCard:
                        if (sum < 0 && this.balance < -sum) {
                            throw new Error('余额不足')
                        }
                        else {
                            this.balance += sum
                        }
                        break

                    default:
                        throw new Error('不支持的卡')
                }
            }
        }
    }

    // 派生类 ABC_BankCard
    class ABC_BankCard extends UnionPay_BankCard_BaseClass {
        constructor(cardCategory) {
            super(cardCategory)

            // 初始化卡号
            this.cardSN = 'ABC_' + this.cardSN
        }
    }

    // 派生类 ICBC_BankCard
    class ICBC_BankCard extends UnionPay_BankCard_BaseClass {
        constructor(cardCategory) {
            super(cardCategory)

            // 初始化卡号
            this.cardSN = 'ICBC_' + this.cardSN
        }
    }

    //#endregion

    //#region ATM
    // 模拟抽象类 银联 ATM 柜员机
    class UnionPay_ATM_AbstractClass {
        constructor() {
            if (new.target === UnionPay_ATM_AbstractClass) {
                throw new Error('抽象类不能实例化')
            }

            // 模拟抽象属性
            this.storage = null

            /**
             * 模拟抽象方法
             * 强制派生类必须通过重写实现
             */
            this.readCard = function () {
                throw new Error('Method readCard is not overriden in derived class')
            }
            this.ejectCard = function () {
                throw new Error('Method ejectCard is not overriden in derived class')
            }
            this.withdraw = function () {
                throw new Error('Method withdraw is not overriden in derived class')
            }
            this.checkBalance = function () {
                throw new Error('Method checkBalance is not overriden in derived class')
            }
            this.display = function () {
                throw new Error('Method checkBalance is not overriden in derived class')
            }
        }
    }

    // 派生类基类 
    class UnionPay_ATM_Baseclass extends UnionPay_ATM_AbstractClass {
        constructor() {
            if (new.target === UnionPay_ATM_Baseclass) {
                throw new Error('基类不能实例化')
            }

            super()

            this.ejectCard = function () {
                this.storage = null
            }

            this.display = function () {
                if (this.storage) {
                    console.log(this.storage.info())
                }
            }

            this.deposit = function() {
            }
        }
    }

    // 派生类 ABC_ATM
    class ABC_ATM extends UnionPay_ATM_Baseclass {
        constructor() {
            super()

            this.readCard = function (bankCard) {
                if (bankCard instanceof UnionPay_BankCard_BaseClass) {
                    this.storage = bankCard
                }
                else {
                    throw new Error('不支持的卡')
                }
            }

            this.withdraw = function (sum) {
                console.log('ABC 跨行取款手续费 1%')
                if (this.storage) {
                    this.storage.changeBalance(-sum)
                }
            }

            this.checkBalance = function () {
                if (this.storage) {
                    console.log('余额：', this.storage.balance)
                }
            }
        }
    }

    // 派生类 ICBC_ATM
    class ICBC_ATM extends UnionPay_ATM_Baseclass {
        constructor() {
            super()

            this.readCard = function (bankCard) {
                if (bankCard instanceof UnionPay_BankCard_BaseClass) {
                    this.storage = bankCard
                }
                else {
                    throw new Error('不支持的卡')
                }
            }

            this.withdraw = function (sum) {
                console.log('ICBC 跨行取款手续费 2%')
                if (this.storage) {
                    this.storage.changeBalance(-sum)
                }
            }

            this.checkBalance = function () {
                if (this.storage) {
                    console.log('余额：', this.storage.balance)
                }
            }
            
            this.deposit = function(sum){
                console.log('请确认结束放款')
                if (this.storage) {
                    this.storage.changeBalance(sum)
                }
            }
        }
    }

    //#endregion

    // #SCENE ABC ATM
    !(function () {
        try {
            let biz1 = new ABC_ATM()

            // biz1.readCard(new ABC_BankCard())
            // biz1.withdraw(10)
            // biz1.checkBalance()
            // biz1.ejectCard()

            biz1.readCard(new ICBC_BankCard())
            biz1.withdraw(100)
            biz1.checkBalance()
            biz1.ejectCard()
        }
        catch (err) {
            console.error(err)
        }
    })()

    // #SCENE ICBC ATM
    !(function () {
        try {
            let biz1 = new ICBC_ATM()

            biz1.readCard(new ICBC_BankCard())
            biz1.display()
            biz1.deposit(1000)
            biz1.withdraw(100)
            biz1.checkBalance()
            biz1.ejectCard()
        }
        catch (err) {
            console.error(err)
        }
    })()

    /**
     * #TIP 后记
     * 业务如何封装，如何复用，耦合度如何把握
     * 模块化
     */
})()

//#endregion