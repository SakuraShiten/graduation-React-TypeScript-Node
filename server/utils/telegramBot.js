const TelegramApi = require('node-telegram-bot-api')
const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true })
const User = require('../models/User')
const Notice = require('../models/Notice')

const userState = {} //enter_login
checkLogin = async (login, password) => {
    const user = await User.findOne({ login, password })
    if (user) {
        return user
    }
    return false
}
class telegramBot {
    startBot = () => {
        bot.setMyCommands([
            { command: '/auth', description: 'Авторизироваться' },
            { command: '/deauth', description: 'Деавторизироваться' },
        ])

        bot.onText(/\/auth/, async (msg) => {
            const notice = await Notice.findOne({ mail: `@${msg.chat.id}` })
            if (notice) {
                await bot.sendMessage(msg.chat.id, "Вы уже авторизированы")
            } else {
                userState[msg.chat.id] = { state: 'enter_login' }
                await bot.sendMessage(msg.chat.id, "Введите логин")
            }
        });
        bot.onText(/\/deauth/, async (msg) => {
            await Notice.deleteOne({ mail: `@${msg.chat.id}` })
            await bot.sendMessage(msg.chat.id, "Ваши данные успешно удалены")
        });
        bot.on('message', async (msg) => {
            if (userState[msg.chat.id]?.state === 'enter_login') {
                userState[msg.chat.id].login = msg.text
                userState[msg.chat.id].state = 'enter_password'
                await bot.sendMessage(msg.chat.id, "Введите пароль")
            } else if (userState[msg.chat.id]?.state === 'enter_password') {
                userState[msg.chat.id].password = msg.text
                userState[msg.chat.id].state = 'finish'
                await bot.sendMessage(msg.chat.id, "Проверка данных, ожидайте...")
                const user = await checkLogin(userState[msg.chat.id].login, userState[msg.chat.id].password)
                if (user) {
                    const notice = new Notice({ mail: `@${msg.chat.id}`, owner: user._id })
                    await notice.save()
                    await bot.sendMessage(msg.chat.id, `Приветствую, ${user.fio}`)
                    await bot.sendMessage(msg.chat.id, "Новые заявки начнут приходить по мере их поступления")
                    delete userState[msg.chat.id]
                } else {
                    await bot.sendMessage(msg.chat.id, "Не правильные данные, повторите попытку")
                    delete userState[msg.chat.id]
                }
            }
        });
    }
    sendNoticeBot = async (idChat, message) => {
        await bot.sendMessage(idChat, message)
    }
}

module.exports = new telegramBot()

// delete userState[msg.chat.id]
