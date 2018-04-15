// Create table of letters

var alphabet = [ ["А", "а", "a"], ["Б", "б", "b"], ["В", "в", "w"], ["Г", "г", "g"], ["Д", "д", "d"], 
                 ["Е", "е", "je"], ["Ё", "ё", "jo"],["Ж", "ж", "ż"], ["З", "з", "z"], ["И", "и", "i"], 
                 ["Й", "й", "j"], ["К", "к", "k"], ["Л", "л", "ł"], ["М", "м", "m"], ["Н", "н", "n"], 
                 ["О", "о", "o"], ["П", "п", "p"], ["Р", "р", "r"], ["С", "с", "s"], ["Т", "т", "t"], 
                 ["У", "у", "u"], ["Ф", "ф", "f"], ["Х", "х", "ch"], ["Ц", "ц", "c"], ["Ч", "ч", "cz"], 
                 ["Ш", "ш", "sz"], ["Щ", "щ", "szcz"], ["Ъ", "ъ", "twardy znak"], ["Ы", "ы", "y"], 
                 ["Ь", "ь", "miękki znak"], ["Э", "э", "e"], ["Ю", "ю", "ju"], ["Я", "я", "ja"] ];


// Display random letter

var num;
var changeLetter = function() {
    num = Math.floor((Math.random() * alphabet.length));
    document.getElementById("letter").innerHTML = alphabet[num][0] + alphabet[num][1];
};
changeLetter();


// Shuffle letter table

var keyboard = [];
for (var i = 0; i < alphabet.length; i++) {
    keyboard.push(alphabet[i][2]);
}
for (var i = keyboard.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1)); 
    var itemAtIndex = keyboard[randomIndex];

    keyboard[randomIndex] = keyboard[i]; 
    keyboard[i] = itemAtIndex;
}


// Create keyboard with letters

var container = document.getElementById("alphabet");

for (var i = 0; i < keyboard.length; i++) {
    if (keyboard[i].length < 4) {
        container.innerHTML += "<div class='key text-center'>" + keyboard[i] + "</div>";
    } else {
        container.innerHTML += "<div class='key text-center smaller'>" + keyboard[i] + "</div>";
    }
}


// Check if clicked letter is correct

var keys = document.getElementsByClassName("key");

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function() {
        if (this.innerHTML == alphabet[num][2]) {
            document.getElementById('letterContainer').style.background = '#0B8566';
            this.style.background = "#0B8566";
            var temp = this;
            setTimeout(function() {
                changeLetter();
                document.getElementById('letterContainer').style.background = '#222';
                temp.style.background = "#222";
            }, 1000);
        }
        else {
            this.style.background = "#A13D32";
            var temp = this;
            setTimeout(function() {
                temp.style.background = "#222";
            }, 1000);
        }
    }, false);
};


// Button handling

var dontKnow = function() {
    document.getElementById("letter").innerHTML = alphabet[num][2];
    // if (alphabet[num][2] == "miękki znak" || alphabet[num][2] == "twardy znak") {
    //     document.getElementById("letter").style.fontSize = "4rem";
    // }
    document.getElementById("letterContainer").style.background = "#A13D32";
    setTimeout(function() {
        document.getElementById("letterContainer").style.background = "#222";
        //document.getElementById("letter").style.fontSize = "6rem";
        changeLetter();
    }, 2000);
}
