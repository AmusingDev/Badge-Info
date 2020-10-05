const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msg.author.bot) return;
	if (msgString[1]) return;

	const embed = new MessageEmbed()

		.setColor(0x7289DA)
		.setTitle('Discord Badge Information')
		.setDescription('[[click here]](https://discordia.me/en/badges) for more information!')
		.addField('HypeSquad', '\n<:bravery:745222383752839169> <:brilliance:745222472722284564> <:balance:745222527529517127> Obtain one of these badges by completing the HypeSquad quiz in your user settings and showing how excited you are about discord!\n<:events:745222154651697284> Awarded to HypeSquad event coordinators and attendees.')
		.addField('Nitro', '<:nitro:745221508707909742> Given to users that have bought the discord nitro subscription, the badge goes away once the subscription expires.')
		.addField('Bug Hunting', '<:bh:745221616811638804> Awarded to tier 4 discord bug hunters (bug trackers)\n<:gbh:745231509220360193> Awarded to tier 5 discord bug hunters (bug terminators)')
		.addField('Other', '<:staff:745221908236337224> Official members of the discord staff team.\n<:partner:749958760847376424> A user that has partnered their server with discord.')
		.addField('Unobtainable', '<:ens:745221387433541642> Awarded to those that have purchased a nitro subscription before October 10th, 2018.\n<:vbd:745221219149807686> Awarded to those that have created and verified their bot before 19th August 2020.\n<:gold_balance:745222672715350036> Awarded to the highest donators of snowsgiving 2019, the badge stayed golden until February 3rd, 2019.\n<:balance_koth:745222817909309561> Awarded to winners of the first HypeSquad tournament that was announced on February 18th, 2019.')

	msg.channel.send(embed);
}

module.exports.help = {
	name: "+badges",
}
