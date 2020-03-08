import deepmerge from "deepmerge";

const defaultValues = {
  button: {
    fontSize: "14px",
    fontFamily: "Menlo"
  },
  title: {
    fontSize: "18px",
    fontFamily: "Avenir Next",
    fontWeight: "600"
  },
  code: {
    fontFamily: "'Menlo' !important",
    fontWeight: "lighter",
    fontSize: "14px"
  },
  modal: {
    main: { fontFamily: "Avenir Next" },
    answer: {
      fontWeight: "bold",
      fontSize: "20px",
      fontFamily: "Avenir Next"
    },
    explanation: {
      fontSize: "16px",
      lineHeight: "1.4rem"
    }
  }
};

const large = {
  button: {
    fontSize: "14px"
  },
  code: { fontSize: "14px" }
};

const medium = {
  button: {
    fontSize: "14px"
  },
  title: {
    fontSize: "20px"
  },
  code: { fontSize: "14px" }
};

const small = {
  button: {
    fontSize: "13px"
  },
  title: {
    fontSize: "15px"
  },
  code: { fontSize: "12px" },
  modal: {
    explanation: {
      fontSize: "14px"
    }
  }
};

export default {
  default: defaultValues,
  large: deepmerge(defaultValues, large),
  medium: deepmerge(defaultValues, medium),
  small: deepmerge(defaultValues, small)
};
