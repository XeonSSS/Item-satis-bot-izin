import { MessageEmbed } from "discord.js"
import cooldown_kontrol from "../modifikasyonlar/cooldown_kontrol.js"

export default client => {

    client.on("interactionCreate", async interaction => {
        if(!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)
        if(!command) return

        if(command.data.yetki && !interaction.member.permissions.has(command.data.yetki)) return interaction.reply(`Bu komudu kullanabilmek için \`${command.data.yetki}\` yetkisine sahip olmalısın.`)

        //cooldown
        const cooldown = cooldown_kontrol(command, interaction.member.id)
        if(cooldown) return interaction.reply(`Bu komudu tekrar kullanabilmek için \`${cooldown}\` saniye beklemelisin!`)

            const embedtes = new MessageEmbed()
                .setTitle("Hata")
                .setDescription("Maalesef komudu kullanırken bir hata oluştu.")
                .setColor("RED")

        try {
            command.data.execute(interaction)
        } catch(e) {
            interaction.reply({ embeds: [embedtes] })
            console.log(e)
        }
    })
    
}