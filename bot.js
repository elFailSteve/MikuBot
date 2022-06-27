const Discord = require('discord.js')
const Commands = require('./Commands')
const WaifusContent = require('./Waifus/WaifusContent')

const client = new Discord.Client({
    intents:[
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
})

client.on('ready', () => {
    console.log("Listo")

    client.user.setPresence(
        {
            activities:[{name: "!help", type: 'LISTENING'}]
        }
    )
})

client.on('guildMemberAdd', member => {
    createNewMemberView(member.displayName, member.displayAvatarURL())
})

client.on('messageCreate', message => {
    if(message.content.toLowerCase() == "!help") {
        createCommandsView(message)
    }
    createWaifusView(message)
})

async function createNewMemberView(Name = "", urlImg = "") {

    var Saludos = [
        "Buenas",
        "Bienvenid@ a la pandilla",
        "Bienvenido"
    ]

    var Random = Math.floor(Math.random() * Saludos.length)

    const imgMessage = new Discord.MessageEmbed({
        title: Name,
        thumbnail: {
            url: urlImg
        },
        description: Saludos[Random],
        color: "#FFA833",
        timestamp: new Date()
    })

    const chanel = await client.channels.fetch("984272161344749672")
    await chanel.send({ embeds: [imgMessage] })
}

function createCommandsView(message = Discord.Message) {
    const Fields = []

    for(i = 0; i < Commands.Commands.length; i++) {
        Fields.push({name: Commands.Commands[i], value: Commands.CommandsDescription[i]})
    }

    const Message = new Discord.MessageEmbed({
        title: "Comandos disponibles",
        fields: Fields
    })

    message.channel.send({embeds: [Message]})
}

function createWaifusView(message = Discord.Message) {
    for(i = 0; i < WaifusContent.length; i++) {
        const imageMessage = new Discord.MessageEmbed({
            title: WaifusContent[i].name,
            description: WaifusContent[i].description,
            color: "#FF8000",
            image: {
                url: WaifusContent[i].img
            },
            url: WaifusContent[i].url,
            timestamp: new Date()
        })
    
        if(message.content.toLowerCase() == WaifusContent[i].command) {
            message.channel.send({embeds: [imageMessage]})
        }
    }
}

client.login("ODI3NzA5NjM4NzEwOTE5MjEy.GftSlo.rDHk5MH1w23Us7JShe7BBQidCknBOZ6Jl-L87I")