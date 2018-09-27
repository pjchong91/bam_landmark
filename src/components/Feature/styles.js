import { colors, fonts } from "./../../theme";

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    textTransform: "uppercase",
    backgroundPosition: "center",
    backgroundSize: "600px auto",
    backgroundRepeat: "no-repeat"
  },
  button: {
    color: colors.yellow,
    fontWeight: fonts.fontWeightBold,
    fontSize: 12,
    letterSpacing: 2.0,
    border: `1px solid rgba(206, 175, 112, 0.3)`,
    padding: "12px 30px",
    opacity: 0.8,
    marginTop: 50
  },
  header: {
    margin: 0,
    fontWeight: 100,
    fontSize: 40
  },
  subHeader: {
    margin: 5,
    fontWeight: 100
  }
};

export default styles;
