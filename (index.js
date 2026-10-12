const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once(`ready', () => {
  console.log(\`Bot online ആയിരിക്കുന്നു: ${client.user.tag}`);
});

client.login(process.env.TOKEN);
