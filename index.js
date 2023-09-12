
const ws = require('ws');
// const app = express();
const wss = new ws.Server({ port: 3000 });

wss.on('connection',(ser) => {
  ser.on('error', (err) =>{console.log(err)});
  ser.on('close', () =>{console.log('Server closed');});
  ser.on('message', (data) =>{
console.log(data);
  });
  ser.send(JSON.stringify({ message: 'hello world1' }));
});
