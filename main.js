function openStream() {
    const config = {audio: false, video: true };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.src0bject = stream;
    video.play();
}

openStream()
.then(stream => playStream('localVideo' , stream));
