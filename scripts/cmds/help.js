module.exports = {
	config: {
		name: "help",
		version: "5.0",
		author: "Killah",
		countDown: 5,
		role: 0,
		shortDescription: "Help Menu",
		longDescription: "Affiche toutes les commandes",
		category: "system"
	},

	onStart: async function ({ message }) {

		const commands = global.GoatBot.commands;

		let msg = `
╔═══════『 ☠️ MIA AI ☠️ 』═══════╗

        ✦ ULTRA HELP MENU ✦
━━━━━━━━━━━━━━━━━━
`;

		const categories = {};

		for (const [name, cmd] of commands) {

			const category = cmd.config.category || "other";

			if (!categories[category])
				categories[category] = [];

			categories[category].push(name);
		}

		for (const category in categories) {

			msg += `\n╭━〔 ${category.toUpperCase()} 〕━⬣\n`;

			categories[category].forEach(cmdName => {
				msg += `┃ ✧ ${cmdName}\n`;
			});

			msg += `╰━━━━━━━━━━━━⬣\n`;
		}

		msg += `
━━━━━━━━━━━━━━━━━━
✦ OWNER : Killah
✦ BOT : MIA AI
✦ STATUS : ONLINE 🚀
━━━━━━━━━━━━━━━━━━

╚═══════『 ⚡ READY ⚡ 』═══════╝`;

		return message.reply(msg);
	}
};
