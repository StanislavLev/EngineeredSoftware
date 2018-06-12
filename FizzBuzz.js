function fizzBuzz(){
    var totNum = 100;
    var outStr = [];
    for(var i = 1; i < totNum + 1; i++){
        if(i == 35){
   	        outStr.push("FizzBuzz");
        }
        else if(i == 53){
            outStr.push("BuzzFizz");
        }
        else if(i.toString().search("3") != -1){
            outStr.push("Fizz");
        }
        else if(i.toString().search("5") != -1){
            outStr.push("Buzz");
        }
        else {
            outStr.push(i);
        }
    }
    return outStr;
}

function displayFizzBuzz(){
    var htmlStr = "<tr>";
    var fizzBuzzArr = fizzBuzz();
    for(var i = 0; i < fizzBuzzArr.length; i++){
        htmlStr = htmlStr + "<td>" + fizzBuzzArr[i] + " </td>";
        if(i%10 == 9){
            htmlStr = htmlStr + "</tr><tr>";
        }
    }
    htmlStr = htmlStr + "</tr>";
    return htmlStr;
}

function testFizzBuzz(){
    var three = "Fizz";
    var five = "Buzz";
    var expectedArr = [1, 2, three, 4, five, 6, 7, 8, 9, 10, 
                       11, 12, three, 14, five, 16, 17, 18, 19, 20,
                       21, 22, three, 24, five, 26, 27, 28, 29, three,
                       three, three, three, three, three + five, three, three, three, three,
                       40, 41, 42, three, 44, five, 46, 47, 48, 49, five,
                       five, five, five + three, five, five, five, five, five, five,
                       60, 61, 62, three, 64, five, 66, 67, 68, 69, 70,
                       71, 72, three, 74, five, 76, 77, 78, 79, 80,
                       81, 82, three, 84, five, 86, 87, 88, 89, 90,
                       91, 92, three, 94, five, 96, 97, 98, 99, 100];
    var outStr = fizzBuzz();
    if(outStr.length != expectedArr.length){
        document.getElementById("testFizzBuzz").style.backgroundColor = "pink";
        return "Error: test failed. Returned more than " + expectedArr.length + " elements!";
    }
    
    for(var i = 0; i < expectedArr.length + 1; i++){
        if(expectedArr[i] != outStr[i]){
            document.getElementById("testFizzBuzz").style.backgroundColor = "pink";
            return "Error: test failed. Expected value " + expectedArr[i].toString() + 
            " is not equal to output " + outStr[i] + " in " + (i+1) + "'s  element!";
        }
    }
    document.getElementById("testFizzBuzz").style.backgroundColor = "lightgreen";
    return "Success: test passed, good job :) !!!"
}


document.getElementById("fizzBuzz").innerHTML = displayFizzBuzz();
document.getElementById("testFizzBuzz").innerHTML = testFizzBuzz();
document.getElementById("code").innerHTML = fizzBuzz;