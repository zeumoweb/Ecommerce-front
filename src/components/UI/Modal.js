import { Fragment } from "react";
import classes from './modal.module.css';
const BackDrop = (props) => {
  return (
    <div className={`${classes.backdrop}`} onClick={() => props.setIsOpen(false)}>
      {props.children}
    </div>
  );
};

const Overlay = (props) => {
  return <div className="">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop setIsOpen={props.setIsOpen} />
      <Overlay> {props.children}</Overlay>
    </Fragment>
  );
};

export default Modal;
