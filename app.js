const introQuestion = prompt("Hey, do you love video games?");

if (introQuestion == "yes"){
    alert("Then be sure to check out the best games of 2022!");
} else if (introQuestion == "no"){
    alert("Lets see if we can change that, check out some of the best games of 2022!");
} else {
    alert("Either way, all are welcome here so enjoy! Don't forget to check out the best games of 2022.");
}

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
