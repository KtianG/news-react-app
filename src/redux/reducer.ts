import * as actionTypes from "./actionTypes";

const initialState: viewState = { current_view: { status: "grid" } };

const reducer = (
  state: viewState = initialState,
  action: viewAction
): viewState => {
  switch (action.type) {
    case actionTypes.SET_VIEW:
      const viewState: IView = { status: action.view.status };
      return {
        ...state,
        current_view: viewState,
      };
  }
  return state;
};

export default reducer;
