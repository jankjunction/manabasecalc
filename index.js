// decklist importer - returns an Object with the cardname as a key and the quantity as the value of that key
function decklistImport(deck) {
    let decklist = {};
    decklistArray = deck.split('\n');

    for (let i = 0; i < decklistArray.length; i++) {
        let qty = decklistArray[i].slice(0, decklistArray[i].indexOf(' '));
        console.log(qty);
        let cardName = decklistArray[i].slice((decklistArray[i].indexOf(' ') +1), (decklistArray[i].indexOf('(') - 1));

        // Omits lines that have 'Decklist' 'Sideboard' or a '\r'
        if ((qty !== 'D') && (qty !== '\r') && (qty !== 'S')) {
            decklist[cardName] = qty;
        } else {
            continue;
        }

    }
    console.log(Object.keys(decklist));
    return decklist;
}

decklistImport(prompt('Paste your decklist'));
//