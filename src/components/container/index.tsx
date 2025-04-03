import React, { CSSProperties, PropsWithChildren } from 'react';

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
  | 'display'
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
    backgroundColor: CSSProperties['backgroundColor'];
    background: CSSProperties['background'];
  };

const Container: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  ...props
}) => {
  return <div style={{ ...props }}>{children}</div>;
};

export default Container;
