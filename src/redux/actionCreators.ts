import * as actionTypes from "./actionTypes";

export function setGrid(view: IView) {
  const action: viewAction = {
    type: actionTypes.SET_GRID,
    view,
  };

  return action;
}

export function setList(view: IView) {
  const action: viewAction = {
    type: actionTypes.SET_LIST,
    view,
  };
}
export function setView(view: IView) {
  const action: viewAction = {
    type: actionTypes.SET_VIEW,
    view,
  };

  return action;
}
