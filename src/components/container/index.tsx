import React, { CSSProperties, PropsWithChildren } from 'react';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';

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
    background: CSSProperties['background'];
  };

const Container: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  debug = false,
  ...props
}) => {
  const debugStyle: CSSProperties = debug
    ? { outlineWidth: PixelScale.XS_1, outlineColor: Colors.BLACK }
    : {};

  return <div style={{ ...props, ...debugStyle }}>{children}</div>;
};

export default Container;
