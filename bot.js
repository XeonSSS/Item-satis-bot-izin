import { Client , Collection } from "discord.js";
import {readdirSync} from "fs";
import "dotenv/config"


const client = new Client({
    intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_MESSAGE_REACTIONS"],
    presence: { status: "idle", activities: [{ name: "BvB Musics", type: "LISTENING" }]}
})

readdirSync("./eventler").forEach(async file  => {
    const event = await import(`./eventler/${file}`).then(m => m.default)
    event(client)
})

client.commands = new Collection()
readdirSync("./commands").forEach(async category => {
    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`)
        client.commands.set(command.data.isim, command)
    })
})

client.login(process.env.tokenbir)