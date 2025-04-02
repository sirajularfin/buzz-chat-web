import Colors from '../../themes/colors';
import Fonts from '../../themes/fonts';
import createStyles from '../../util/styles.util';

const styles = createStyles({
  text: {
    fontSize: '1.5rem',
    fontFamily: Fonts.Dokdo.Regular,
    color: Colors.WHITE,
    lineHeight: '2rem',
    letterSpacing: '0rem',
  },
  container: {
    paddingLeft: '20px',
    paddingTop: '1px',
    paddingBottom: '10px',
  },
});

export default styles;
