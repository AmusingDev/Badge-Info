// ------------------------------- PACKAGES ------------------------------- //

const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();

// ------------------------------- READING COMMANDS ------------------------------- //

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

// ------------------------------- ON START ------------------------------- //

client.on('ready', () => {

	console.log(`\nBadge Info is online in ${client.guilds.cache.size} servers!`);
	client.user.setActivity('+help | +badgeinfo', { type: 'WATCHING' });
});

// ------------------------------- DEBUGGING ------------------------------- //

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
