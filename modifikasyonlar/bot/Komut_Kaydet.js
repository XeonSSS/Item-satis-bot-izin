import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"

export default async guild => {

    const {client} = guild

    const body = client.commands.map(command => command.slash_data)
    
    try {

        await (new REST({ version: "9"}).setToken(process.env.tokenbir)).put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body }
        )

    } catch(e) {
        if(e.code == 50001) {
            const owner = guild.fetchOwner()
            owner.send("Komutlar başarılı bir şekilde kaydedilemedi! Lütfen tekrar ekleyiniz.").catch(() => { })
        }
        console.log(e)
    }

}