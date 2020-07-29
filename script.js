const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//Prompt to select media stream, pass video element, then play
async function selectMediaStream(){
    try {
        const mediaSream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaSream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.log('whoops, error here:',error)
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true
    //Start Picture in Picture
    await videoElement.requestPictureInPicture()
    //Reset Button
    button.disabled = false;
});

//On Load Event
selectMediaStream()