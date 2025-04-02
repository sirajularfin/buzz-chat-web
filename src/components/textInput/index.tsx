import React from 'react';
import Colors from '../../themes/colors';
import Text from '../text';
import { FontVariant } from '../text/styles';
import styles from './styles';

type IProps = Partial<
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'name' | 'value' | 'onChange' | 'onBlur' | 'placeholder'
  > & {
    variant: 'ROUNDED' | 'SQUARED';
    error: string | null;
  }
>;

const TextInput: React.FC<IProps> = ({ ...props }) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{
          ...(props.variant === 'ROUNDED' ? styles.rounded : styles.squared),
          ...styles.placeholderText,
        }}
      />
      <Text variant={FontVariant.LabelSmall} color={Colors.RED}>
        {props.error}
      </Text>
    </>
  );
};

export default TextInput;
