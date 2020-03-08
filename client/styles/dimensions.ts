import deepmerge from "deepmerge";

const defaultValues = {
  button: {
    borderRadius: "50px",
    minHeight: "50px",
    outline: "none"
  },

  dashboard: {
    button: {
      width: "100%"
    }
  }
};

const large = {
  button: {
    margin: ".7rem",
    padding: ".7rem"
  },
  dashboard: {
    column: {
      width: "300px"
    }
  }
};

const medium = {
  button: {
    margin: ".7rem",
    padding: ".7rem"
  },
  dashboard: {
    column: {
      width: "300px"
    }
  }
};

const small = {
  button: {
    margin: ".5rem",
    padding: ".5rem"
  },

  dashboard: {
    column: {
      width: "80vw"
    }
  }
};

export default {
  default: defaultValues,
  large: deepmerge(defaultValues, large),
  medium: deepmerge(defaultValues, medium),
  small: deepmerge(defaultValues, small)
};
