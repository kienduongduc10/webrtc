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

peer.on('open', function(id) {
  document.getElementById("my-peers").innerHTML = (''My peer ID is: ' + id');
  console.log('My peer ID is: ' + id);
});
