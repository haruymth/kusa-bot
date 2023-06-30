const { token } = process.env;

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]
});

//起動確認
client.once('ready', () => {
  console.log(`${client.user.tag} Ready`);
});

//返答
client.on('messageCreate', message => {
  if (message.author.bot) {
    return;
  }
  if (Math.round(Math.random() * 100) == 1) {
    message.reply({
      content: "草"
    });
  }
  if (Math.round(Math.random() * 1000) == 1) {
    message.reply({
      content: "森"
    });
  }
　if (Math.round(Math.random() * 10000) == 1) {
    message.reply({
      content: "パンパース!!!",
	  files: ['https://d2dcan0armyq93.cloudfront.net/photo/odai/600/c7effe7958ef53366d97345f37012ee4_600.jpg']
    });
  }
});

//Discordへの接続
client.login(token);



const http = require("http");
http.createServer(async function(req, res) {
  console.log(req.headers.referer);
  let di = await fetch("https://discord.com/api/v9");
  let a = "レート制限";
  if (di.status == 429) {
    console.log(di.headers.get("retry-after"));
    a += "がかかっちゃってます。レート制限は" + di.headers.get("retry-after") + "秒後に解除されるそうです。";
  } else {
    a += "はかかっていません。";
  }
  res.write(a);
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
  res.end();
}).listen(4545);
