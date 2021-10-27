import { ADD_TO_CART,REMOVE_TO_CART } from '../constant';


export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn('reducer',action);
      return [...state, { data: action.payload }];
      break;

    case REMOVE_TO_CART:
      state.pop();
      return [...state];
      break;
    default:
      return state;
  }
}