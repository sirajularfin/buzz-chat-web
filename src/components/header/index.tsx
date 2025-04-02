import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './styles';

function Header(): React.ReactElement {
  const isDesktop = useResponsive();
  const style = styles(isDesktop);
  return (
    <header style={style.container}>
      <p style={style.text}>BuzzChat</p>
    </header>
  );
}

export default Header;
