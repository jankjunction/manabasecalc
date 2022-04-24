// decklist importer - returns an Object with the cardname as a key and the quantity as the value of that key
function decklistImport(deck) {
    let decklist = {};
    decklistArray = deck.split('\n');

    for (let i = 0; i < decklistArray.length; i++) {
        let card = {};
        let qty = decklistArray[i].slice(0, 1);
        let cardName = '';
        console.log(typeof(decklistArray[i]));

        // Checks for cards that can have double digit quantities
        if (decklistArray[i].includes('Plains') ||
            decklistArray[i].includes('Island') ||
            decklistArray[i].includes('Swamp') ||
            decklistArray[i].includes('Mountain') ||
            decklistArray[i].includes('Forest')) {cardName = decklistArray[i].slice(3, (decklistArray[i].indexOf('(') - 1))} else { 
            cardName = decklistArray[i].slice(2, (decklistArray[i].indexOf('(') - 1));}
        
        // Omits lines that have 'Decklist' 'Sideboard' or a '\r'
        if ((qty !== 'D') && (qty !== '\r') && (qty !== 'S')) {
            card.quantity = qty;
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