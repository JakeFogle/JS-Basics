//Once you complete a problem, open up Chrome and check the answer in the console.

//Problem 1
//Below you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

var inner = outer();

//Once you do that, invoke inner.

inner();

//Problem 2
//Below you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

var makeTheCall = callFriend();
makeTheCall("435-215-9248");

//Problem 3
//Write a function called makeCounter that makes the following code work properly.

  var makeCounter = function() {
    var num = 0;
    return function() {
      num++;
      return num;
    }
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4

//Problem 4
//Write a function that accepts another function as it's first argument and returns a new function
//(which invokes the original function that was passed in) that can only ever be executed once.

var main = function(x) {
  var num = 0;
  return function() {
    if (num < 1) {
      num++;
      return x();
    } else {
      return "You've already invoked the argument."
    }
  }
}

var test = function() {
  return "First time";
}

var answer = main(test);

//Problem 5
//Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
//The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
//Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. 
//After it's been invoked 'N' number of times, return 'STOP'.

var fnCounter = function(anonymous, n){
    return function(){
      if (n > 0) {
        n--;
        return anonymous();
      } else {
        return "STOP";
      }
    }
}
   var p = function() {
     return "Keep Going";
   }

var call = fnCounter(p, 5);

//Problem 6
//Below you have a function named counter. Examine the function (without running the code) then below 
//write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or 
//evaluates an expression after a specified number of milliseconds.

/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Answer: Console.logs the number 6 five times with 1 second laps in between each log.

  Now, run the function in your console and note what happpens.
  Was your answer right or wrong?

  Answer: It was right.

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

var counter = function() {
  for (var i = 1; i <= 5; i++) {
    (function(n) {
      n;
      setTimeout(function timer() {
          console.log(n);
      }, n * 1000);
    }) (i)
  }
};

//Problem 7
/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = function (num) {
  return num;
}

funcArray(0) //0
funcArray(1) //1
funcArray(2) //2
funcArray(3) //3
funcArray(4) //4
funcArray(5) //5


