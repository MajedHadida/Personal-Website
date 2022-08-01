function writeQuote(){
    const quotes = ["There is no great genius without some touch of madness. ~Aristotle",
"Hope is a waking dream. ~Aristotle",
"Those that know, do. Those that understand, teach. ~Aristotle",
"You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. ~Aristotle",
"Well begun is half done. ~Aristotle"];
    let arrayIndex = Math.floor(Math.random() * quotes.length); 
    document.getElementById("quote").innerHTML = quotes[arrayIndex];
}


window.onload = function(){
    writeQuote();
}