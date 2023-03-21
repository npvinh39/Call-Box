import JsSIP from 'jssip';

const remoteAudio = new window.Audio();
remoteAudio.autoplay = true;
var session = null;
var ua = null;
var callOptions = {
    mediaConstraints: {
        audio: true, // only audio calls
        video: false
    }
};

export function Register() {
    // Create our JsSIP instance and run it:

    var socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
    var configuration = {
        sockets: [socket],
        uri: '101@2-test1.gcalls.vn:50061',
        password: 'test1101'
    };

    ua = new JsSIP.UA(configuration);

    ua.start()

    // Register callbacks to desired call events
    var eventHandlers = {
        'progress': function (e) {
            console.log('call is in progress');
        },
        'failed': function (e) {
            console.log('call failed with cause: ' + e.data.cause);
        },
        'ended': function (e) {
            console.log('call ended with cause: ' + e.data.cause);
        },
        'confirmed': function (e) {
            console.log('call confirmed');
        }
    };
};

export function StartCall(destinationPhoneNumber, isCalling) {
    // Create our JsSIP instance and run it:
    Register();
    var eventHandlers = {
        'progress': function (e) {
            console.log('call is in progress');
            isCalling = true;
            console.log('calling: ', isCalling);
        },
        'failed': function (e) {
            console.log('call failed with cause: ' + e);
        },
        'ended': function (e) {
            console.log('call ended with cause: ' + e);
        },
        'confirmed': function (e) {
            console.log('call confirmed');
        }
    };

    const options = {
        'eventHandlers': eventHandlers,
        'mediaConstraints': { 'audio': true, 'video': false },
        sessionTimersExpires: 600
    };

    if (destinationPhoneNumber !== null) {
        ua.call(destinationPhoneNumber, options);
        console.log('call to ' + destinationPhoneNumber);
    }
};

export function StopCall() {
    ua.stop();
};