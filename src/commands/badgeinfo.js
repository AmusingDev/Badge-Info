const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require('./../botconfig.json');
const prefix = botconfig.prefix;

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msgString[2]) return;
	if (msg.author.bot) return;

	if (!msgString[1]) {

		let arr = [];
		const mainUser = msg.author;
		const flags = mainUser.flags;
		const nitro = mainUser.premium_type;

		if (flags.toArray().includes("HOUSE_BRAVERY")) arr.push('<:bravery:745222383752839169> HypeSquad Bravery');
		if (flags.toArray().includes("HOUSE_BRILLIANCE")) arr.push('<:brilliance:745222472722284564> HypeSquad Brilliance');
		if (flags.toArray().includes("HOUSE_BALANCE")) arr.push('<:balance:745222527529517127> HypeSquad Balance');
		if (flags.toArray().includes("EARLY_SUPPORTER")) arr.push('<:ens:745221387433541642> Early Supporter');
		if (flags.toArray().includes("HYPESQUAD_EVENTS")) arr.push('<:events:745222154651697284> HypeSquad Events');
		if (flags.toArray().includes("BUGHUNTER_LEVEL_1")) arr.push('<:bh:745221616811638804> Discord Bug Hunter (Level 1)');
		if (flags.toArray().includes("BUGHUNTER_LEVEL_2")) arr.push('<:gbh:745231509220360193> Discord Bug Hunter (Level 2)');
		if (flags.toArray().includes("VERIFIED_DEVELOPER")) arr.push('<:vbd:745221219149807686> Early Verified Bot Developer');
		if (flags.toArray().includes("DISCORD_PARTNER")) arr.push('<:partner:749958760847376424> Partnered Server Owner');
		if (flags.toArray().includes("DISCORD_EMPLOYEE")) arr.push('<:staff:745221908236337224> Discord Staff');
		//if (nitro === 1 || nitro === 2) arr.push('<:nitro:745221508707909742> Nitro');

		if (!arr) arr = 'None';

		const embed = new MessageEmbed()

			.setColor(botconfig.embedColor)
			.setTitle(`List of ${msg.author.username}#${msg.author.discriminator}'s Badges`)
			.setDescription(arr)

		msg.channel.send(embed);

	} else {

		let arr = [];
		const mainUser = client.users.cache.get(msgString[1]) || msg.mentions.users.first();
		const flags = mainUser.flags;
		const nitro = mainUser.premium_type;

		if (flags !== undefined) {

			if (flags.toArray().includes("HOUSE_BRAVERY")) arr.push('<:bravery:745222383752839169> HypeSquad Bravery');
			if (flags.toArray().includes("HOUSE_BRILLIANCE")) arr.push('<:brilliance:745222472722284564> HypeSquad Brilliance');
			if (flags.toArray().includes("HOUSE_BALANCE")) arr.push('<:balance:745222527529517127> HypeSquad Balance');
			if (flags.toArray().includes("EARLY_SUPPORTER")) arr.push('<:ens:745221387433541642> Early Supporter');
			if (flags.toArray().includes("HYPESQUAD_EVENTS")) arr.push('<:events:745222154651697284> HypeSquad Events');
			if (flags.toArray().includes("BUGHUNTER_LEVEL_1")) arr.push('<:bh:745221616811638804> Discord Bug Hunter (Level 1)');
			if (flags.toArray().includes("BUGHUNTER_LEVEL_2")) arr.push('<:gbh:745231509220360193> Discord Bug Hunter (Level 2)');
			if (flags.toArray().includes("VERIFIED_DEVELOPER")) arr.push('<:vbd:745221219149807686> Early Verified Bot Developer');
			if (flags.toArray().includes("DISCORD_PARTNER")) arr.push('<:partner:749958760847376424> Partnered Server Owner');
			if (flags.toArray().includes("DISCORD_EMPLOYEE")) arr.push('<:staff:745221908236337224> Discord Employee');
			//if (nitro.toArray().includes("NITRO") || nitro.toArray().includes("NITRO_CLASSIC")) arr.push('<:nitro:745221508707909742> Nitro');

		} else {
			arr = 'None';
		}

		const embed = new MessageEmbed()

			.setColor(botconfig.embedColor)
			.setTitle(`List of ${mainUser.username}#${mainUser.discriminator}'s Badges`)
			.setDescription(arr)

		msg.channel.send(embed);

	}
}

module.exports.help = {
	name: `${prefix}badgeinfo`,
}
