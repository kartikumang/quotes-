const quotes = [
    {
        name:'Kartik Gupta',
        quote:'Work Hard One Day You Will Come Out With Your Flying Colors.'
    },{
        name:'Umang Gupta',
        quote:'Nothing will work unless you do.'
    },{
        name:'Mayank Kumar',
        quote:'Always deliver more than expected.'
    },{
        name:'Kishore Kunal',
        quote:'What would you do if you were not afraid?'
    }
]



const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click',displayquote);

function displayquote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
