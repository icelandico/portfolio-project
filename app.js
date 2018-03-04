var textChanger = $("#qoute");

var quotes = ["To put a city in a book, to put the world on one sheet of paper - maps are the most condensed humanized spaces of all...They make the landscape fit indoors, make us masters of sights we can\'t see and spaces we can\'t cover.", "The virtue of maps, they show what can be done with limited space, they foresee that everything can happen therein.", "Uncharted territory, I said. The parts on the maps of our lives that we don’t understand. In cartographer’s language they call these places sleeping beauties."];

var counter = 0;

function changeQuote () {

    if (counter >= quotes.length) {
        counter = 0;
    }

        textChanger.eq(0).html(quotes[counter]);
        counter++;

}

setInterval(changeQuote, 10000);
