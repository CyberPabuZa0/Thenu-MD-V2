const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const { title } = require('process')

cmd({
    pattern: "alive",
    react: "📰",
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

if(!isOwner && !isGroup && !isInbox) return

    try {

        const config = await readEnv();

        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        // Check AUTO_STATUS_READ variable
        const autoStatusRead = config.AUTO_READ_STATUS === 'true' ? 'Enabled' : 'Disabled';

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 THENU 𝕄𝔻 𝔹𝕆𝕋✸*

𝙽𝙾𝚆 𝚄𝚂𝙴𝙳 𝚁𝙰𝙼: ${usedRAM} 𝙼𝙱 
𝚄𝙿 𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}

®THENU-AI®

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව තප්පර 20 මකා දමයි.*
🛑 *This message will delete automatic 20 sec.*`
const sentMsg = await conn.sendMessage(from, {


    text: status,
    contextInfo: {

    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    title: '👾 THENU  |   AI ジ',
    thumbnailUrl: "https://i.ibb.co/mJ5vk7c/Thenu-MD-new-card-1.png",
    sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
    },
    externalAdReply: {
        title: `I'm Alive Now 👨‍💻`,
        body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
        thumbnailUrl: `https://i.ibb.co/mJ5vk7c/Thenu-MD-new-card-1.png`,
        sourceUrl: ``,
        mediaType: 1,
        renderLargerThumbnail: true
        }
            }
        }, { quoted: mek });


        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/mJ5vk7c/Thenu-MD-new-card-1.png'; // Replace with your actual image URL

        // Send the image with the status as the caption
      const vv = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });
setTimeout(async () => {
                    await conn.sendMessage(from, { delete: vv.key });
                }, 20000); // 20 seconds timeout for deletion

    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
})