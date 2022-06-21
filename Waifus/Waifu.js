class Waifu {

    name = ""
    description = ""
    url = ""
    img = ""
    command = ""
    commandDescription = ""

    prefix = "!"

    constructor(Name = "", Description = "", Url = "", Img = "", Command = "", CommandDescription = "") {
        this.name               = Name
        this.description        = Description
        this.url                = Url
        this.img                = Img
        this.command            = Command
        this.commandDescription = CommandDescription

        if(this.commandDescription == "") {
            this.commandDescription = "Muestra una imagen de " + this.name
        }
    }

    exportWaifu() {
        return {
            name:               this.name,
            description:        this.description,
            url:                this.url,
            img:                this.img,
            command:            this.prefix + this.command,
            commandDescription: this.commandDescription
        }
    }
}

module.exports = Waifu