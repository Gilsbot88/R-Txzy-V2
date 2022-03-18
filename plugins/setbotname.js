// NurNurz
let handler = async (m, { conn, text, usedPrefix, args }) => {
  if (!text) throw `Harap masukkan text!\n\nContoh: ${usedPrefix + command} Haruno Bot`
  try {
    await conn.updateProfileName(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['Ragil Bot<teks>']
handler.tags = ['Ragil']
handler.command = /^(Ragil Bot)$/i
handler.owner = true

module.exports = handler
