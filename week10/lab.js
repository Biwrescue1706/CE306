console.log("Lab : Conditional Statements");
maxScore = 140;

let myScore = prompt("Enter your Score : ");

if (isNaN(myScore) || myScore.trim() === "") {
    alert("Please enter a valid score");
}else {
    myScore = Number(myScore);
    if (myScore < 0 || myScore > maxScore) {
        alert("Input score out of range");
    } 
    else {
        if (myScore>=120){
            alert("You got Grade : A");
        }else if (myScore>=110 && myScore<120){
            alert("You got Grade : B+");
        }else if (myScore>=100 && myScore<110){
            alert("You got Grade : B");
        }else if (myScore>=90 && myScore<100){
            alert("You got Grade : C+");
        }else if (myScore>=80 && myScore<90){
            alert("You got Grade : C");
        }else if (myScore>=70 && myScore<80){
            alert("You got Grade : D+");
        }else if (myScore>=60 && myScore<70){
            alert("You got Grade : D");
        }else{
            alert("You got Grade : F");
        }
    }
}
//1.check whether myScore is number
//alert "Please enter a valid score
//2.check myScore between [0,maxScore]
//alert "Input score out of range"
//3. Score >= 120 ("You got 'A'")
//4. >=110 < 120 ("You got 'B+'")
//5. >=100 < 110 ("You got 'B'")
//6. >=90 < 100 ("You got 'C+'")
//7. >=80 < 90 ("You got 'C'")
//8. >=70 < 80 ("You got 'D+'")
//9. >=60 < 70 ("You got 'D'")
//10. <60 ("You got 'F'")