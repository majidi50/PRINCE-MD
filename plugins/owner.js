const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/4ZSYvPTq/lordali.jpg' }, // Image URL from your request
            caption: `╭━━〔 *PRINCE_MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${ownerName}
┃◈┃• *Number* ${ownerNumber}
┃◈┃• *Version*: 2.0.0 Beta
┃◈╰─┬──────────┈⊷
┃◈╭─┴────────────●●►
┃◈├ ╔═╦═╗───╔══╗╔╗╔╗╔╗
┃◈├ ║║║║╠╦╦═╩╗╔╩╣╚╬╬╝║
┃◈├ ║║║║║╔╩══╣║╬║║║║╬║
┃◈├ ╚╩═╩╩╝───╚╩═╩╩╩╩═╝
┃◈╰─────────────●●►
╰──────────────┈⊷
> ©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 PRINCE_𝙼𝙳`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363207624903731@newsletter',
                    newsletterName: 'PRINCE 𝐓𝐄𝐂𝐇 🤖',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Tohidkhan6332/TOHID-DATA/raw/refs/heads/main/autovoice/menunew.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
