var height, age, result, result2, result3;

height = prompt("Player 1: Please enter your height. (in cms)");
age = prompt("Player 1: Please enter your age.");
result = height + age * 5;

height = prompt("Player 2: Please enter your height. (in cms)");
age = prompt("Player 2: Please enter your age.");
result2 = height + age * 5;

height = prompt("Player 3: Please enter your height. (in cms)");
age = prompt("Player 3: Please enter your age.");
result3 = height + age * 5;

if (result > result2 && result > result3)
    console.log("Player 1 wins!");
else if (result2 > result && result2 > result3)
    console.log("Player 2 wins!");
else if (result3 > result && result3 > result2)
    console.log("Player 3 wins!");
else 
    console.log("Draw!");