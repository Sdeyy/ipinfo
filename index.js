#!/usr/bin/env node
// -*- coding: utf-8 -*-

console.clear();

const { Client, GatewayIntentBits, Partials, Collection, Colors, GuildMember } = require('discord.js')

const fs = require('fs');
const yaml = require('js-yaml');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildVoiceStates]
});

process.on('unhandledRejection', error => {
  console.error(error);
});

client.on('shardError', error => {
  console.error(error);
});

require('events').EventEmitter.defaultMaxListeners = 0;


client.commands = new Collection();
client.embeds = yaml.load(fs.readFileSync('data/settings/embeds.yml', 'utf8'));
client.config = yaml.load(fs.readFileSync('data/settings/config.yml', 'utf8'));

module.exports = client;

fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.login(client.config.BOT_CONFIG.TOKEN);