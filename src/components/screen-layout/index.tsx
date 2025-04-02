import React, { PropsWithChildren } from 'react';
import styles from './styles';

type IProps = Partial<
  Pick<React.CSSProperties, 'background' | 'backgroundColor'> & {
    styles: React.CSSProperties;
  }
>;

const ScreenLayout: React.FC<PropsWithChildren<IProps>> = ({
  children,
  ...props
}) => {
  return (
    <div
      style={{
        ...styles.container,
        background: props.background,
        backgroundColor: props.backgroundColor,
        ...props.styles,
      }}
    >
      {children}
    </div>
  );
};

export default ScreenLayout;
