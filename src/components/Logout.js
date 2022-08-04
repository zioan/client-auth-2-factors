import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Logout() {
  const { logoutUser } = useContext(UserContext);

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <>
      <button onClick={logoutHandler}>Log Out!</button>
      <hr />
    </>
  );
}

export default Logout;
