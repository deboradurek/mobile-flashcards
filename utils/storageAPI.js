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
export async function saveCardToDeck(title, card) {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const parsedData = JSON.parse(data);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...parsedData[title].questions, card],
        },
      })
    );
  } catch (e) {
    console.log('Error saveCardToDeck: ', e);
  }
}
