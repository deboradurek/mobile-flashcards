import { fetchAllDecks } from '../utils/storageAPI';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
export const ADD_CARD_T0_DECK = 'ADD_CARD_T0_DECK';

// Return all of the decks along with their titles, questions, and answers.
function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function getDecks() {
  return (dispatch) => {
    return fetchAllDecks().then((decks) => dispatch(receiveDecks(decks)));
  };
}

// Add title to the deck.
export function addDeckTitle(title) {
  return {
    type: ADD_DECK_TITLE,
    title,
  };
}

// Add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_T0_DECK,
    title,
    card,
  };
}
