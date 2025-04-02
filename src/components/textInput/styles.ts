import Colors from '../../themes/colors';
import Fonts from '../../themes/fonts';
import PixelScale from '../../themes/sizes';
import createStyles from '../../util/styles.util';

const styles = createStyles({
  placeholderText: {
    color: Colors.BLACK,
    fontSize: '0.875rem',
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '1.25rem',
    letterSpacing: '0.00625rem',
  },
  rounded: {
    borderWidth: 0,
    borderRadius: PixelScale.XXXXL_100,
    padding: '15px 30px',
  },
  squared: {},
});

export default styles;
