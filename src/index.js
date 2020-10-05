const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err);

	let jsfile = files.filter(f => f.split('.').pop() === 'js');
	if (jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} is Working`);
		client.commands.set(props.help.name, props);
	});
});

client.on('ready', () => {
	let dateTime = new Date();
	let onlineSince1 = dateTime.toString().split(' ');
	let onlineSince = '';

	onlineSince +=
		onlineSince1[1] + ' ' + onlineSince1[2] + ', ' + onlineSince1[3] + ' ';

	let onlineTime1 = onlineSince1[4].split(':');
	let onlineTime =
		onlineTime1[0] < 12
			? onlineTime1[0] + ':' + onlineTime1[1] + ' AM'
			: onlineTime1[0] - 12 + ':' + onlineTime1[1] + ' PM';
	let online = onlineSince + onlineTime;

	console.log(`\nBadge Info is online in ${client.guilds.cache.size} servers!`);
	console.log(`\nOnline since ${online}`);

	client.user.setActivity('+help | +badgeinfo', { type: 'WATCHING' });
});

client.on('error', console.error);

client.on('message', async msg => {
	let messageArray = msg.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let prefix = botconfig.prefix;

	if (msg.author.bot) return;

	let commandfile = client.commands.get(cmd.replace(prefix.length - 1));
	if (commandfile) commandfile.run(client, msg, args);
});