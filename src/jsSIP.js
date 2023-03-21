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

    ua.on('newRTCSession', function (e) {
        console.log('RTC Session', e.session)
        const newSession = e.session;
        if (session) {
            session.terminate();
        }
        session = newSession;
        const completeSession = () => {
            session = null;
        }
        session.on('ended', completeSession);
        session.on('failed', completeSession);
        session.on('accepted', () => { console.log("accept") });
        session.on('confirmed', () => {
            console.log("confirmed");
        });
        session.on('addstream', function (e) {
            console.log("addstream")
        });
    });
};

export function StartCall(destinationPhoneNumber, isCalling, setIsCalling) {
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
            setIsCalling(!isCalling);
            console.log('calling failed: ', isCalling);
        },
        'ended': function (e) {
            console.log('call ended with cause: ' + e);
            setIsCalling(!isCalling);
            console.log('callng cancel: ', isCalling);
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
    session.connection.addEventListener('addstream', (event) => {
        console.log(event)
        remoteAudio.srcObject = event.stream;
        remoteAudio.play();
    })
};

export function StopCall() {
    ua.stop();
};

export function ToggleMute(setIsMute, isMute) {
    setIsMute(!isMute);
    if (session.isMuted().audio) {
        session.unmute({ audio: true });
    } else {
        session.mute({ audio: true });
    }
}