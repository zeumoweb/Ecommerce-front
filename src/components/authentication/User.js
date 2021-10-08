import { Fragment, useState } from 'react';
import classes from './authentication.module.css';
import SignInform from './SignInForm';
import SignUpForm from './SignUpForm';

const User = () => {
    const [signIn, setSignIn] = useState(true);
    const update_register = () => {
        setSignIn(!signIn)
    }
    return (
      <Fragment>
        <div className={`${classes.main} flex h-screen w-full`}>
          <div className={`${classes["signup-left-block"]} flex justify-start flex-col items-center`}>            
            <div className="flex flex-col items-start justify-space">
              <span className="font-semibold text-6xl">SHOP</span>
              <span className="font-semibold text-3xl">Online</span>
              <span className="text-dark text-xl mt-3">All your electronic devices in one place</span>
            </div>
          </div>
          <div className={`${classes["signup-right-block"]} flex justify-center items-center flex-col space-y-10`}>
            {signIn && <SignInform onUpdateRegister = {update_register} />}
            {!signIn && <SignUpForm onUpdateRegister = {update_register} />}
          </div>
        </div>
      </Fragment>
    );
}

export default User;