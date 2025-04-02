import React from 'react';
import Colors from '../../themes/colors';
import Text from '../text';
import { FontVariant } from '../text/styles';
import styles from './styles';

type IProps = Partial<
  Pick<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'disabled' | 'type'> & {
    title: string;
  }
>;

const Button: React.FC<IProps> = ({ ...props }) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      style={styles.container}
      type={'submit'}
    >
      <Text color={Colors.WHITE} variant={FontVariant.LabelLarge}>
        {props.title}
      </Text>
    </button>
  );
};

export default Button;
