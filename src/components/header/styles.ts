import Colors from '../../themes/colors';
import Fonts from '../../themes/fonts';
import createStyles from '../../util/styles.util';

const styles = (isDesktop: boolean) =>
  createStyles({
    text: {
      fontSize: '1.5rem',
      fontFamily: Fonts.Dokdo.Regular,
      color: Colors.WHITE,
      lineHeight: '2rem',
      letterSpacing: '0rem',
    },
    container: {
      paddingLeft: isDesktop ? '40px' : '20px',
      paddingTop: '1px',
      paddingBottom: '10px',
    },
  });

export default styles;
