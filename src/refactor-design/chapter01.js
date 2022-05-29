import createStatementData from './chapter01-createStatementData.js'

window.addEventListener('load', async function() {
    let playsURL = "refactor-design/chapter01-plays.json"
    let invoicesURL = "refactor-design/chapter01-invoices.json"
    let playsObj = await requestJSON(playsURL)
    let invoicesObj = await requestJSON(invoicesURL)
    let result = createStatementData(playsObj, invoicesObj)
    
    console.log(renderPlainText(result))
})

function requestJSON(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open('get', url)
        request.send(null)
        request.onload = function() {
            if (request.status === 200) {
                resolve(JSON.parse(request.responseText))
            } else {
                reject(request)
            }
        }
    })   
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`
    result = data.performances.reduce((result, perf) => result += `· ${perf.name}: ${formatCurrency(perf.amount)} (${perf.audience} seats)\n`, result)
    result += `Amount owed is ${formatCurrency(data.totalAmount)}\n`
    result += `You earned ${data.totalVolumeCredits} credits\n`
    return result
}

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2}).format(amount / 100)
}