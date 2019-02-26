
    var words = ['igor', 'spaceballs', 'yogurt', 'lonestar', 'barf', ''];
    var currentword = "";
    var gLeft = 12;
    var charStr = "";
    var answer = [];
    var guesses = [];
    var losses = 0;
    var wins = 0;
    

    function render() {
        document.getElementById("please").innerHTML = answer.join(" ");
        document.getElementById("lsGuessed").innerHTML = guesses.join(" ");
        document.getElementById("guessesLeft").innerHTML = gLeft;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("wins").innerHTML = wins;
    }

    function reset() {
        currentword = "";
        gLeft = 12;
        charStr = "";
        answer = [];
        guesses = [];
        NewWord();
    }
    //start game and hide new word
    function NewWord() {
        currentword = words[Math.floor(Math.random()*words.length)];
        console.log(currentword);
        for ( var i = 0; i<currentword.length; i++) {
            answer[i]="_";
        }
    
        render()   
    };
    document.onkeypress = function(evt) {
            var charCode = evt.key
            
            //change out underscore for correct letter
            if (currentword.indexOf(charCode)> -1) {
                answer[currentword.indexOf(charCode)] = currentword[currentword.indexOf(charCode)];
                console.log(answer);
                if (answer.indexOf("_")=== -1) {
                    alert("way to go");
                    wingif.animate({opacity: "2"});
                    wins++;
                    reset();
                }
            }
            else {
                gLeft--
                if (gLeft === 0) {
                    alert("sorry you lost");
                    losses++
                    reset();
                }
                    
            }
            guesses.push(charCode);
            
            render();
    
    };
    
        

