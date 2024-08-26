function onload() {

    // TODO 2a: Get the <video> element and store it in myVideo. 
    var myVideo;

    // Get the reflection canvas.
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    // Shift the canvas down by its height, and flip its Y axis (to achieve the reflection effect.
    context.translate(0, canvas.height);
    context.scale(1, -1);

    // Set an opaque-to-transparent gradient for the canvas.
    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;

    // TODO 2b: Handle the mouseenter event for the video, to play the video and fade-in the reflection canvas.


    // TODO 2c: Handle the mouseleave event for the video, to pause the video and fade-out the reflection canvas.


    // TODO 2d: Handle the canplay event for the video, to regularly copy the video frame into the canvas.



}
