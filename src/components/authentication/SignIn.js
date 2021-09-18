import laptop from '../../static/laptop.png';
import { Fragment } from 'react';
import classes from './authentication.module.css'
import { Formik, Fo}

const SignIn = () => {
    return (
      <Fragment>
        <div className={`${classes.main} flex h-screen w-full`}>
          <div
            className={`${classes["left-blog"]} flex justify-center flex-col items-center`}
          >
            <div className="flex items-center justify-center -mt-10">
              All your Electronics Devices in One Place
            </div>
            <div className={`${classes.image}`}>
              <img src={laptop} alt="Laptop" className='w-100 h-auto'></img>
            </div>
          </div>
          <div className={`${classes["right-blog"]} flex`}>

          </div>
        </div>
      </Fragment>
    );
}

export default SignIn;