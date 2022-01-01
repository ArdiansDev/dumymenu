import update from "react-addons-update";
import data from "../../data.json";
const initialState = {
  menus: data,
};
const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOW":
      return update(state, {
        menus: {
          [payload]: {
            isShowed: { $set: !state.menus[payload].isShowed },
          },
        },
      });
    case "ALLOW":
      return update(state, {
        menus: {
          [payload]: {
            isAllowed: { $set: !state.menus[payload].isAllowed },
          },
        },
      });
    case "ALLOWSUB":
      return update(state, {
        menus: {
          [payload.id]: {
            childs: {
              [payload.subId]: {
                isAllowed: {
                  $set: !state.menus[payload.id].childs[payload.subId]
                    .isAllowed,
                },
              },
            },
          },
        },
      });
    default:
      return {
        ...state,
      };
  }
};
export default menuReducer;
