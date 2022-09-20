exports.handler = async (event) => {
    console.log('siuuuuuuuuu');
    console.log('kamikasu',event);
    console.log('xxxx',JSON.stringify(event, null, 2));
    var io = require('socket.io-client');
    var socket = io('http://ec2-3-93-179-92.compute-1.amazonaws.com:3100', {query: {
        token: 'BACKENDCLIENTSOCKET'
    }});
    
    let dataset = { "id": "1" };
    socket.emit("MyEvent", JSON.stringify(event, null, 2));

    return 'Sent message!';
  };
