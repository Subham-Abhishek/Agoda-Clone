import {
  GETDATA_FAILURE,
  GETDATA_REQUEST,
  GETDATA_SUCCESS,
  SEARCHDATA_SUCCESS,
  SEARCHDATA_REQUEST,
  SEARCHDATA_FAILURE,
} from "./actiontype";
const initialState = {
  hoteldata: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GETDATA_SUCCESS: {
      return {
        ...state,
        hoteldata: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GETDATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case SEARCHDATA_REQUEST: {
      return {
        ...state,

        isLoading: true,
        isError: false,
      };
    }

    case SEARCHDATA_SUCCESS: {
      return {
        ...state,
        hoteldata: payload,
        isLoading: false,
        isError: false,
      };
    }

    case SEARCHDATA_FAILURE: {
      return {
        ...state,

        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
