import deepmerge from "deepmerge";

const defaultValues = {
  topBar: {
    position: "fixed",
    top: 0,
    height: "30px",
    width: "calc(100% - 20px)",
    padding: "10px"
  },
  question: {
    width: "500px",
    maxWidth: "80vw"
  },
  button: {
    borderRadius: "50px",
    minHeight: "50px",
    outline: "none"
  },
  buttonRow: {
    maxWidth: "80vw"
  },
  innerButton: {
    position: "absolute",
    borderRadius: "50px",
    outline: "none",
    bottom: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    zIndex: -1,
    opacity: 0
  },
  code: {
    borderRadius: "15px",
    width: "100%"
  },
  dashboard: {
    button: {
      width: "100%"
    }
  },
  title: {
    maxWidth: "80%",
    margin: ".5rem",
    marginTop: "2rem"
  },
  modal: {
    wrapper: {
      position: "absolute",
      zIndex: 10,
      maxWidth: "calc(80vw - 4rem)",
      height: "80vh",
      padding: "1rem 2rem",
      borderRadius: "15px",
      opacity: 0.95,
      top: "calc(50vh - 43vh)"
    },
    answer: {
      margin: "10%",
      padding: "0 .5rem",
      width: "60%",
      minWidth: "200px"
    },
    explanation: {
      height: "75%",
      overflowY: "scroll",
      width: "90%"
    },
    button: {
      height: "10%",
      width: "80%",
      maxWidth: "200px"
    }
  }
};

const large = {
  button: {
    margin: ".7rem",
    padding: ".7rem"
  },
  buttonRow: {
    width: "300px"
  },
  code: {
    margin: "10px",
    padding: "1rem",
    minWidth: "300px"
  },
  dashboard: {
    column: {
      width: "300px"
    }
  },
  modal: {
    wrapper: {
      width: "450px",
      height: "80vh"
    }
  }
};

const medium = {
  button: {
    margin: ".7rem",
    padding: ".7rem"
  },
  buttonRow: {
    width: "300px"
  },
  code: {
    margin: "10px",
    padding: "1rem",
    minWidth: "300px"
  },
  dashboard: {
    column: {
      width: "300px"
    }
  },
  modal: {
    wrapper: {
      width: "400px",
      height: "80vh"
    }
  }
};

const small = {
  button: {
    margin: ".5rem",
    padding: ".5rem"
  },
  buttonRow: {
    width: "300px"
  },
  code: {
    margin: "10px",
    padding: "1rem",
    minWidth: "150px"
  },
  dashboard: {
    column: {
      width: "80vw"
    }
  },
  modal: {
    wrapper: {
      padding: ".5rem 1rem",
      width: "300px",
      height: "80vh",
      maxWidth: "calc(90vw - 2rem)"
    }
  }
};

export default {
  default: defaultValues,
  large: deepmerge(defaultValues, large),
  medium: deepmerge(defaultValues, medium),
  small: deepmerge(defaultValues, small)
};
