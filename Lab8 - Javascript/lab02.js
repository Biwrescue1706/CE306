

// while(!flag){
//     msg = prompt ("Enter your name!");
//     if (msg != "exit")
//         alert("Hello " + msg);
//     else {
//         alert("Goog Bye");
//         flag = true;
//     }
// }

// let output;
// while(true){
//     msg = prompt ("Enter your Grade!");
//     switch(msg){
//         case 'A' : output = 'Excellence'; break;
//         case 'B' : output = 'Good'; break;
//         case 'C' : output = 'OK'; break;
//         case 'D' : output = 'Poor'; break;
//         default : output = 'Bye Bye';
//         flag = true ;
//     }
//     alert (output);
//     if (flag)
//         break;
// }
let msg;
let flag = false;
let output;
let missile = 0;
let bomb = 0;

while (true) {
    msg = prompt("Enter your Grade!");

    switch (msg) {
        case 'a':
        case 'A':
            output = 'Left';
            break;
        case 'd':
        case 'D':
            output = 'Right';
            break;
        case 'w':
        case 'W':
            output = 'Forward';
            break;
        case 's':
        case 'S':
            output = 'Backward';
            break;
        case 'q':
        case 'Q':
            output = 'Up';
            break;
        case 'e':
        case 'E':
            output = 'Down';
            break;
        case 'm':
        case 'M':
            output = 'Missile';
            missile++;
            break;
        case 'b':
        case 'B':
            output = 'Bomb';
            bomb++;
            break;
        case 'x':
        case 'X':
            output = 'exit';
            flag = true;
            break;
        default:
            output = 'Invalid input';
    }
    
    alert(output);

    if (flag) {
        break;
    } else if (missile === 2) {
        break;
    } else if (bomb === 5) {
        break;
    }
}