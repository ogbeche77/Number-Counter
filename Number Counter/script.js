var famousQuotes = [
{
     name:"Albert Einstein",
      quote: "I have no special talent. I am only passionately curious.",
},
{
     name:"William Shakespeare",
     quote: "Wisely, and slow. They stumble that run fast.",
},
{
     name:"Coco Chanel",
     quote: "The most courageous act is still to think for yourself Aloud.",
},
{
     name:"Steve Job",
     quote: "Stay hungry, stay foolish",
},

{
     name:"Plato",
     quote: "The greatest wealth is to live content with little. ",
},
{
     name:"Malcom X",
     quote: "The future belongs to those who prepare for it today. ",
},
{
     name:"Bruce Lee",
      quote: "The successful warrior is the average man, with laser-like focus.",
},

{
     name:"Ralph Waldo",
     quote: "A great man is always willing to be little.",
},

{
     name:"Henry David",
     quote: "Our life is frittered away by detail… simplify, simplify. ",
},

{
     name:"Barrack Obama",
     quote: "No matter who you are or what you look like, how you started off, or how and who you love, America is a place where you can write your own destiny",
},

{
     name:"Mahatma Gandhi",
     quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
},
{
     name:"Frank Anne",
     quote: "I don’t think of all the misery but of the beauty that still remains.",
},
{
     name:"Marcus Aurelius",
      quote: "You have power over your mind – not outside events. Realize this, and you will find strength. 1",
},

{
     name:"Tony Robbins",
     quote: "The path to success is to take massive, determined action.",
},

{
     name:"Elvis Presley",
     quote: "It’s not how much you have that makes people look up to you, it’s who you are",
},

{
     name:"Victor Hugo",
     quote: "Life is a flower of which love is the honey. ",
},

{
     name:"Benjamin Franklin",
     quote: "By failing to prepare, you are preparing to fail. ",
},
{
     name:" Lao Tzu",
     quote: "The journey of a thousand miles begins with one step.",
},
{
     name:"Bob Marley",
      quote: "Love the life you live. Live the life you love. ",
},

{
     name:" Muhammad Ali",
     quote: "Float like a butterfly, sting like a bee.",
},

{
     name:" Wayne Gretzky",
     quote: "You miss 100 percent of the shots you never take.",
},

{
     name:" Nelson Mandela",
     quote: "Education is the most powerful weapon which you can use to change the world.",
},

{
     name:" Friedrich Nietzsche",
     quote: "That which does not kill us makes us stronger.",
},
{
     name:" George Orwell",
     quote: "Big Brother is watching you.",
},

{
     name:" Joe Rogan",
      quote: "Be the hero of your own story."
},

{
     name:"Muhammad Ali",
     quote: "Don’t count the days, make the days count. ",
},

{
     name:" Vince Lombardi",
     quote: "Winners never quit, and quitters never win.",
},

{
     name:" Muhammad Ali",
     quote: "I am the greatest, I said that even before I knew I was.",
},

{
     name:"Oprah Winfrey",
     quote: "Doing the best at this moment puts you in the best place for the next moment. ",
},
{
     name:" Ashton Kutcher",
     quote: "Don’t settle for what life gives you; make life better and build something.",
}

]
var quoteButton = document.querySelector("#btnquotes");
var authorQuote = document.querySelector("#quoteAuthor");
var quotes = document.querySelector("#quote");

quoteButton.addEventListener("click", displayQuote);

     function displayQuote(){
          let number = Math.floor(Math.random()*famousQuotes.length);
          authorQuote.innerHTML = famousQuotes[number].name;
          quotes.innerHTML = famousQuotes[number].quote;


     }

