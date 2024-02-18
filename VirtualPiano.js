// Pre-load audio files
const audioFiles = {
    'KeyA': new Audio('Audio/do.mp3'),
    'KeyS': new Audio('Audio/re.mp3'),
    'KeyD': new Audio('Audio/mi.mp3'),
    'KeyF': new Audio('Audio/fa.mp3'),
    'KeyG': new Audio('Audio/sol.mp3'),
    'KeyH': new Audio('Audio/lja.mp3'),
    'KeyJ': new Audio('Audio/si.mp3'),
    'KeyW': new Audio('Audio/do-diez.mp3'),
    'KeyE': new Audio('Audio/re-diez.mp3'),
    'KeyT': new Audio('Audio/fa-diez.mp3'),
    'KeyY': new Audio('Audio/sol-diez.mp3'),
    'KeyU': new Audio('Audio/lja-diezi.mp3')
};


document.addEventListener("keydown", function (event) {

    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed.");
        audioFiles[event.code].currentTime = 0; // Rewind audio to the beginning
        audioFiles[event.code].play();
    }
    else {
        console.log("Warning");
        alert('This key is not handle')
    }
});
