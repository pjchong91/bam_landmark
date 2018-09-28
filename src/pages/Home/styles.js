import { colors, fonts } from './../../theme';

const styles = theme => ({
  container: {},
  life: {
    display: 'flex',
    flexDirection: 'row',
    color: colors.white,
    fontSize: 70,
  },
  lifeLetter: {
    fontWeight: 100,
    margin: 0,
  },
  subHeader: {
    color: colors.yellow,
    textTransform: 'uppercase',
    letterSpacing: 2.0,
    fontSize: 14,
  },
  subHeaderBold: {
    color: colors.yellow,
    textTransform: 'uppercase',
    letterSpacing: 2.0,
    fontSize: 12,
    fontWeight: fonts.fontWeightBold,
    paddingTop: 50,
  },
  landmarkLife: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
  },
  apartment: {
    margin: '0 auto',
    maxHeight: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '50%',
    // },
  },
  apartmentImage: {
    maxWidth: '100%',
    height: 'auto',
    width: '100%',
  },
  header: {
    margin: 0,
  },
  landmarkFeature: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    color: colors.white,
    textTransform: 'uppercase',
  },
  subTitle: {
    textTransform: 'uppercase',
    letterSpacing: 2.0,
    fontWeight: 100,
  },
  logo: {
    width: 200,
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      paddingLeft: 30,
    },
  },
  landmarkCard: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
});

export default styles;
