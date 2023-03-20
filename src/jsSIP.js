import JsSIP from 'jssip';

const remoteAudio = new window.Audio();
remoteAudio.autoplay = true;
var callOptions = {
    mediaConstraints: {
        audio: true, // only audio calls
        video: false
    }
};

export function Register() {
    const socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
    var bwPhone = new JsSIP.UA({
        'uri': '101@2-test1.gcalls.vn:50061',
        'password': 'test1101',
        'sockets': [socket]
    });
    bwPhone.start();

    bwPhone.on("registered", function () {
        bwPhone.call("0398033985", callOptions);
    });

    bwPhone.on("newRTCSession", function (data) {
        var session = data.session; // outgoing call session here
        console.log(session);
        var dtmfSender;
        session.on("confirmed", function () {
            //the call has connected, and audio is playing
            var localStream = session.connection.getLocalStreams()[0];
            dtmfSender = session.connection.createDTMFSender(localStream.getAudioTracks()[0])
        });
        session.on("ended", function (e) {
            //the call has ended
            console.log("ended", e);
        });
        session.on("failed", function (e) {
            // unable to establish the call
            console.log("failed", e);
        });
        session.on('addstream', function (e) {
            // set remote audio stream (to listen to remote audio)
            // remoteAudio is <audio> element on page
            remoteAudio.src = window.URL.createObjectURL(e.stream);
            remoteAudio.play();
        });

        //play a DTMF tone (session has method `sendDTMF` too but it doesn't work with Catapult server right)
        // dtmfSender.insertDTMF("1");
        // dtmfSender.insertDTMF("#");

        //mute call
        session.mute({ audio: true });

        //unmute call
        session.unmute({ audio: true });

        //to hangup the call
        session.terminate();


    })
};