function(properties, context) {
    
	let string = properties.currency + "|" + properties.value + "|" + properties.billId + "|" + properties.siteId + "|" + properties.status
    
    return {
        signature: require('crypto').createHmac("SHA256", context.keys.SECRET_KEY).update(string).digest("hex")
    }
}