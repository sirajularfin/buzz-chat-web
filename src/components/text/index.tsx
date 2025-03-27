import React, { PropsWithChildren } from 'react';
import Colors from '../../themes/colors';
import { FontVariant, styles } from './styles';

interface IProps {
  color: Colors;
  numberOfLines?: number;
  textAlign?: 'center' | 'left' | 'right';
  variant: FontVariant;
  styles?: React.CSSProperties;
}

const Text: React.FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
  const textStyle: React.CSSProperties = {
    color: props.color,
    textAlign: props.textAlign,
    display: props.numberOfLines ? '-webkit-box' : 'block',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: props.numberOfLines,
    overflow: props.numberOfLines ? 'hidden' : 'visible',
    ...styles[props.variant],
    ...props.styles,
  };

  return <p style={textStyle}>{children}</p>;
};

export default Text;
