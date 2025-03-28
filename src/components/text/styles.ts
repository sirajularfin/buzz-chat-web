import IStyles from '../../interfaces/style.interface';
import Fonts from '../../themes/fonts';

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

export const styles: IStyles = {
  'DISPLAY_LARGE': {
    fontSize: '57px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '64px',
    letterSpacing: '-0.25px',
  },
  'DISPLAY_MEDIUM': {
    fontSize: '45px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '52px',
    letterSpacing: '0px',
  },
  'DISPLAY_SMALL': {
    fontSize: '36px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '44px',
    letterSpacing: '0px',
  },
  'BODY_LARGE': {
    fontSize: '16px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'BODY_MEDIUM': {
    fontSize: '14px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  'BODY_SMALL': {
    fontSize: '12px',
    fontFamily: Fonts.Montserrat.Regular,
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
  'HEADING_LARGE': {
    fontSize: '32px',
    fontFamily: Fonts.Montserrat.SemiBold,
    lineHeight: '40px',
    letterSpacing: '0px',
  },
  'HEADING_MEDIUM': {
    fontSize: '28px',
    fontFamily: Fonts.Montserrat.SemiBold,
    lineHeight: '36px',
    letterSpacing: '0px',
  },
  'HEADING_SMALL': {
    fontSize: '24px',
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '32px',
    letterSpacing: '0px',
  },
  'LABEL_LARGE': {
    fontSize: '14px',
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '20px',
    letterSpacing: '0.1px',
  },
  'LABEL_MEDIUM': {
    fontSize: '12px',
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '16px',
    letterSpacing: '0.5px',
  },
  'LABEL_SMALL': {
    fontSize: '11px',
    fontFamily: Fonts.Montserrat.Medium,
    lineHeight: '16px',
    letterSpacing: '0.5px',
  },
};
