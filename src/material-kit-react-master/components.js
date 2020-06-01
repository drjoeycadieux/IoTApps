import { container } from "./material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  media: {
    display: "block",
    //maxWidth: "100%",
    //maxHeight: "100%",
    width: "50%",
    height: "50%",
    //padding: "0.5rem 3rem",
    padding: "2rem",
    //margin: "0",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
    //backgroundSize: "70px auto",
    //borderBottom: "1px solid #cfd8dc"
  }
};

export default componentsStyle;
