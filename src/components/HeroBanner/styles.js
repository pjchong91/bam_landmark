import { fonts, colors } from './../../theme';

const styles = theme => ({
  container: {
    height: '100vh',
    backgroundPosition: '20%',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    padding: 30,
  },
  subHeader: {
    textTransform: 'uppercase',
    fontWeight: fonts.fontWeightRegular,
    color: colors.white,
    fontSize: 16,
    letterSpacing: 2.0,
  },
  mainHeader: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 100,
    fontSize: 35,
    padding: 0,
    margin: 0,
    transition: '.8s ease',
    [theme.breakpoints.up('sm')]: {
      fontSize: 55,
    },
  },
  bannerText: {
    transform: 'translateY(40px)',
  },
  scrollButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 12,
    paddingLeft: 30,
    fontWeight: fonts.fontWeightBold,
    letterSpacing: 2.0,
    display: 'flex',
    flexDirection: 'column',
  },
  arrow: {
    width: 30,
    paddingTop: 30,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default styles;
