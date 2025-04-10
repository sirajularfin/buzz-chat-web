import React, { PropsWithChildren } from 'react';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';
import { FontVariant, styles } from './styles';

interface IProps {
  color: Colors;
  numberOfLines?: number;
  textAlign?: 'center' | 'left' | 'right';
  variant: FontVariant;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const Text: React.FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
  const textStyle: React.CSSProperties = {
    color: props.color,
    textAlign: props.textAlign,
    margin: PixelScale.ZERO,
    padding: PixelScale.ZERO,
    ...styles[props.variant],
    ...props.styles,
  };

  const underlinedLinkStyle: React.CSSProperties = {
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: PixelScale.XS_3,
  };

  return (
    <p
      style={{
        ...textStyle,
        ...(props.onClick ? { ...underlinedLinkStyle } : {}),
      }}
      onClick={props.onClick}
    >
      {children}
    </p>
  );
};

export default Text;
