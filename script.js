const listImages = [
    "smile1.gif",
    "smile2.gif",
    "smile3.gif",
    "smile4.gif",
    "smile5.gif",
    "smile7.gif",
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