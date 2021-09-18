import Modal from '../UI/Modal';
import classes from './authentication.module.css';
import { ImCross } from 'react-icons/im';
import { FaSignInAlt } from 'react-icons/fa';
import { RiStore3Line, RiAccountPinCircleFill } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Account = (props) => {
    return (
      <Modal setIsOpen={props.setIsOpen}>
        <div className={`${classes.account} flex flex-col`}>
          <ImCross
            className={`${classes.cross} absolute top-12 right-10 w-6 h-6  cursor-pointer`}
            onClick={() => props.setIsOpen(false)}
          />
          <RiAccountPinCircleFill className="absolute top-6 left-8 w-20 h-20" />
          <Link
            className={`${classes.signin} flex items-center flex mt-40 ml-8 font-bold hover:opacity-50 cursor-pointer`}
            onClick={() => props.setIsOpen(false)}
            to="/signin"
          >
            <FaSignInAlt className="mr-3" />
            <span>Sign In</span>
          </Link>
          <div
            className={`${classes.track} flex items-center font-bold hover:opacity-50 cursor-pointer flex mt-8 ml-8`}
          >
            <RiStore3Line className="mr-3" />
            <span>Track Orders</span>
          </div>
          <div
            className={`${classes["account-label"]} flex items-center font-bold hover:opacity-50 cursor-pointer flex mt-8 ml-8`}
          >
            <VscAccount className="mr-3" />
            <span>Account</span>
          </div>
          <div
            className={`${classes.help} flex items-center font-bold hover:opacity-50 cursor-pointer flex mt-8 ml-8`}
          >
            <FiHelpCircle className="mr-3" />
            <span>Help</span>
          </div>
        </div>
      </Modal>
    );
}
 
export default Account;