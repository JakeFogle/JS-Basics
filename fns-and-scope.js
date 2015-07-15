//Problem 1
//Once you complete a problem, open up Chrome and check the answer in the console.

var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if (name === 'Tyler') {
		return true;
	} else {
		return false;
	}
}

console.log(isTyler(name));

//Problem 2
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function() {
	return prompt("What's your name?");
}

getName();

//Problem 3
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	var message = "Welcome, " + getName();
	alert(message);
}

welcome();

//Problem 4
//What is the difference between arguments and parameters?

// Arguments are variables that are passed to functions.
// Parameters are placeholders within the function.

//Problem 5
//What are all the falsy values in JavaScript and how do you check if something is falsy?

// false, 0, NaN, null, undefined, ""
// if (!value)

//Problem 6
//Create a function called myName that returns your name

function myName() {
	return "Jake Fogle";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Problem 7
//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function() {
		return "Jake Fogle";
	};
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();