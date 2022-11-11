const execute = async (event, context) => {
    console.log('Hello from my lambda cronjob');
    const now = new Date().toLocaleTimeString();
    console.log(`Run at ${now}`)
    return context.logStreamName;
}

module.exports = {
    execute
}