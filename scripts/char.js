module.exports = {
	config: {
		name: "chat",
		version: "3.0",
		author: "KILLAH",
		countDown: 2,
		role: 0,
		shortDescription: "Chat auto",
		longDescription: "Bot discussion automatique",
		category: "fun",
		guide: ""
	},

	onChat: async function ({ event, api }) {

		if (!event.body) return;

		const msg = event.body.toLowerCase();

		const reponses = {

			"bonjour": [
				"Salut 👋",
				"Coucou ❤️",
				"Yo 😎",
				"Bonjour 😊"
			],

			"salut": [
				"Salut mon pote 😄",
				"Hello 👋",
				"Wesh 🔥"
			],

			"ça va": [
				"Oui super 😄",
				"Très bien et toi ? ❤️",
				"Tranquille 😎"
			],

			"merci": [
				"De rien ❤️",
				"Avec plaisir 😊",
				"Toujours là 😎"
			],

			"bye": [
				"À bientôt 👋",
				"Bonne journée ❤️",
				"Prends soin de toi 😄"
			],

			"je t'aime": [
				"Moi aussi ❤️",
				"Trop mignon 😄",
				"❤️❤️❤️"
			],

			"bot": [
				"Oui ? 🤖",
				"Je suis là 😎",
				"Vous m'avez appelé ? 👀"
			],

			"mdr": [
				"😂😂😂",
				"Je suis mort 🤣",
				"Trop drôle 😭"
			],

			"anime": [
				"Naruto 🔥",
				"One Piece 😎",
				"Les animés c'est la vie ❤️"
			],

			"foot": [
				"Le foot 🔥⚽",
				"CR7 ou Messi ? 😎"
			],

			"cr7": [
				"SIUUUU 🔥🐐",
				"Cristiano Ronaldo 😎"
			],

			"messi": [
				"Le GOAT argentin 🐐",
				"Messi magique ⚽"
			],

			"bonne nuit": [
				"Bonne nuit 🌙",
				"Fais de beaux rêves 😴",
				"Dors bien ❤️"
			],

			"bonsoir": [
				"Bonsoir 🌙",
				"Bonne soirée 😄"
			],

			"faim": [
				"Va manger 🍕",
				"J'ai faim aussi 😭"
			],

			"musique": [
				"J'adore la musique 🎵",
				"Quelle chanson écoutes-tu ? 🎶"
			],

			"travail": [
				"Courage 💪",
				"Le travail paie 🔥"
			],

			"école": [
				"Bonne chance 📚",
				"Étudiez bien 😄"
			],

			"qui est ton créateur": [
				"Mon créateur est KILLAH 😎🔥",
				"KILLAH m'a créé 🤖❤️",
				"Je suis le bot de KILLAH 👑"
			],

			"ton créateur": [
				"KILLAH 😎",
				"Mon boss c'est KILLAH 🔥"
			],

			"qui ta créé": [
				"KILLAH m'a créé 👑",
				"Je viens de KILLAH 😎"
			],

			"qui est killah": [
				"KILLAH est mon créateur 😎🔥",
				"Le boss du bot 👑"
			],

			"hack": [
				"Je suis un bot gentil 😄",
				"Pas de hack ici 🚫"
			],

			"groupe": [
				"J'aime ce groupe ❤️",
				"Vous êtes une bonne team 🔥"
			],

			"admin": [
				"Respectez les admins 👀",
				"Les admins surveillent 😎"
			],

			"chien": [
				"Les chiens 🐶❤️"
			],

			"chat": [
				"Les chats sont mignons 🐱"
			],

			"love": [
				"L'amour ❤️",
				"Love forever 😄"
			]
		};

		for (const mot in reponses) {

			if (msg.includes(mot)) {

				const rep =
				reponses[mot][Math.floor(Math.random() * reponses[mot].length)];

				return api.sendMessage(rep, event.threadID, event.messageID);
			}
		}
	}
};
