/**
 * 无设计模式
 */
// function Company() {
//   // 职位信息清单
//   this.vacancyList = [];
//   // 面试清单
//   this.interviewList = [];
//   // 更新职位信息
//   this.setVacancy = function (value) {
//     this.vacancyList.push(...value);
//   };
//   // 预约面试
//   this.bookInterview = function (candidate, title) {
//     console.log(`${candidate.name}预约面试${title}，联系方式：${candidate.contactNumber}`);
//     this.interviewList.push({ candidate, title });
//   };
// }

// function Candidate(name, contactNumber, company) {
//   this.name = name;
//   this.contactNumber = contactNumber;
//   this.company = company;
//   // 获取职位信息
//   this.learnAboutVacancy = function () {
//     this.company.vacancyList.forEach((vacancy) => {
//       console.log(`${this.name}了解了职位：${vacancy.title}`);
//       this.company.bookInterview(this, vacancy.title);
//     });
//   };
// }

// // // 场景
// var company = new Company();
// var tom = new Candidate("Tom", 13800000011, company);
// var jerry = new Candidate("Jerry", 13800000022, company);

// company.setVacancy([
//   { title: "software engineer" },
//   { title: "quality assurance" },
// ]);
// tom.learnAboutVacancy();
// jerry.learnAboutVacancy();

/**
 * 观察者模式
 */

// 发布者
function Subject() {
  // 职位信息清单
  this.vacancyList = [];
  // 面试清单
  this.interviewList = [];
  // 求职者清单【新增】
  this.candidateList = [];
  // 更新职位信息
  this.setVacancy = function (value) {
    this.vacancyList.push(...value);
  };
  // 注册求职者【新增】
  this.register = function (candidate) {
    this.candidateList.push(candidate);
  };
  // 通知求职者【新增】
  this.notify = function () {
    for (candidate of this.candidateList) {
      candidate.learnAboutVacancy();
    }
  };
  // 预约面试【改造】
  this.bookInterview = function (candidate, title) {
    let interviewee = this.candidateList.find(
      (item) => item.name === candidate.name
    );
    if (!interviewee) {
      // 处理候选人未注册的情况
      this.register(candidate);
    }

    console.log(
      `${candidate.name}预约面试${title}，联系方式：${candidate.contactNumber}`
    );
    this.interviewList.push({ candidate, title });
  };
}

// 观察者
function Observer(name, contactNumber, company) {
  this.name = name;
  this.contactNumber = contactNumber;
  this.company = company;
  // 进行注册【新增】
  this.company.register(this);
  // 获取职位信息
  this.learnAboutVacancy = function () {
    this.company.vacancyList.forEach((vacancy) => {
      console.log(`${this.name}了解了职位：${vacancy.title}`);
      this.company.bookInterview(this, vacancy.title);
    });
  };
}

// 场景
var company = new Subject();
// 创建实例【改造】
var tom = new Observer("Tom", 13800000011, company);
var jerry = new Observer("Jerry", 13800000022, company);

company.setVacancy([
  { title: "software engineer" },
  { title: "quality assurance" },
]);
company.notify();
