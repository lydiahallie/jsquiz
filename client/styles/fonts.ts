import deepmerge from "deepmerge";

const defaultValues = {
  button: {
    fontSize: "14px",
    fontFamily: "Menlo"
  }
};

const large = {
  button: {
    fontSize: "14px"
  }
};

const medium = {
  button: {
    fontSize: "14px"
  }
};

const small = {
  button: {
    fontSize: "13px"
  }
};

export default {
  default: defaultValues,
  large: deepmerge(defaultValues, large),
  medium: deepmerge(defaultValues, medium),
  small: deepmerge(defaultValues, small)
};
