import { fetchAllDecks, saveNewDeckTitle } from '../utils/storageAPI';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const SAVE_NEW_DECK = 'SAVE_NEW_DECK';
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

// Add a new deck name to the list of decks.
function saveNewDeck(title) {
  return {
    type: SAVE_NEW_DECK,
    title,
  };
}

export function addNewDeck(title) {
  return (dispatch) => {
    return saveNewDeckTitle(title).then(() => dispatch(saveNewDeck(title)));
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
