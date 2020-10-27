const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzcwNDM5MTg4MTE3NTg1OTQw.X5dlaA.clJxw9xUru1uXZ_FFvXth7W_jrI';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply(client.ping + ' ms');
  }
  if(message.content === 'ㅋㅋㅋ') {
    message.reply('ㅋㅋㅋ');
  }
  if(message.content === '잉') {
    message.reply('잉');
  }
  if(message.content === '히') {
    message.reply('킬러>>>>>>>히');
  }
  if(message.content === '만두') {
    message.reply('킬러>>>>만두');
  }
  if(message.content === '두산베어스') {
    message.reply('두산베어스=킬러 (이유: 방장이니까)');
  }
  if(message.content === 'ㅎㅇ') {
    message.reply('안녕하세요');
  }
  if(message.content === 'ㅂㅇ') {
    message.reply('안녕히가세요');
  }
  if(message.content === 'ㅂㅂ') {
    message.reply('안녕히가세요');
  }
  if(message.content === 'ㅃ2') {
    message.reply('안녕히가세요');
  }
  if(message.content === '이끼낀 금화') {
    message.reply('¯\_(ツ)_/¯');
  }
  if(message.content === 'ㅋㅋㄹㅃㅃ') {
    message.reply('ㅋㅋㄹㅃㅃ');
  }
  if(message.content === 'ㄹㅇㅋㅋ') {
    message.reply('ㄹㅇㅋㅋ');
  }
  if(message.content === '킬러') {
    message.reply('이세계의 짱');
  }
  if(message.content === '4번') {
    message.reply('개인주의');
  }
  if(message.content === '킬러 조수') {
    message.reply('네!!! 저는 이 세계의 짱인 킬러님의 조수입니다!!!!');
  }
  if(message.content === '씨발') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '병신') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '붕신') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '븅신') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === 'ㅄ') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === 'ㅅㅂ') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === 'ㅆㅂ') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '개새끼') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === 'ㄱㅅㄲ') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '좇') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '좇같아') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === '씨발년아') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }
  if(message.content === 'ㅗ') {
    message.reply('https://www.youtube.com/watch?v=b607xd5HkCk');
  }

});

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })

  let state_list = [
    '!겜덕조수',
    '!킬러가 만듬'
  ]
  let state_list_index = 1;
  let change_delay = 3000; // 이건 초입니당. 1000이 1초입니당.

  function changeState() {
    setTimeout(() => {
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  changeState();
});

client.on('message', (message) => {
  if(message.content.startsWith('_청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('_청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}

client.login(token)