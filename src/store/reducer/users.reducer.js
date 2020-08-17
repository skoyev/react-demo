import { userConstants } from '../../constants';

const INITIAL_STATE = {
  error: '',
  items: []
};

const FETCH_MAX_RECORD_COUNT = 100;

/**
 * User Reducer.
 * @param {*} state 
 * @param {*} action 
 */
export function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.LOAD_DATA_SUCCESS:
          return {
            // add price 1 - 10 field random int data, as response doesn't have it
            items: action.items.data.slice(0, FETCH_MAX_RECORD_COUNT).map((v) => {
              v.price1 = getRandomInt(1000);
              v.price2 = getRandomInt(2000);
              v.price3 = getRandomInt(3000);
              v.price4 = getRandomInt(4000);
              v.price5 = getRandomInt(5000);
              v.price6 = getRandomInt(6000);
              v.price7 = getRandomInt(7000);
              v.price8 = getRandomInt(8000);
              v.price9 = getRandomInt(9000);
              v.price10 = getRandomInt(10000);
              return v;
            })
          };
        case userConstants.LOAD_DATA_FAILED:
          return { 
            error: action.error
          };
        default:
          return {
            ...state
          }
    }
}

/**
 * Generate int random data.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
