let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Putri Amelia
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jakarta/Makassar
│ ✎ _Status_ : Amel Cantik
│ ✎ _Grup Amell :
│    https://chat.whatsapp.com/J9v6iwwrDvX3zPpEnLbVwB
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/J9v6iwwrDvX3zPpEnLbVwB
│ ✎ _Youtube _:
│    https://youtube.com/channel/UC_KcMlX5LI9EZIVOgLOx9TQ
│ ✎ _Instagram_ : 
│    https://instagram.com/Amellbotz_
│ ✎ _WhatsApp_ :
│    wa.me/62895366943070
╰───────────────────
`.trim(), m)
}

handler.help = ['infoamel']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
