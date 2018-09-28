import { fonts, colors } from './../../theme';

const styles = theme => ({
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(255,255,255,0))',
    minHeight: 80,
    zIndex: 99,
  },
  link: {
    textTransform: 'uppercase',
    fontFamily: fonts.fontFamily,
    fontWeight: fonts.fontWeightBold,
    color: colors.white,
    fontSize: 13,
    opacity: 0.5,
    padding: 5,
  },
  active: {
    opacity: 0.9,
  },

  rightNav: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  logoContainer: {
    maxWidth: 170,
  },
  logo: {
    width: '100%',
    padding: 30,
  },
  rightButtons: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    bottom: -140,
    left: 20,
    width: 10,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      // backgroundColor: 'red',
      position: 'static',
      width: 'auto',
      alignItems: 'center',
      borderRight: '1px solid white',
      height: 50,
    },
  },
  mobileHidden: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      padding: 30,
      opacity: 1,
      fontWeight: fonts.fontWeightBold,
    },
  },
});

export default styles;
