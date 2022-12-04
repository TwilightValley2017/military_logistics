// /plugin/managers    用于动态渲染集成模板
const sourceData = [
    {
        "id": 26,
        "description": "泛微审批",
        "createUser": "admin",
        "serviceId": 21,
        "moduleId": 9,
        "frameId": 2,
        configuration: {
            page1: [
                {
                    label: 'message_template',
                    key:'message_template',
                    value:"",
                    type:'table',
                    zh:'消息模板',
                    en:'mes_tem',
                    content:[
                        {
                            label:'two',
                            key:'two',
                            zh:'双因子认证',
                            en:'two',
                            id:1,
                            message_list:[
                                {
                                    label:'input1',
                                    key:'input1',
                                    value:"",
                                    zh:'输入框1',
                                    en:'input1',
                                    placeholder:'请输入'-1,
                                    require:true,
                                },
                                {
                                    label:'input2',
                                    key:'input2',
                                    value:'',
                                    zh:'输入框2',
                                    en:'input2',
                                    placeholder:'请输入2',
                                    require:true,
                                },
                            ]
                        }
                    ]
                },
                {
                    label:"approve_weaver_url",
                    key:"approve_weaver_url",
                    zh:"系统地址",
                    en:"System address",
                    value:"",
                    type:"input",
                    require:true,
                    placeholder:"approve_weaver_urlPlaceholder",
                    pzh:"http://172.16.58.236:81/services/WorkflowService",
                    pen:"http://172.16.58.236:81/services/WorkflowService"
                },
            ]
        },
        "version": "V1.1.1",
        "status": 1,
        "runPath": null,
        "ctime": 1620804143000,
        "mtime": 1620804147000,
        "runStatus": 1,
        "moduleType": "marne_messageChannel_config",
        "moduleName": "消息通道集成",
        "moduleConfig": "",
        "serviceType": "sms",
        "serviceTypeChild": "aliyun",
        "zhServiceTypeChild": "阿里云",
        "enServiceTypeChild": "Aliyun",
        "zhServiceName": "短信",
        "enServiceName": "Weaver sms",
        "zhModuleName": "消息通道集成",
        "enModuleName": "Approval integration",
        "frameName": "integration",
        "upload": "0",
        "unUpload": "0",
        "start": "0",
        "unStart": "0",
        "stoped": "0",
        "unStop": "0",
        "delete": "0",
        "unDelete": "0"
    },
    {
        "id": 26,
        "description": "泛微审批",
        "createUser": "admin",
        "serviceId": 21,
        "moduleId": 9,
        "frameId": 2,
        "configuration": "{\"page1\":[{\"label\":\"approve_weaver_url1\",\"key\":\"approve_weaver_url1\",\"zh\":\"系统地址\",\"en\":\"System address\",\"value\":\"\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_weaver_urlPlaceholder1\",\"pzh\":\"http://172.16.58.236:81/services/WorkflowService1\",\"pen\":\"http://172.16.58.236:81/services/WorkflowService\"},{\"label\":\"approve_weaver_hrm_url\",\"key\":\"approve_weaver_hrm_url\",\"zh\":\"系统人力资源地址\",\"en\":\"System hrm address\",\"value\":\"\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_weaver_hrm_urlPlaceholder\",\"pzh\":\"http://172.16.58.236:81/services/HrmService\",\"pen\":\"http://172.16.58.236:81/services/HrmService\"},{\"label\":\"approve_workflow_id\",\"key\":\"approve_workflow_id\",\"zh\":\"工作流ID\",\"en\":\"Workflow ID\",\"value\":\"\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_workflow_idPlaceholder\",\"pzh\":\"工作流模板ID\",\"pen\":\"Workflow template ID\"},{\"label\":\"approve_emergency_level\",\"key\":\"approve_emergency_level\",\"zh\":\"审批紧急程度\",\"en\":\"Urgency of approval\",\"value\":\"0\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_emergency_levelPlaceholder\",\"pzh\":\"正常：0，重要：1，紧急：2\",\"pen\":\"Normal: 0, Important: 1, Urgent: 2\"},{\"label\":\"approve_id_mapping\",\"key\":\"approve_id_mapping\",\"zh\":\"审批编号字段\",\"en\":\"Approval number field\",\"value\":\"bh\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_id_mappingPlaceholder\",\"pzh\":\"bh\",\"pen\":\"bh\"},{\"label\":\"approve_creator_mapping\",\"key\":\"approve_creator_mapping\",\"zh\":\"审批创建人字段\",\"en\":\"Approval creator field\",\"value\":\"cjr\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_creator_mappingPlaceholder\",\"pzh\":\"cjr\",\"pen\":\"cjr\"},{\"label\":\"approve_date_mapping\",\"key\":\"approve_date_mapping\",\"zh\":\"创建日期字段\",\"en\":\"Creation date field\",\"value\":\"cjrq\",\"type\":\"input\",\"require\":true,\"placeholder\":\"approve_date_mappingPlaceholder\",\"pzh\":\"cjrq\",\"pen\":\"cjrq\"},{\"label\":\"approve_department_mapping\",\"key\":\"approve_department_mapping\",\"zh\":\"部门字段\",\"en\":\"Department field\",\"value\":\"bm\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_department_mappingPlaceholder\",\"pzh\":\"bm\",\"pen\":\"bm\"},{\"label\":\"approve_function_mapping\",\"key\":\"approve_function_mapping\",\"zh\":\"网盘操作字段\",\"en\":\"Network disk operation field\",\"value\":\"wpcz\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_function_mappingPlaceholder\",\"pzh\":\"wpcz\",\"pen\":\"wpcz\"},{\"label\":\"approve_description_mapping\",\"key\":\"approve_description_mapping\",\"zh\":\"申请说明字段\",\"en\":\"Application description field\",\"value\":\"sqsm\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_description_mappingPlaceholder\",\"pzh\":\"sqsm\",\"pen\":\"sqsm\"},{\"label\":\"approve_file_mapping\",\"key\":\"approve_file_mapping\",\"zh\":\"文件名称字段\",\"en\":\"File name field\",\"value\":\"wjmc\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_file_mappingPlaceholder\",\"pzh\":\"wjmc\",\"pen\":\"wjmc\"},{\"label\":\"approve_fileLink_mapping\",\"key\":\"approve_fileLink_mapping\",\"zh\":\"文件地址字段\",\"en\":\"File address field\",\"value\":\"wjdz\",\"type\":\"input\",\"require\":false,\"placeholder\":\"approve_fileLink_mappingPlaceholder\",\"pzh\":\"wjdz\",\"pen\":\"wjdz\"},{\"label\":\"system_describe\",\"key\":\"system_describe\",\"zh\":\"系统描述\",\"en\":\"System description\",\"value\":\"\",\"type\":\"textarea\",\"require\":false,\"placeholder\":\"system_describePlaceholder\",\"pzh\":\"请输入应用描述，不超过200个字符\",\"pen\":\"Application description, up to 200 characters can be entered\"}]}",
        "version": "V1.1.1",
        "status": 1,
        "runPath": null,
        "ctime": 1620804143000,
        "mtime": 1620804147000,
        "runStatus": 1,
        "moduleType": "marne_messageChannel_config",
        "moduleName": "消息通道集成",
        "moduleConfig": null,
        "serviceType": "sms",
        "serviceTypeChild": "txyun",
        "zhServiceTypeChild": "腾讯云",
        "enServiceTypeChild": "Txyun",
        "zhServiceName": "短信",
        "enServiceName": "Weaver sms",
        "zhModuleName": "消息通道集成",
        "enModuleName": "Approval integration",
        "frameName": "integration",
        "upload": "0",
        "unUpload": "0",
        "start": "0",
        "unStart": "0",
        "stoped": "0",
        "unStop": "0",
        "delete": "0",
        "unDelete": "0"
    },
    {
        "id": 19,
        "description": "微信双因子登录",
        "createUser": "admin",
        "serviceId": 17,
        "moduleId": 7,
        "frameId": 2,
        //   "configuration":"{\"page1\":[{\"label\":\"message_template\",\"key\":\"message_template\",\"value\":\"\",\"type\":\"table\",\"zh\":\"消息模板\",\"en\":\"mes_tem\",\"content\":[{\"label\":\"two\",\"key\":\"two\",\"zh\":\"双因子认证2\",\"en\":\"two1\",\"id\":\"1\",\"message_list\":[{\"label\":\"input1\",\"key\":\"input1\",\"value\":\"\",\"zh\":\"输入框1\",\"en\":\"input1\",\"placeholder\":\"请输入-1\",\"require\":\"true\"},{\"label\":\"input1-1\",\"key\":\"input1-1\",\"value\":\"\",\"zh\":\"输入框1-1\",\"en\":\"input1\",\"placeholder\":\"请输入1-1\",\"require\":\"true\"}]}]}]}",
        "configuration": "{\"page1\":[{\"label\":\"corpId\",\"key\":\"corpId\",\"placeholder\":\"corpIdPlc\",\"type\":\"input\",\"zh\":\"Corp ID\",\"en\":\"Corp ID\",\"pzh\":\"请输入Corp ID\",\"pen\":\"Please enter corp ID\"},{\"label\":\"corpSecret\",\"key\":\"corpSecret\",\"placeholder\":\"corpSecretPlc\",\"type\":\"input\",\"zh\":\"Corp Secret\",\"en\":\"Corp secret\",\"pzh\":\"请输入Corp Secret\",\"pen\":\"Please enter corp secret\"},{\"require\":true,\"key\":\"agentId\",\"label\":\"agentId\",\"placeholder\":\"agentIdPlc\",\"type\":\"input\",\"zh\":\"Agent ID\",\"en\":\"Agent ID\",\"pzh\":\"请输入Agent ID\",\"pen\":\"Please enter agent ID\"}],\"page2\":{\"pen\":\"Please enter a IP address\",\"en\":\"ip\",\"label\":\"netEntry\",\"placeholder\":\"ipPlc\",\"type\":\"input\",\"zh\":\"ip\",\"key\":\"netEntry\",\"pzh\":\"请输入ip范围\",\"value\":\"\"},\"page3\":{\"pen\":\"Please enter message\",\"en\":\"message\",\"label\":\"messageText\",\"placeholder\":\"messagePlc\",\"type\":\"input\",\"zh\":\"消息\",\"key\":\"messageText\",\"pzh\":\"请输入消息\",\"value\":\"登录验证码为：{XXXXXX}，请尽快完成验证，如非本人操作，请忽略本消息\"}}",
        "version": "V1.1.1",
        "status": 1,
        "runPath": null,
        "ctime": 1620804143000,
        "mtime": 1620804147000,
        "runStatus": 1,
        "moduleType": "two_factor",
        "moduleName": "双因子登录集成",
        "moduleConfig": null,
        "serviceType": "weixin",
        "zhServiceName": "企业微信",
        "enServiceName": "WeCom",
        "zhModuleName": "双因子认证",
        "enModuleName": "Two-factor authentication",
        "frameName": "integration",
        "upload": "0",
        "unUpload": "0",
        "start": "0",
        "unStart": "0",
        "stoped": "0",
        "unStop": "0",
        "delete": "0",
        "unDelete": "0"
    },
]

