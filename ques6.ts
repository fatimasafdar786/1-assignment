let personNameWithWhitespace: string = "\t  Fatima \n   ";
console.log("Name with whitespace:");
console.log("{" + personNameWithWhitespace + "}");
let personNameStripped: string = personNameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log("{" + personNameStripped + "}");