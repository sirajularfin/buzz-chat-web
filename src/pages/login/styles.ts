import PixelScale from '../../themes/sizes';
import createStyles from '../../util/styles.util';

const styles = (isDesktop: boolean) =>
  createStyles({
    container: {
      width: isDesktop ? '70vw' : '90vw',
      minWidth: '320px',
      maxWidth: '500px',
      height: '80vh',
      alignContent: 'center',
      alignSelf: 'center',
      margin: '0 auto',
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      rowGap: PixelScale.S_20,
    },
  });

export default styles;
