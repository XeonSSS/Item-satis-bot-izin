import chalk from "chalk";
import Komut_Kontrol from "../modifikasyonlar/bot/Komut_Kontrol.js"

export default client => {

    client.once("ready", () => {
        console.log(chalk.red(`${client.user.username}`) + " Adlı bot aktif!")

        Komut_Kontrol(client)
    })

}