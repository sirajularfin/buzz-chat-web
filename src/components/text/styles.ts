import Fonts from '../../themes/fonts';
import createStyles from '../../util/styles.util';

export enum FontVariant {
  DisplayLarge = 'DISPLAY_LARGE',
  DisplayMedium = 'DISPLAY_MEDIUM',
  DisplaySmall = 'DISPLAY_SMALL',
  BodyLarge = 'BODY_LARGE',
  BodyMedium = 'BODY_MEDIUM',
  BodySmall = 'BODY_SMALL',
  HeadingLarge = 'HEADING_LARGE',
  HeadingMedium = 'HEADING_MEDIUM',
  HeadingSmall = 'HEADING_SMALL',
  LabelLarge = 'LABEL_LARGE',
  LabelMedium = 'LABEL_MEDIUM',
  LabelSmall = 'LABEL_SMALL',
}

// Considering 1rem = 16px
export const styles = createStyles({
  'DISPLAY_LARGE': {
    fontSize: '3.5625rem', // 57px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '4rem', // 64px
    letterSpacing: '-0.015625rem', // -0.25px
  },
  'DISPLAY_MEDIUM': {
    fontSize: '2.8125rem', // 45px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '3.25rem', // 52px
    letterSpacing: '0rem', // 0px
  },
  'DISPLAY_SMALL': {
    fontSize: '2.25rem', // 36px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '2.75rem', // 44px
    letterSpacing: '0rem', // 0px
  },
  'BODY_LARGE': {
    fontSize: '1rem', // 16px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '1.5rem', // 24px
    letterSpacing: '0.03125rem', // 0.5px
  },
  'BODY_MEDIUM': {
    fontSize: '0.875rem', // 14px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '1.25rem', // 20px
    letterSpacing: '0.015625rem', // 0.25px
  },
  'BODY_SMALL': {
    fontSize: '0.75rem', // 12px
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '1rem', // 16px
    letterSpacing: '0.025rem', // 0.4px
  },
  'HEADING_LARGE': {
    fontSize: '2rem', // 32px
    fontFamily: Fonts.Montserrat.SemiBold,
    lineHeight: '2.5rem', // 40px
    letterSpacing: '0rem', // 0px
  },
  'HEADING_MEDIUM': {
    fontSize: '1.75rem', // 28px
    fontFamily: Fonts.Montserrat.SemiBold,
    lineHeight: '2.25rem', // 36px
    letterSpacing: '0rem', // 0px
  },
  'HEADING_SMALL': {
    fontSize: '1.5rem', // 24px
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '2rem', // 32px
    letterSpacing: '0rem', // 0px
  },
  'LABEL_LARGE': {
    fontSize: '0.875rem', // 14px
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '1.25rem', // 20px
    letterSpacing: '0.00625rem', // 0.1px
  },
  'LABEL_MEDIUM': {
    fontSize: '0.75rem', // 12px
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '1rem', // 16px
    letterSpacing: '0.03125rem', // 0.5px
  },
  'LABEL_SMALL': {
    fontSize: '0.6875rem', // 11px
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '1rem', // 16px
    letterSpacing: '0.03125rem', // 0.5px
  },
});
