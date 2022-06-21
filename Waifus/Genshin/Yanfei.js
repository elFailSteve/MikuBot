const Waifu = require('../Waifu')

const Name               = "Yanfei"
const Description        = ""
const Url                = "https://www.pinterest.com.mx/pin/95842298313989239/"
const Img                = "https://i.pinimg.com/564x/ad/62/1c/ad621ca466f2af6f27f598daf8348d83.jpg"
const Command            = "yanfei"
const CommandDescription = ""

const Yanfei = new Waifu(
    Name,
    Description,
    Url,
    Img,
    Command,
    CommandDescription
)

module.exports = Yanfei.exportWaifu()