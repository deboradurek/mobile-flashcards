import { combineReducers } from 'redux';
import { RECEIVE_DECKS, SAVE_NEW_DECK, ADD_CARD_T0_DECK } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };

    case SAVE_NEW_DECK: {
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    }

    case ADD_CARD_T0_DECK: {
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, card],
        },
      };
    }

    default:
      return state;
  }
}

export default combineReducers({ decks });
