import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/user/userSlice.js';

const Signup = () => {
    const dispatch = useDispatch();

  return (
    <div>
      <button type='button' className='btn btn-primary' onClick={() => dispatch(createUser({username:"Drashti",email:"drashtibilimoria@gmail.com",role:"user"}))}>Click</button>
    </div>
  )
}

export default Signup
