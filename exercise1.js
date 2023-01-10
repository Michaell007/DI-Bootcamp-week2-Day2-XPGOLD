// Ask the user which language they speak.
let response = prompt("What do you speak ?");

// set lowercase
response = response.toLocaleLowerCase();

switch (response) {
    case "french":
        alert("Bonjour");
        break;

    case "english":
        alert("Hello");
        break;

    case "hebrew":
        alert("Shalom");
        break;

    default:
        alert("01110011 01101111 01110010 01110010 01111001");
        break;
}