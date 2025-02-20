import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Model = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {/* Using React portal */}

      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Model;
