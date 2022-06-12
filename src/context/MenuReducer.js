const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        menuOpen: !state.menuOpen,
      };
    }
    default:
      return state;
  }
};
export default reducer;
