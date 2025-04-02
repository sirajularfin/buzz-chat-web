import React from 'react';
import styles from './styles';

function Header(): React.ReactElement {
  return (
    <header style={styles.container}>
      <p style={styles.text}>BuzzChat</p>
    </header>
  );
}

export default Header;
