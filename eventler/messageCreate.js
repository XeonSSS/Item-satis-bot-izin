export default client => {

    client.on("messageCreate", message => {
        if(message.content.toLowerCase() == "sa") {
            message.reply("İtem satış")
        }
    })

}