export const editMenu = (data) => {
  return {
    type: "SHOW",
    payload: data,
  };
};

export const editAllowMenu = (data) => {
  return {
    type: "ALLOW",
    payload: data,
  };
};

export const editAllowSubMenu = (data) => {
  return {
    type: "ALLOWSUB",
    payload: data,
  };
};
