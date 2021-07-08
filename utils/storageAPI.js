import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECKS_STORAGE_KEY = 'FlashcardsDecks';

// Return all of the decks along with their titles, questions, and answers.
export async function fetchAllDecks() {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return data != null ? JSON.parse(data) : null;
  } catch (e) {
    console.log('Error fetchAllDecks: ', e);
  }
}

// Return the deck associated with the id.
export function fetchSingleDeck(id) {}

// Add a new deck name to the list of decks.
export async function saveNewDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (e) {
    console.log('Error saveNewDeckTitle: ', e);
  }
}

// Add the card to the list of questions for the deck with the associated title
export function addCardToDeck(title, card) {}
