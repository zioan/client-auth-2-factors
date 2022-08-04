import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import TestComponent from './components/TestComponent';
import ValidateUserSecret from './components/ValidateUserSecret';

function App() {
  return (
    <div className='App'>
      <Logout />
      <hr />
      <Login />
      <hr />
      <ValidateUserSecret />
      <hr />
      <Register />
      <TestComponent />
    </div>
  );
}

export default App;
