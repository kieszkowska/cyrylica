const cyrillic = {
    // Table of letters: [capital cyrillic, small cyrillic, polish letter]
    alphabet: [ ["А", "а", "a"], ["Б", "б", "b"], ["В", "в", "w"], ["Г", "г", "g"], ["Д", "д", "d"],
        ["Е", "е", "je"], ["Ё", "ё", "jo"],["Ж", "ж", "ż"], ["З", "з", "z"], ["И", "и", "i"], ["Й", "й", "j"],
        ["К", "к", "k"], ["Л", "л", "ł"], ["М", "м", "m"], ["Н", "н", "n"], ["О", "о", "o"], ["П", "п", "p"],
        ["Р", "р", "r"], ["С", "с", "s"], ["Т", "т", "t"], ["У", "у", "u"], ["Ф", "ф", "f"], ["Х", "х", "ch"],
        ["Ц", "ц", "c"], ["Ч", "ч", "cz"], ["Ш", "ш", "sz"], ["Щ", "щ", "szcz"], ["Ъ", "ъ", "twardy znak"],
        ["Ы", "ы", "y"], ["Ь", "ь", "miękki znak"], ["Э", "э", "e"], ["Ю", "ю", "ju"], ["Я", "я", "ja"] ],

    letterContainer: document.getElementById("letterContainer"),
    letter: document.getElementById("letter"),
    keyboard: document.getElementById("alphabet"),
    keys: document.getElementsByClassName("key"),
    hintButton: document.getElementById('hint'),

    currentLetter: null,
    timeout: 1000,
    initialLetterSize: '6rem',
    colors: {
        correct: '#0B8566',
        wrong: '#A13D32',
        normal: '#222',
    },

    changeLetter: function () {
        let num = Math.floor((Math.random() * this.alphabet.length));
        this.currentLetter = this.alphabet[num];
        this.letter.innerHTML = this.alphabet[num][0] + this.alphabet[num][1];
    },

    displayKeyboard: function() {
        this.alphabet.forEach(letters => {
            let classes = letters[2].length > 4 ? " smaller" : "";
            this.keyboard.innerHTML += "<div class='key text-center" + classes + "'>" + letters[2] + "</div>";
        });
    },

    handleKeyClick: function(event) {
        if (event.target.innerText === this.currentLetter[2]) {
            this.highlightLetter(this.colors.correct);

            setTimeout(() => {
                this.changeLetter();
                this.highlightLetter();
            }, this.timeout);
        } else {
            this.highlightLetter(this.colors.wrong);

            setTimeout(() => {
                this.highlightLetter();
            }, this.timeout);
        }
    },

    handleHintClick: function() {
        this.letter.innerHTML = this.currentLetter[2];
        this.highlightLetter(this.colors.wrong);

        if (this.currentLetter[2].length > 4) {
            this.letter.style.fontSize = '3rem';
        }

        setTimeout(() => {
            this.changeLetter();
            this.letter.style.fontSize = this.initialLetterSize;
            this.highlightLetter();
        }, this.timeout);
    },

    highlightLetter: function(color = this.colors.normal) {
        this.letterContainer.style.background = color;
    },

    init: function () {
        this.displayKeyboard();
        this.changeLetter();

        this.letter.style.fontSize = this.initialLetterSize;

        for (let i = 0; i < this.keys.length; i++) {
            this.keys[i].addEventListener("click", event => this.handleKeyClick(event));
        }

        this.hintButton.addEventListener("click", () => this.handleHintClick());
    }
};

cyrillic.init();
