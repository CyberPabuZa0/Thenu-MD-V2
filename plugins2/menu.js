//████████╗██╗  ██╗███████╗███╗   ██╗██╗   ██╗    ███╗   ███╗██████╗ 
//╚══██╔══╝██║  ██║██╔════╝████╗  ██║██║   ██║    ████╗ ████║██╔══██╗
//   ██║   ███████║█████╗  ██╔██╗ ██║██║   ██║    ██╔████╔██║██║  ██║
//   ██║   ██╔══██║██╔══╝  ██║╚██╗██║██║   ██║    ██║╚██╔╝██║██║  ██║
//   ██║   ██║  ██║███████╗██║ ╚████║╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
//   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                                   










const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "♻️",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {

        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB
        const config = await readEnv();
let menu = {
 main: '',
 download: '',
 group: '',
 owner: '',
 ai: '',
 convert: '',
 tools: '',
 search: '',
 fun: '',
 economy: '',
};

for (let i = 0; i < commands.length; i++) { if (commands[i].pattern && !commands[i].dontAddCommandList) { menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`; } }

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕋𝕙𝕖𝕟𝕦 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* THENUX (THENULA PANAPITI)

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1කින් මකා දමයි.*

> .settings = Customize Bot Settings Work For Owner Only.❄️
> .panel = get all menu list

*මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️*
*Reply to this message, type the number in the relevant menu and send ⤵️*
┏━━━━━━━━━━━━━━┓
┃╭┈───────────╮

> 1 💥_𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔_⤵💥

> 2 💥_𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔_⤵💥
 
> 3 💥_𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔_⤵💥
 
> 4 💥_TOOL 𝐌𝐄𝐍𝐔_⤵💥

> 5 💥_FUN 𝐌𝐄𝐍𝐔_⤵💥

> 6 💥_SEARCH 𝐌𝐄𝐍𝐔_⤵💥

> 7 💥_OWNER 𝐌𝐄𝐍𝐔_⤵💥

> 8 💥_CONVERT 𝐌𝐄𝐍𝐔_⤵💥

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛

*✸𝕋𝕙𝕖𝕟𝕦 𝕄𝔻 𝔹𝕆𝕋✸*`

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/mJ5vk7c/Thenu-MD-new-card-1.png'; // Replace with your actual image URL

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

setTimeout(async () => {
                    await conn.sendMessage(from, { delete: sentMsg.key });
                }, 90000); // 10 seconds timeout for deletion



        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`💥𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━┓
┃╭┈────────━──╮
*👋 Hello ${pushname}*
*📝 Bot Name:* ${config.BOT_NAME}
*👤 Owner:* Thenula..
*📱 Bot Number:* wa.me/${config.BOT_NUMBER}
*📝 Prefix:* ${config.PREFIX}
*📝 Commands:*156


👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 MAIN COMMANDS
│───────
 ${menu.main}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '2':
                        reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━┓
┃╭┈─────━━━━──╮
*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 GROUP COMMANDS
│───────
${menu.group}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '3':
                        reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━━┓
┃╭┈────────━━──╮
*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 DOWNLOAD COMMANDS
│───────
${menu.download}

╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '4':
                        reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━┓
┃╭┈────━━━━──╮
*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 TOOL COMMANDS
│───────
${menu.tools}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
break;
case '5':
    reply(`💥FUN 𝐌𝐄𝐍𝐔💥



*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 FUN COMMANDS
│───────
${menu.fun}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
break;
case '6':
    reply(`💥SEARCH 𝐌𝐄𝐍𝐔💥



*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 SEARCH COMMANDS
│───────
${menu.search}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
break;
case '7':
    reply(`💥OWNER 𝐌𝐄𝐍𝐔💥



*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 OWNER COMMANDS
│───────
${menu.owner}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
break;
case '8':
    reply(`💥CONVERT 𝐌𝐄𝐍𝐔💥



*👋 Hello ${pushname}*

> 👨‍💻 ​🇹​​🇭​​🇪​​🇳​​🇺​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ᵀʰᵉⁿᵘ⁻ᴹᴰ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 💫

╭───────────●●►
│📜 CONVERT COMMANDS
│───────
${menu.convert}
╰───────────●●►
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                }
           
setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 90000); // 10 seconds timeout for deletion
 }
        });

    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});

// Delete last 