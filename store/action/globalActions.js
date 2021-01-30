export const RESERVATIONDATAPUSH = 'RESERVATIONDATAPUSH';
export const ADDVALUE = 'ADDVALUE';
export const reservationDataPush = (data) => {
  return async (dispatch) => {
    data.map((veri) => {
      dispatch({
        type: RESERVATIONDATAPUSH,
        reservationData: veri,
        loading: false,
      });
    });
  };
};

export const addValue = (id, types, price) => {
  return async (dispatch) => {
    dispatch({
      type: ADDVALUE,
      loading: false,
      id,
      types,
      price,
    });
  };
};
