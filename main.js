function openStream() {
    const config = {audio: false, video: true };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

//openStream()
//.then(stream => playStream('localVideo', stream));

const peer = new Peer();

peer.on('open', function(id) {
  document.getElementById("local-peer-id").innerHTML = "PeerID của bạn là: " + id;
});

//Caller
$('#btnCall').click(() => {
  const id = $('#remoteId').val();
  openStream()
  .then(stream => {
      playStream('localStream', stream);
      const call = peer.call(id, stream);
      call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
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