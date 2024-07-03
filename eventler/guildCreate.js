import Komut_Kaydet from "../modifikasyonlar/bot/Komut_Kaydet.js"

export default client => {

    client.on("guildCreate", guild => {
        Komut_Kaydet(guild)
    })

}