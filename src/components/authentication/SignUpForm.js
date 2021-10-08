import classes from './authentication.module.css';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import API from '../../config';

const signup = (user) => {
  fetch('/signup', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(user)
  })
  .then(res => { return res.json()})
  .catch( err => { console.log(err)})
}

const onSubmit = (values) => {
  signup(values);
}

// form validation
const initialValues = {
  name: '',
  email: '',
  password: ''
}

const validationSchema = yup.object({
  name: yup.string()
          .required('Please enter username'),
  email:  yup.string()
            .email('Invalid email')
            .required('Please enter email'),
  password: yup.string()
               .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, 'Should include number, lower and uppercase letter')
               .required('Please enter Password')
})

const SignUpForm = (props) => {
    return (
      <div className={`${classes["signup-right-block"]} flex justify-center items-center flex-col space-y-10`}>
        <div className='font-semibold text-3xl'>
          Register
        </div>
        <Formik
          initialValues = {initialValues}
          validationSchema = {validationSchema}
          onSubmit = {onSubmit}>
          <Form className='flex flex-col space-y-6'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='name'>Name</label>
              <Field
                type='text'
                id = 'name'
                name = 'name'
                placeholder = 'username...'
                className='text-nav border border-nav outline-none rounded-lg w-80 h-10 p-4'>
              </Field>
                <ErrorMessage name="name">
                  {(errMsg) => <div className="text-red text-xs">{errMsg}</div> }
                </ErrorMessage>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email'>Email</label>
              <Field
                type ='text'
                id = 'email'
                name = 'email'
                placeholder = "example@gmail.com"
                className='text-nav border border-nav outline-none rounded-lg w-80 h-10 p-4'>
              </Field>
              <ErrorMessage name="email">
                {(errMsg) => <div className="text-red text-xs">{errMsg}</div> }
              </ErrorMessage>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='password'>Password</label>
              <Field
                type='password'
                id = 'password'
                name = 'password'
                placeholder = '**********'
                className='text-nav border border-nav outline-none rounded-lg w-80 h-10 p-4'>
              </Field>
              <ErrorMessage name="password">
                {(errMsg) => <div className="text-red text-xs">{errMsg}</div> }
              </ErrorMessage>
            </div>
            <div>
              <button 
                type='submit'
                className='border border-nav outline-none rounded-lg w-80 h-9 bg-nav hover:bg-white hover:text-nav text-white'>
                  Sign Up
              </button>
              <div className='relative flex flex-col'>
                <hr className='mt-6'></hr>
                <div className='absolute self-center text-xl p-2 px-4 bg-white'>or</div>
              </div>
              <button
              className="border border-nav outline-none rounded-lg w-80 h-9 bg-white hover:bg-nav hover:text-white text-nav mt-6"
              type='button'
              onClick={ () => props.onUpdateRegister()}
            >
              Login
            </button>
            </div>
          </Form>
        </Formik>
      </div>
    );
}

export default SignUpForm;