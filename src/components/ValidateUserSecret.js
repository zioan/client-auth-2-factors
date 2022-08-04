import { useState, useContext } from 'react';
import axios from 'axios';
import server from '../util/server';
import AuthContext from '../context/AuthContext';

function ValidateUserSecret() {
  const [userSecret, setUserSecret] = useState('');
  const { getUser } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = 'admin@test.com';

    const data = {
      email,
      userSecret,
    };

    try {
      await axios.post(`${server}/users/secret`, data).then(() => getUser());
      console.log(userSecret);
    } catch (error) {
      console.log(error.response.data);
    }
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
