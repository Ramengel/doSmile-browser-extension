const listImages = [
    "hippo1.gif",
    "hippo2.gif",
    "horse1.gif",
    "dog1.gif",
    "elephant1.gif"
];

const getRandomInt = (max) =>  Math.floor(Math.random() * Math.floor(max));

const updateImage = () => {
    const images = document.getElementsByTagName('IMG')

    for (let i = 0; i < images.length; i ++) {
        if (images[i].dataset.changed != "changed") {
            console.log(listImages[getRandomInt(listImages.length)]);
            images[i].src = chrome.runtime.getURL("images/" + listImages[getRandomInt(listImages.length)])
            images[i].dataset.changed = "changed"
        }
    }

    
    window.setTimeout(updateImage, 1000);
}


window.setTimeout(updateImage, 1000)