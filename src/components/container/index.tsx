import React, { CSSProperties, PropsWithChildren } from 'react';
import Colors from '../../themes/colors';

type MarginProps = Pick<
  CSSProperties,
  'margin' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginTop'
>;

type PaddingProps = Pick<
  CSSProperties,
  'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop'
>;

type BorderProps = Pick<
  CSSProperties,
  | 'borderBottomWidth'
  | 'borderColor'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRightWidth'
  | 'borderTopWidth'
  | 'borderWidth'
>;

type FlexProps = Pick<
  CSSProperties,
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'columnGap'
  | 'flex'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'gap'
  | 'justifyContent'
  | 'rowGap'
>;

type PositionProps = Pick<
  CSSProperties,
  'bottom' | 'left' | 'position' | 'right' | 'top'
>;

type DimensionProps = Pick<
  CSSProperties,
  'height' | 'width' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight'
>;

type IProps = MarginProps &
  PaddingProps &
  BorderProps &
  FlexProps &
  PositionProps &
  DimensionProps & {
    debug: boolean;
    backgroundColor: CSSProperties['backgroundColor'];
  };

const Container: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  debug = false,
  ...props
}) => {
  const debugStyle = debug
    ? { borderWidth: '1px', borderColor: Colors.BLACK }
    : {};

  return <div style={{ ...props, ...debugStyle }}>{children}</div>;
};

export default Container;
