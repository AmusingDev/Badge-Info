const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msgString[1]) return;
	if (msg.author.bot) return;

	let arr = [];
	const mainUser = msg.author;
	const flags = mainUser.flags;
	const nitro = mainUser.premium_type;

	(flags.toArray().includes("HOUSE_BRAVERY") || flags.toArray().includes("HOUSE_BRILLIANCE") || flags.toArray().includes("HOUSE_BALANCE")) ? arr.push('<:bravery:745222383752839169> <:brilliance:745222472722284564> <:balance:745222527529517127> ~~HypeSquad House~~') : arr.push('<:bravery:745222383752839169> <:brilliance:745222472722284564> <:balance:745222527529517127> HypeSquad House');

	flags.toArray().includes("EARLY_SUPPORTER") ? arr.push('<:ens:745221387433541642> ~~Early Supporter~~') : arr.push('<:ens:745221387433541642> Early Supporter');

	flags.toArray().includes("HYPESQUAD_EVENTS") ? arr.push('<:events:745222154651697284> ~~HypeSquad Events~~') : arr.push('<:events:745222154651697284> HypeSquad Events');

	(flags.toArray().includes("BUGHUNTER_LEVEL_1") && !flags.toArray().includes("BUG_HUNTER_LEVEL_2")) ? arr.push('<:bh:745221616811638804> ~~Discord Bug Hunter (Level 1)~~') : arr.push('<:bh:745221616811638804> Discord Bug Hunter (Level 1)');

	(!flags.toArray().includes("BUGHUNTER_LEVEL_1") && flags.toArray().includes("BUG_HUNTER_LEVEL_2")) ? arr.push('<:bh:745221616811638804> ~~Discord Bug Hunter (Level 1)~~', '<:gbh:745231509220360193> ~~Discord Bug Hunter (Level 2)~~') : arr.push('<:gbh:745231509220360193> Discord Bug Hunter (Level 2)');

	flags.toArray().includes("VERIFIED_DEVELOPER") ? arr.push('<:vbd:745221219149807686> ~~Early Verified Bot Developer~~') : arr.push('<:vbd:745221219149807686> Early Verified Bot Developer');

	flags.toArray().includes("DISCORD_PARTNER") ? arr.push('<:partner:749958760847376424> ~~Partnered Server Owner~~') : arr.push('<:partner:749958760847376424> Partnered Server Owner');

	const embed = new MessageEmbed()

		.setColor(0x7289DA)
		.setTitle(`${msg.author.username}#${msg.author.discriminator}'s Checklist`)
		.setDescription(arr)

	msg.channel.send(embed);

}

module.exports.help = {
	name: "+checklist",
}