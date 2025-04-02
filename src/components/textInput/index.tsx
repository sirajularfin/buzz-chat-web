import React from 'react';
import styles from './styles';

type IProps = Partial<
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'name' | 'value' | 'onChange' | 'onBlur' | 'placeholder'
  > & {
    variant: 'ROUNDED' | 'SQUARED';
  }
>;

const TextInput: React.FC<IProps> = ({ ...props }) => {
  return (
    <input
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={{
        ...(props.variant === 'ROUNDED' ? styles.rounded : styles.squared),
        ...styles.placeholderText,
      }}
    />
  );
};

export default TextInput;
