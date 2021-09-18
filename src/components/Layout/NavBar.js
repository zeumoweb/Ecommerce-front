import { Fragment, useState } from 'react';
import '../../freakflags.css';
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./navbar.module.css";
import Account from '../authentication/Account';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Fragment>
      {isOpen && <Account setIsOpen={setIsOpen}/>}
        <div className={`${classes.header} w-screen h-16 text-white bg-nav`}>
          <GiHamburgerMenu className="ml-5 mr-3 cursor-pointer" />
          <div className={`${classes.name} text-white font-bold ml-10 mr-5`}>
            DropElectros
          </div>
          <div className={`${classes["search-blog"]} flex items-center`}>
            <div className={`${classes.categories} cursor-pointer`}>
              All Products
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <input className={`${classes.search} px-3 shadow-inner`} type='text' placeholder='Search...'></input>
            <span
              className={`${classes["search-icon"]} items-center justify-center bg-orange flex items-center cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <div className={`${classes.account} h-9 w-26 ml-12 cursor-pointer `} onClick={() => setIsOpen(true)}>
            <CgProfile className="text-white mr-1 w-6 h-6" />
            Account
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokelinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div className={`${classes.country} ml-4 cursor-pointer z-1`}>
            <div className="fflag fflag-US ff-round ff-lg"></div>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokelinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div className={`${classes.heart} ml-4 cursor-pointer`}>
            <AiOutlineHeart className="w-6 h-6" />
            <span className="ml-1">My Items</span>
          </div>
          <div className={`${classes.cart} mr-8 cursor-pointer`}>
            <AiOutlineShoppingCart className="w-6 h-6" />
            <span className="ml-1">Cart</span>
            <span className="rounded-full p-2 w-6 h-6 bg-orange text-nav flex justify-center items-center font-bold">
              125
            </span>
          </div>
        </div>
      </Fragment>
    );
};

export default NavBar;
