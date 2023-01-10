// Ask the user for their grade.
let grade = prompt("What is your grade ?");
grade = Number(grade);

if (!isNaN(grade)) {

    if (grade>90) {
        console.log("A");
    }

    if (grade > 80 && grade <= 90) {
        console.log("B");
    }

    if (grade >= 70 && grade <= 80) {
        console.log("C");
    }

    if (grade < 80) {
        console.log("D");
    }
    
}