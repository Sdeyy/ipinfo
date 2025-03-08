const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');
const orange = chalk.hex("#e87c09")

client.on('ready', () => {
    const activityList = [
        { name: `github.com/Sdeyy`, type: ActivityType.Watching }
    ];

    let i = 0;
    setInterval(() => {
        if (i >= activityList.length) i = 0;
        client.user.setActivity(activityList[i]);
        i++;
    }, 10000);

    console.log(chalk.green.bold(`\u2705 Client - Logged in as ${client.user.tag}`));

});