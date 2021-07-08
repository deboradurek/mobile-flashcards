import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECKS_STORAGE_KEY = 'FlashcardsDecks';

// Return all of the decks along with their titles, questions, and answers.
export async function fetchAllDecks() {
  try {
    const data = await AsyncStorage.getItem('FlashcardsDecks');
    return data != null ? JSON.parse(data) : null;
  } catch (e) {
    console.log('Error getDecks: ', e);
  }
}

// Return the deck associated with the id.
export function fetchSingleDeck(id) {}

// Add title to the deck
export function saveDeckTitle(title) {}

// Add the card to the list of questions for the deck with the associated title
export function addCardToDeck(title, card) {}
