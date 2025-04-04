import React from 'react';

type IProps = Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  borderWidth?: string | number;
  borderColor?: string;
};

const Image: React.FC<IProps> = React.memo(
  ({ ...props }) => {
    return (
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{
          borderRadius: props.borderRadius,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          objectFit: 'cover',
        }}
      />
    );
  },
  (prevProps, nextProps) => prevProps.src === nextProps.src,
);

export default Image;
