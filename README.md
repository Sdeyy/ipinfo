# IPInfo Discord Bot

This is a Discord bot that uses the ipinfo.io API to get information about a given IP. By using the `/ipinfo <IP>` command, the bot returns details such as country, city, organization and more, based on the provided IP.

## Requirements

To run this bot, you will need to have the following:

- [Node.js 18.x](https://nodejs.org/es/download) (includes npm).
- An account on [ipinfo.io](https://ipinfo.io/signup) to get an API Key (Required for the bot to work)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sdeyy/IpInfo-Bot.git
   ```
2. Entra a la carpeta del proyecto:
    ```bash
    cd IpInfo-Bot
    ```

3. Instala las dependencias:
    ```bash
    npm i
    ```
4. configure the Token, Client ID, GuildID and Api Key on the config.yml (/settings/config.yml):
    ```yml
    BOT_CONFIG:
  NAME: "IpInfo Bot"
  EMBED_COLOR: "#ff0000"
  TOKEN: "BOT_TOKEN_HERE"
  GUILD_ID: "YOUR_GUILD_ID"
  BOT_ID: "CLIENT_ID_HERE"
  IPINFO_API_KEY: "IPINFO_API_KEY"
5. Start the bot using
    ```bash
    npm run start
    ```

## How do I create a bot?

1. Create an application by clicking on the “New Application” button at the top right.

2. Give it a name and accept the terms.
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/3e2l61jo.png">

3. Once the application has been created, you will copy the Application ID
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/xffu9quh.png">

4. In the Installation section, you will copy it as it is below.
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/bmvdzl9x.png">

5. In the Bot section, activate the following options
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/yi67elyn.png">

6. In the OAuth2 section get the link to invite the bot to your server as follows.
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/ql091fua.png">
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/yztmmaqi.png">

7. Finally, use the obtained invitation link to invite the bot to your server.
<img src="https://r2.e-z.host/6781c1a2-567e-436c-a13b-8a6eb85b574b/ajz0vpfw.png">