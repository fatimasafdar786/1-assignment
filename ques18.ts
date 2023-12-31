let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Bali", "Rome"];

console.log("Original Order:", placesToVisit);

let sortedAlphabetical = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetical);
console.log("Original Order (still):", placesToVisit);

let sortedReverseAlphabetical = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", sortedReverseAlphabetical);
console.log("Original Order (still):", placesToVisit);

placesToVisit = placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit = placesToVisit.reverse();
console.log("Original Order (again):", placesToVisit);

placesToVisit.sort();
console.log("Alphabetical Order (changed):", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order (changed):", placesToVisit);
