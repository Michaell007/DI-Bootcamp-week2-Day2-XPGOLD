// Prompt the user for a string
let chaine = prompt("Enter a verb");

if (chaine.length >= 3 && chaine.slice(chaine.length-3) != "ing") {
    chaine+="ing";
}

if (chaine.length >= 3 && chaine.slice(chaine.length-3) == "ing") {
    chaine+="ly";
}

console.log(chaine);
