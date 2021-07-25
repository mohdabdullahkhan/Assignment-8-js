// var p = 62;
// switch (true) {
//     case p < 35:
//         console.log("Sorry, you failed");
//         break;
//     case p>=35||p<=60:
//         console.log("You fall in the second class category");
//         break;
//     case  p <= 60 ||p<=80:
//         console.log("Great,you fall in first class");
//         break;
//     case p > 85:
//         console.log("Congratulations, you achieved distinction");
//         break;
//     default:
//         console.log("Enter the correct info");
// }



function percentage(p) {
    if (p < 35) {
        console.log("Sorry, you failed");
    }
    else if (p >= 35 && p <= 60) {
        console.log("You fall in the second class category");
    }
    else if (p >= 60 && p <= 80) {
        console.log("Great,you fall in first class");

    }
    else if (p > 85) {
        console.log("Congratulations, you achieved distinction");
    }
    else {
        console.log("Awesome, you fall in the category of percentages in between 80 and 85");
    }
}
percentage(81);

