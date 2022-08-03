import { MODALS } from "../../utils/constants";

const initialState = {
  [MODALS.СheckoutResultModal]: { visibility: false },
  [MODALS.СheckoutModal]: { visibility: false },
  [MODALS.ProductModal]: { visibility: false },
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL_VISIBILITY": {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          visibility: !state[action.payload].visibility,
        },
      };
    }
    case "SET_PRODUCT_MODAL_ID": {
      return {
        ...state,
        [MODALS.ProductModal]: {
          ...[MODALS.ProductModal],
          id: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default modals;
