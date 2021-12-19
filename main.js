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

const peer = new Peer( key: 'tkv5g2acaree9udi' ); 

peer.on('open', id => $('#my-peers').append(id))
