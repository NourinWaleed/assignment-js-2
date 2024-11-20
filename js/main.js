let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quotes= [
'“So many books, so little time.”― Frank Zappa',
'“Two things are infinite: the universe and human stupidity; and I am  not sure about the universe.” ― Albert Einstein',
'“A room without books is like a body without a soul.”― Marcus Tullius Cicero',
'“You only live once, but if you do it right, once is enough.”― Mae West',
];
btn.addEventListener('click',function(){
  var randomQuote= quotes [ Math.floor(Math.random()*quotes.length)]
  output.innerHTML= randomQuote;
})