const videoElement = document.getElementById('video');
const pipStart = document.getElementById('startBtn');
const pipReSelect = document.getElementById('reSelect');

async function selectMediaStream(){
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata=()=>{
      videoElement.play();
    }
  } catch (error) {
    console.log(error);
  }
}

pipStart.addEventListener("click", async () => {
 if (!videoElement.srcObject) {
   videoElement.hidden = false;
  await selectMediaStream();
 }
 else{
  try{await videoElement.requestPictureInPicture();
  videoElement.hidden = true;
  pipStart.hidden = true;
  pipReSelect.hidden= false;
 }
 catch (error) {
  console.log(error);
}}
});

pipReSelect.addEventListener('click', async ()=>{
   await selectMediaStream();
   pipReSelect.hidden= true;
   pipStart.hidden = false;
});
