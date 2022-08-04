import { useState } from 'react';
import axios from 'axios';
import server from '../util/server';

function ValidateUserSecret() {
  const [userSecret, setUserSecret] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const secret = {
      userSecret,
    };

    axios.post(`${server}/users/secret`, secret);
    console.log(userSecret);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Validation Code</label>
        <input
          type='text'
          placeholder='Enter Validation Code'
          value={userSecret}
          onChange={(e) => setUserSecret(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </>
  );
}

export default ValidateUserSecret;
