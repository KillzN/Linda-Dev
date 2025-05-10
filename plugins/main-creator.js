let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤');
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:LINDA BOT;;\nFN:LINDA BOT\nORG:LINDA BOT\nTITLE:Shadow Monarch\nitem1.TEL;waid=59164907907:59164907907\nitem1.X-ABLabel:LINDA BOT\nX-WA-BIZ-DESCRIPTION:El creador de las sombras, el gran LINDA BOT, líder de la oscuridad.\nX-WA-BIZ-NAME:LINDA BOT\nEND:VCARD`;

    let mensaje = `✨ *¡Tú has invocado al Shadow Monarch!* ✨\n\n🖤 *${m.pushName}*, tu consulta sobre el *creador* ha sido respondida. El gran *LINDA BOT* se presenta ante ti. 🖤\n\nAquí está el contacto del rey de las sombras:`;

    await conn.sendMessage(m.chat, { text: mensaje, contacts: { displayName: '@byLinda⁩', contacts: [{ vcard }] } }, { quoted: m });
}

handler.help = ['staff', 'dueño', 'creador', 'monarca']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler;
