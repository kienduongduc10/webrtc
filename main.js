const socket = io('http')

var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'webrtc','username': 'websitebeaver@mail.com'}]};

function openStream() {
    const config = {audio: true, video: true, };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

//openStream()
//.then(stream => playStream('localVideo', stream));

const peer = new Peer(servers);

peer.on('open', function(id) {
  document.getElementById("local-peer-id").innerHTML = id;
});

//Caller
$('#btnCall').click(() => {
  const id = $('#remoteId').val();
  openStream()
  .then(stream => {
      playStream('localVideo', stream);
      const call = peer.call(id, stream);
      call.on('stream', remoteStream => playStream('remoteVideo', remoteStream));
    });
});

//Callee
peer.on('call', call => {
  openStream()
  .then(stream => {
      call.answer(stream);
      playStream('localVideo', stream);
      call.on('stream', remoteStream => playStream('remoteVideo', remoteStream));
  });
});
