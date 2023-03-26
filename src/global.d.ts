declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png";
declare module "*.jpeg";

interface IView {
  status: string;
}
type viewState = {
  current_view: IView;
};

type viewAction = {
  type: string;
  view: IView;
};

type DispatchType = (args: viewAction) => viewAction;
