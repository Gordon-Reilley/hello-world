function greetUser(){
    let usersName = prompt("Hi, what's your name?");
    console.log(usersName);
    if (usersName == ""){
        usersName = prompt("Please enter your name, it'll be worth it trust us!");
        console.log(usersName);
    if (usersName == ""){
        alert("Alright we get it we're strangers, maybe next time.")
    }}
    document.write("Hi, " + usersName + " welcome to the best video game blog on the web!");
}

greetUser();

function welcomeQuestion(){
    const introQuestion = prompt("Hey, do you love video games?");

    if (introQuestion == "yes"){
    alert("Then be sure to check out the best games of 2022!"); 
    } else if (introQuestion == "no"){
    alert("Lets see if we can change that, check out some of the best games of 2022!");
    } else {
    alert("Either way, all are welcome here so enjoy! Don't forget to check out the best games of 2022.");
    }
}

welcomeQuestion();

function gameTime(){
    let times = prompt("How many days a week do you play video games?");
    console.log(times);

    for (let i = 0; i < times; i++){
    console.log(i);
    document.write("<img style='width:20px;' src='https://assets-prd.ignimgs.com/2022/06/10/pc-controller-2-1654886681557.jpg?width=1280' alt='game controllers'/>");
    }
}

gameTime();

function animal(){
    let animalGuess = prompt("what is the most commonly featured animal in video games?");
    console.log(animalGuess)

    while (animalGuess !== "dog"){
        animalGuess = prompt("close but no dice, try again!");
    }
}

animal();

function confirm_alert() {
    var youSure = "Click OK if you want to see the best games of 2022!";
    var go = "https://burmpf.github.io/hello-world/";
    var message = "Oops, too late for that now!";

    if (confirm(youSure)) {
        window.location = go;
    } else {
        alert(message);
    }

}

