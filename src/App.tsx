import React from 'react';
import Header from './components/header';
import './index.css';
import RoutesConfig from './routes';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <RoutesConfig />
    </>
  );
}

export default App;
