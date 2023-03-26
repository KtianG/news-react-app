import * as actionTypes from "./actionTypes";

export function setView(view: IView) {
  const action: viewAction = {
    type: actionTypes.SET_VIEW,
    view,
  };
  return action;
}
