function openStream() {
    const config = {audio: false, video: true };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

openStream()
.then(stream => playStream('localVideo', stream));

const peer = new Peer();

peer.on('open', function(id) {
  document.getElementById("local-peer-id").innerHTML = "Peer ID của bạn là: " + id;
});
