module.exports = {
  config: {
    name: "help",
    version: "2.0",
    author: "Killah",
    countDown: 5,
    role: 0,
    shortDescription: "Menu des commandes",
    longDescription: "Affiche toutes les commandes du bot",
    category: "system",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {

    const msg = `
╔══❀•°❀°•❀══╗
      🌸 𝗠𝗶𝗮 𝗔𝗶 🌸
╚══❀•°❀°•❀══╝

╭─〔 👑 ADMIN 〕─╮
✧ delete
╰───────────────╯

╭─〔 🤖 AI 〕─╮
✧ genx ✧ metaai ✧ nbpro
✧ pi ✧ prompt
╰───────────────╯

╭─〔 🎨 AI GENERATED 〕─╮
✧ nijix
╰────────────────────╯

╭─〔 🖼️ AI IMAGE 〕─╮
✧ art ✧ dalle3 ✧ gpt
✧ imagen4 ✧ supanime
╰───────────────────╯

╭─〔 🎬 AI VIDEO 〕─╮
✧ animate
╰──────────────────╯

╭─〔 💬 BOX CHAT 〕─╮
✧ adduser ✧ admin ✧ all
✧ antichangeinfobox
✧ autosetname ✧ badwords
✧ busy ✧ count ✧ filteruser
✧ kick ✧ onlyadminbox
✧ refresh ✧ rules
✧ sendnoti ✧ setname
✧ theme ✧ unsend ✧ warn
╰───────────────────╯

╭─〔 💖 CHAT 〕─╮
✧ bby
╰──────────────╯

╭─〔 ⚙️ CONFIG 〕─╮
✧ prefix ✧ setalias
╰────────────────╯

╭─〔 🌷 CUSTOM 〕─╮
✧ setleave ✧ setwelcome
✧ shortcut
╰─────────────────╯

╭─〔 💰 ECONOMY 〕─╮
✧ balancec ✧ bank
╰─────────────────╯

╭─〔 🎭 ENTERTAINMENT 〕─╮
✧ anime
╰──────────────────────╯

╭─〔 🎉 FUN 〕─╮
✧ anisearch ✧ emojimix
╰────────────────╯

╭─〔 🎮 GAME 〕─╮
✧ coc ✧ daily ✧ dhbc
✧ guessnumber ✧ maze
╰────────────────╯

╭─〔 📸 IMAGE 〕─╮
✧ 4k ✧ 4o ✧ aiphoto
✧ avatar ✧ moon
✧ pinterest ✧ rbg
✧ sorthelp
╰────────────────╯

╭─〔 ℹ️ INFO 〕─╮
✧ grouptag ✧ setrole
✧ texttoimage ✧ tid ✧ uid
╰────────────────╯

╭─〔 🛒 MARKET 〕─╮
✧ goatstore
╰────────────────╯

╭─〔 🎵 MEDIA 〕─╮
✧ alldl ✧ sing ✧ tiktok
✧ ytb
╰────────────────╯

╭─〔 🔞 NSFW 〕─╮
✧ fak
╰───────────────╯

╭─〔 🌦️ OTHER 〕─╮
✧ weather
╰────────────────╯

╭─〔 👑 OWNER 〕─╮
✧ adminonly ✧ backupdata
✧ cmd ✧ developer ✧ eval
✧ restart ✧ update
✧ setavt ✧ setlang
✧ premium ✧ shell
✧ whitelist
╰────────────────╯

╭─〔 🏆 RANK 〕─╮
✧ customrankcard
✧ rank ✧ rankup
╰────────────────╯

╭─〔 ☪️ RELIGION 〕─╮
✧ ramadan
╰──────────────────╯

╭─〔 💻 SOFTWARE 〕─╮
✧ appstore
╰──────────────────╯

╭─〔 ⚡ SYSTEM 〕─╮
✧ account ✧ file ✧ fork
✧ help ✧ perf ✧ stats
✧ uptime
╰────────────────╯

╭─〔 🛠️ TOOLS 〕─╮
✧ screenshot
╰────────────────╯

╭─〔 🔊 TTS 〕─╮
✧ say
╰──────────────╯

╭─〔 ☁️ UPLOADER 〕─╮
✧ imgbb
╰──────────────────╯

╭─〔 ✨ UTILITY 〕─╮
✧ accept ✧ approve
✧ cpanel ✧ numlookup
✧ pfp ✧ translate
╰──────────────────╯

╭─〔 📚 WIKI 〕─╮
✧ emojimean
╰───────────────╯

╔══❀•°❀°•❀══╗
 🌸 Prefix : ~
 💖 Owner : Killah
 📞 Use : ~help [cmd]
╚══❀•°❀°•❀══╝
`;

    message.reply(msg);
  }
};
