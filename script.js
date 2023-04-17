const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

//prompt to select media stream, pass to videoElement, then play 
async function selectMediaStream() {

    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {videoElement.play();}
    } catch(error){
        console.log('error: ', error);
    };
};

buttonElement.addEventListener('click', async () => {
    //disable button
    buttonElement.disabled = true;

    //start PiP
    await videoElement.requestPictureInPicture();

    //reset button
    buttonElement.disabled = false;
});
//on load 
selectMediaStream();