import React, { useState, Fragment } from 'react';
import NewUser from './components/Form/NewUser';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [errorObject, setErrorObject] = useState({
    errorExist:false,
    errorMessages: []
  })

  const handleErrorObject = (newError) => {
    setErrorObject(newError);
  }

  return (
    <Fragment>
      <div className='container'>
        <NewUser errorObject={errorObject} handleErrorObject={handleErrorObject} />
      </div>
    </Fragment>
  );
}

export default App;
