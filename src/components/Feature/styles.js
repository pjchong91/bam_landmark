import { colors, fonts } from './../../theme';

const styles = theme => ({
  container: {
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: 100,
    },
  },
  button: {
    color: colors.yellow,
    fontWeight: fonts.fontWeightBold,
    fontSize: 12,
    letterSpacing: 2.0,
    border: `1px solid rgba(206, 175, 112, 0.3)`,
    padding: '12px 30px',
    opacity: 0.8,
    marginTop: 50,
  },
  header: {
    margin: 0,
    fontWeight: 100,
    fontSize: 40,
    [theme.breakpoints.up('md')]: {
      fontSize: 60,
    },
  },
  subHeader: {
    margin: 5,
    fontWeight: 100,
  },
  image: {
    maxWidth: '100%',
  },
  imageContainer: {
    // position: 'absolute',
    zIndex: -1,

    maxWidth: '100%',
    overflow: 'hidden',
  },
  featureText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      position: 'static',
      transform: 'translateY(0)',
      width: 500,
      paddingLeft: 50,
    },
  },
});

export default styles;
