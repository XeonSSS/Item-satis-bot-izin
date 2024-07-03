import Komut_Kaydet from "./Komut_Kaydet.js"

export default client => {

    client.guilds.cache.forEach(async guild => {
        const commands = (await guild.commands.fetch().catch(() => { })) || client.commands

        if(commands.size !== client.commands.size) Komut_Kaydet(guild)
    });
}