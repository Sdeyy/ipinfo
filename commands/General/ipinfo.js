const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "ipinfo",
    description: "Obtain information from an IP using the ipinfo.io API",
    type: 1,
    options: [
        {
            name: 'ip',
            description: 'IP to obtain the information',
            type: 3, // String type
            required: true,
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const ipRequest = interaction.options.getString('ip');

        try {

            const response = await axios.get(`https://ipinfo.io/${ipRequest}/json?token=${client.config.BOT_CONFIG.IPINFO_API_KEY}`);

            const data = response.data;

            const embed = new Discord.EmbedBuilder()
                .setTitle(`${client.embeds.IpInfo.Title}`.replace("<ip>", ipRequest))
                .setDescription(`${client.embeds.IpInfo.Description.join("\n")}`.replace("<data.city>", data.city).replace("<data.region>", data.region).replace("<data.country>", data.country).replace("<data.org>", data.org).replace("<data.loc>", data.loc).replace("<data.postal>", data.postal).replace("<data.timezone>", data.timezone))
                .setColor(client.config.BOT_CONFIG.EMBED_COLOR)
                .setFooter({ text: client.embeds.IpInfo.Footer });

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error obteniendo la información de IP:', error);
            await interaction.reply({ content: 'Hubo un error al obtener la información de la IP.', ephemeral: true });
        }
    },
};
