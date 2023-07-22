const quotes = [{
    quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    writer: '― Mahatma Gandhi'
}, {
    quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    writer: '― Ralph Waldo Emerson'
}, {
    quote: '“It is never too late to be what you might have been.”',
    writer: '― George Eliot'
}, {
    quote: '“Everything you can imagine is real.”',
    writer: '― Pablo Picasso'
}, {
    quote: '“For every minute you are angry you lose sixty seconds of happiness.”',
    writer: '― Ralph Waldo Emerson'
}, {
    quote: '“We dont see things as they are, we see them as we are.”',
    writer: '― Anaïs Nin'
},]

let btn= document.querySelector('#Qbtn');
let quote =document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})
