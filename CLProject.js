let currentGenre //declares variable for access in p5 sketch
//loads JSON data from genre list
window.addEventListener('load', function () {
    fetch('music_genres.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let genreArray = data.genres;
            let randomNumber = Math.floor(Math.random() * genreArray.length)
            let nameElement = document.getElementById('music-genre');
            nameElement.innerHTML = genreArray[randomNumber];
            currentGenre = genreArray[randomNumber]
        })
        .catch(error => {
            console.log(error)
        })
    //"Yes" button - invokes p5 image and text    
    let button1 = document.getElementById('button1');
    button1.addEventListener('click', function () {
        console.log("button1 was clicked");
        createCanvas (800, 600)
        image(yup, 0, 0);
        textSize (90);
        text ("CORRECT!", 20, 100);
        textSize (30);
        text (currentGenre, 50, 160)
        text ("is a real genre", 150, 200)
        textSize (25);
        text ("You really know your", 35, 280);
        text ("music, you should totally", 15, 320);
        text ("write for Pitchfork!", 40, 360);
        
        
    })
    //"No" button - invokes p5 image and text
    let button2 = document.getElementById('button2');
    button2.addEventListener('click', function () {
        console.log("button2 was clicked");
        createCanvas (800, 600)
        image(nope, 0, 0);
        textSize (90);
        text ("WRONG!", 390, 100);
        textSize (30)
        text (currentGenre, 440, 160)
        text ("is a real genre", 550, 200)
        textSize (25);
        text ("It sounds crazy and it", 530, 290);
        text ("probably shouldn't be,", 530, 330);
        text ("... but it is", 600, 370);  
    })
    //"Try again" button reloads the page
    let button3 = document.getElementById('button3');
    button3.addEventListener('click', function () {
        console.log("button3 was clicked");
        reload = location.reload();
    })
})
let yup;
let nope;

function preload() {
  yup = loadImage('assets/yup.jpg');
  nope = loadImage('assets/nope.jpg');
}
function setup() {
  createCanvas (800, 600)  
}
