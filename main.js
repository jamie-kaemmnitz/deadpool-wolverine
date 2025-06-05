document.addEventListener('DOMContentLoaded', function() {
    let pictureLogo = document.getElementById('dpool-logo');
    let pictureChange = document.getElementById('dpool-shocked');
    let pictureClicked = document.getElementById('cameosapp');

    // Initially hide the shocked picture
    pictureChange.hidden = true;
    pictureClicked.hidden = true;

    // Add an event listener to toggle images on click
    pictureLogo.addEventListener('click', function() {
        pictureLogo.hidden = !pictureLogo.hidden;
        pictureChange.hidden = !pictureChange.hidden;
        pictureClicked.hidden = !pictureClicked.hidden;
    }); pictureChange.addEventListener('click', function() {
        pictureLogo.hidden = false;
        pictureChange.hidden = true;
        pictureClicked.hidden = true;
    })
});

