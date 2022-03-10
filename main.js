// variable
var sampleText = "JavaScript is a must-know programming language for a modern developer";

// string processing function
function modifyText(text){
    return {
        result1:sampleText.split(" ").reverse().join(" "),
        result2:sampleText.split("").reverse().join("")
    }
}

// call function
console.log(modifyText(sampleText));