console.log(sourceData)

// 去重
// 过滤 undefined
// 国际化数据结构

// 集成类型
const moduleGroup = sourceData.map(item => ({
    moduleId: item.moduleId,
    moduleType: item.moduleType,
    moduleName: item.moduleName,    
}))

// 系统类型-2级
const serviceGroup = sourceData.map(item => ({
    serviceId: item.serviceId,
    label: item.zhServiceName,
    value: item.serviceType,
    parentID: item.moduleId,
}))

// 系统集成-3级
const serviceChildrenGroup = sourceData.map(item => ({
    label: item.zhServiceTypeChild,
    value: item.serviceTypeChild,
    parentID: item.serviceId,
}))

// 拼装系统集成3级到对应的2级
serviceGroup.forEach(item => {
    item.children = serviceChildrenGroup.filter(item => item.parentID === item.serviceId)
})

// 系统集成3级对应的配置项
const serviceChildConfigGroup = sourceData.map(item => ({
    configuration: typeof item.configuration === 'String' ? JSON.parse(item.configuration) : item.configuration,
    parentID: item.serviceTypeChild || item.serviceId,
}))


console.log({
    moduleGroup,
    serviceGroup,
    serviceChildrenGroup,
    serviceChildConfigGroup,
})

const selectedServiceChildID = 'aliyun'

// 渲染配置项
const selectedConfig = serviceChildConfigGroup.find(item => item.parentID === selectedServiceChildID)
if (selectedConfig) {
    // 渲染
} else {
    // 报错
}

// serviceGroup.forEach(item => {
//     // 根据 
//     item.
// })


