 function userInput(){
        var startVal = prompt('Please enter start value', "1");
        var validVal = validateMe(startVal);
        if(startVal != null){
            document.getElementById("title").innerHTML="Start Value: " + startVal;
        insertStartVal(validVal);
        };
    };

    function errorPrompt(){
         var error = alert("Invalid Input, please try again");
            userInput();
            // Do I need to do a return?
            // is this bad code?
            // Do I need to create a error variable to pop
            // alert box?
            // seems like it should be able to return and //call next function.
    }

    function validateMe (startVal){
        var validString=""
        if (typeof startVal === "string"){
             //console.log("function before conversion: " + typeof(startVal) );
             // Convert "22" to int 22;
             validString=+ startVal;
        }
        if (isNaN(validString)){
           errorPrompt();
        };

        return validString;
    }


    function mod3(i) {
        return ((i % 3) === 0) ? "Fizz" : false;
    }

    function mod5(i) {
        return ((i % 5) === 0) ? "Buzz" : false;
    }

    function mod3and5(i) {
        return (((i % 3) === 0) && ((i % 5) === 0)) ? "Fizz-Buzz" : false;
    }

 function insertStartVal(startVal){
        var arrLength = startVal;
        var count = new Array();
        var textInsert = "";


    for (var i = 1; i < arrLength; i++) {
        count[i] = i;
        var answer3 = mod3(count[i]);
        var answer5 = mod5(count[i]);
        var answer3and5 = mod3and5(count[i])

        if (answer3) {
            count[i] = answer3;
        };
        if (answer5) {
            count[i] = answer5;
        };
        if (answer3and5) {
            count[i] = answer3and5;
        };

        textInsert += "<div>" + count[i] + "</div>";
    }

    $("body").append(textInsert);

 };