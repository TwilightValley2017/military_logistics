/**
 * 发布-订阅模式
 */
// function Publisher() {
//   // 职位信息
//   this.vacancyList = [];
//   // 更新职位信息
//   this.setVacancy = function (value) {
//     this.vacancyList.push(...value);
//   };
//   // 订阅中心，包含了所有求职者的订阅
//   this.subscriptionCenter = [];
//   // 注册用户订阅到订阅中心
//   this.register = function (subscription) {
//     this.subscriptionCenter.push(subscription);
//   };
//   // 发布订阅
//   this.publish = function () {
//     this.subscriptionCenter.forEach((subscription) => {
//       this.vacancyList.forEach((vacancy) => {
//         subscription(vacancy);
//       });
//     });
//   };
// }

// function Subscriber(name) {
//   this.name = name;
//   // 订阅
//   this.subscribe = function (notification) {
//     console.log(`${this.name} 收到了订阅消息：${notification.title}`);
//   };
// }

// var company = new Publisher();
// var tom = new Subscriber("Tom");
// var jerry = new Subscriber("Jerry");

// company.register(tom.subscribe.bind(tom));
// company.register(jerry.subscribe.bind(jerry));

// company.setVacancy([
//   { title: "software engineer" },
//   { title: "quality assurance" },
// ]);
// company.publish();

/**
 * 发布-订阅模式
 * 增加频道
 */
function Publisher() {
  // 职位信息
  this.vacancyList = [];
  // 更新职位信息
  this.setVacancy = function (value) {
    this.vacancyList.push(...value);
  };
  // 订阅中心，包含了所有求职者的订阅【改造】
  this.subscriptionCenter = {};
  // 注册用户订阅到订阅中心，增加频道【改造】
  this.register = function (channel, subscription) {
    if (!this.subscriptionCenter[channel]) {
      this.subscriptionCenter[channel] = [];
    }
    this.subscriptionCenter[channel].push(subscription);
  };
  // 发布订阅，根据订阅频道进行发布【改造】
  this.publish = function () {
    this.vacancyList.forEach((vacancy) => {
      if (this.subscriptionCenter[vacancy.title]) {
        this.subscriptionCenter[vacancy.title].forEach((subscription) => {
          subscription(vacancy);
        });
      }
    });
  };
}

function Subscriber(name) {
  this.name = name;
  // 订阅
  this.subscribe = function (notification) {
    console.log(`${this.name} 收到了订阅消息：${notification.title}`);
  };
}

var company = new Publisher();
var tom = new Subscriber("Tom");
var jerry = new Subscriber("Jerry");

// 订阅时传入频道【改造】
company.register("software engineer", tom.subscribe.bind(tom));
company.register("quality assurance", jerry.subscribe.bind(jerry));
company.register("software engineer", jerry.subscribe.bind(jerry));

company.setVacancy([
  { title: "software engineer" },
  { title: "quality assurance" },
]);
company.publish();

/**
 * 发布-订阅模式
 * 应用场景1
 */
// function EventTarget() {
//   // 事件【原来的职位信息】
//   this.events = [{ type: "click" }, { type: "mouseover" }];
//   // 事件监听【原来的订阅中心】
//   this.eventListener = {};
//   // 注册事件处理到对应的事件类型【原来的订阅注册，eventType是原来的频道】
//   this.addEventListener = function (eventType, eventHandler) {
//     if (!this.eventListener[eventType]) {
//       this.eventListener[eventType] = [];
//     }
//     this.eventListener[eventType].push(eventHandler);
//   };
//   // 触发事件【原来的发布订阅】
//   this.dispatchEvent = function (eventType) {
//     if (this.eventListener[eventType]) {
//       this.eventListener[eventType].forEach((eventHandler) => {
//         eventHandler.call(
//           this,
//           this.events.find((event) => event.type === eventType)
//         );
//       });
//     }
//   };
// }

// var div = new EventTarget();
// // 注册事件处理到对应的事件类型
// var eventHandler = function (event) {
//   console.log(`触发了事件：${event.type}`, this);
// };
// div.addEventListener("click", eventHandler);
// div.addEventListener("mouseover", eventHandler);
// // div.addEventListener("click", eventHandler).addEventListener("mouseover", eventHandler)
// // 触发事件
// div.dispatchEvent("click");
// div.dispatchEvent("mouseover");
