import PixelScale from '../../themes/sizes';
import createStyles from '../../util/styles.util';

const styles = createStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    rowGap: PixelScale.S_20,
    width: '90%',
  },
});

export default styles;
