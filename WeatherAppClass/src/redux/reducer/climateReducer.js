import {FETCH_CLIMATE_ERROR, FETCH_CLIMATE_SUCCESS} from '../constants';

const initialState = {
  climateData: null,
  error: null,
};
export const climateReducer = (state = initialState, action) => {
  // console.log(action.payload, 'climateReducerpayload========');
  switch (action.type) {
    case FETCH_CLIMATE_SUCCESS:
      return {
        ...state,
        climateData: action.payload,
        error: null,
      };
    case FETCH_CLIMATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default climateReducer;
