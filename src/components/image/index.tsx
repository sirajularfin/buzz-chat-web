import React from 'react';
import PixelScale from '../../themes/sizes';

type IProps = Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  borderColor?: string;
  borderRadius?: PixelScale;
  borderWidth?: PixelScale;
  height?: PixelScale;
  width?: PixelScale;
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
