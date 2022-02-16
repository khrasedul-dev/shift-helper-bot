const {Composer,Telegraf} = require('micro-bot')
const mongoose = require('mongoose')

const dbModel = require('./postSchema')

const postId = "620cdfa37cc580af57b7fe4b"

const bot = new Composer()

//DB mail gejaho3293@rubygon.com pass: rps
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.6rm9z.mongodb.net/telegramDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).catch((e)=>{
        console.log(e)
}).then((d)=>console.log('Database connected')).catch((e)=>console.log(e))

bot.start(ctx=>{
    ctx.reply("This is private bot")
})


bot.command('website',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].website ).catch('Something is wrong')
        }
    })

})



bot.command('twitter',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].twitter ).catch('Something is wrong')
        }
    })

})



bot.command('contract',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].contract).catch("Something is wrong")
        }
    })

})


bot.command('adminlist',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].adminlist ).catch('Something is wrong')
        }
    })

})



bot.command('marketing',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].marketing ).catch('Something is wrong')
        }
    })

})


bot.command('dextools',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].dextools ).catch('Something is wrong')
        }
    })

})


bot.command('news',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].news ).catch('Something is wrong')
        }
    })

})



bot.command('buy',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].buy ).catch('Something is wrong')
        }
    })

})



bot.command('help',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].help).catch("Something is wrong")
        }
    })

})


bot.command('instagram',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].instagram ).catch('Something is wrong')
        }
    })

})



bot.command('facebook',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].facebook ).catch('Something is wrong')
        }
    })

})


bot.command('youtube',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].youtube ).catch('Something is wrong')
        }
    })

})


bot.command('reddit',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].facebook ).catch('Something is wrong')
        }
    })

})


bot.command('supply',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data[0].youtube ).catch('Something is wrong')
        }
    })

})

//Set message

bot.hears(/setwebsitemessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setwebsitemessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        website: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })

})


bot.hears(/settwittermessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/settwittermessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        twitter: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })
})


bot.hears(/setcontractmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setcontractmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        contract: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })

})

bot.hears(/setadminlistmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setadminlistmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        adminlist: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setmarketingmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setmarketingmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        marketing: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setdextoolsmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setdextoolsmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        dextools: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setnewsmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setnewsmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        news: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })

})


bot.hears(/setbuymessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setbuymessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        buy: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })
})


bot.hears(/sethelpmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/sethelpmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        help: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully").catch("Something is wrong")
        }
    })

})

bot.hears(/setinstagrammessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setinstagrammessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        instagram: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setfacebookmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setfacebookmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        facebook: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setyoutubemessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setyoutubemessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        youtube: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})


bot.hears(/setsupplymessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setsupplymessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        supply: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})

bot.hears(/setredditmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setredditmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        reddit: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message set sucessfully ").catch("Something is wrong")
        }
    })

})



module.exports = bot