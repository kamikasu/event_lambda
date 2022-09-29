exports.handler = (event,context,callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var data_import= event.detail.fullDocument;
    delete data_import['parameters'];
    delete data_import['agente'];
    delete data_import['_id'];
    delete data_import['script'];
    // var data_export=JSON.stringify(event);
    var type_chart='default';
    if (data_import['module'] == 'Ticket' && data_import['action'] == 'Accept' ){
        type_chart='accept_ticket'
    }
    

    var io = require('socket.io-client');
    var socket = io('http://ec2-3-93-179-92.compute-1.amazonaws.com:3100', {
        transports: ['websocket','polling'],
        query: {
            token: 'BACKENDCLIENTSOCKET'
        }
    });
    socket.on("connect", () => {
        socket.emit('eventsApiBackend', {event: type_chart, data: data_import},function (params) {
            socket.disconnect();
            callback(null, 200);
        });
        
    });
};