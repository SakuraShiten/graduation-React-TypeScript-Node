const nodemailer = require('nodemailer')
const Notice = require('../models/Notice')
const telegramBot = require('../utils/telegramBot')

const sendMail = async (fio, telephone, mail, service, data, time, about) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "testslyusarnode@gmail.com",
            pass: "CbVVeb88"
        }
    });
    const notice = await Notice.find()
    const mailNotice = notice.filter(item => item.mail[0] !== '@')
    const telegramNotice = notice.filter(item => item.mail[0] === '@').map(item => item.mail.slice(1))

    for (let idChat of telegramNotice) {
        telegramBot.sendNoticeBot(idChat, `Бронирование на имя ${fio}\nТелефон ${telephone}\nПочта ${mail}\nУслуга ${service}\nДень ${data}\nЧасы ${time}\nДополнительная информация: ${about || "Отсутствует"}`)
    }

    try {
        await transporter.sendMail({
            from: 'Шаровая молния',
            to: mailNotice.map(item => item.mail).join(', '),
            subject: 'Новое бронирование',
            text:
                `Бронирование на имя ${fio}\nТелефон ${telephone}\nПочта ${mail}\nУслуга ${service}\nДень ${data}\nЧасы ${time}\nДополнительная информация: ${about || "Отсутствует"}`,
        })
    } catch (e) {
        console.log("Почта не отправилась " + e)
    }
}

module.exports = sendMail