import {RESERVATIONDATAPUSH, ADDVALUE} from '../action/globalActions';
const initialState = {
  loading: true,
  reservationData: [],
  total: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case RESERVATIONDATAPUSH:
      return {
        ...state,
        loading: action.loading,
        reservationData: [...state.reservationData, action.reservationData],
      };
    case ADDVALUE:
      let total = 0;
      const select = state.reservationData.find(
        (someobject) => someobject.id === action.id,
      );

      if (action.types === 'negative' && select.value !== 0) {
        select.value = select.value - 1;
        total = state.total - action.price;
      } else {
        total = state.total;
      }
      if (action.types === 'positive') {
        select.value = select.value + 1;
        total = state.total + action.price;
      }

      return {
        ...state,
        loading: action.loading,
        total: total,
      };
  }
  return state;
};
