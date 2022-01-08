function(properties, context) {
    var billId, amount, phone, email, account, comment, lifetime, successUrl, customFields

    var moment = require('moment')
    
    billId = properties.billId ? "&billId=" + properties.billId : ""
    amount = properties.amount ? "&amount=" + properties.amount : ""
    phone = properties.phone ? "&phone=" + properties.phone : ""
    email = properties.email ? "&email=" + properties.email : ""
    account = properties.account ? "&account=" + properties.account : ""
    comment = properties.comment ? "&comment=" + properties.comment : ""
    lifetime = properties.lifetime ? "&lifetime=" + moment(properties.lifetime).format("yyyy-MM-DDTHHmm") : ""
    successUrl = properties.successUrl ? "&successUrl=" + properties.successUrl : ""
    
    customFields = ""
    if (properties.customFields.length != 0) {
        properties.customFields.forEach(function(item){
            customFields = customFields + "&customFields[" + item["key"] + "]=" + item["value"]
        })
    }

    return {
        paymentLink: "https://oplata.qiwi.com/create?publicKey=" + properties.publicKey + billId + amount + phone + email + account + comment + lifetime + successUrl + customFields
    }
}