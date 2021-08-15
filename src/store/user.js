const initialState = {
  fullname: "Pirate of Caribian",
  inLoaded: false
}
export const userReducer = (state = initialState, action) => {
  return state;
}

export const getName = state => {
  return state.user.fullname.split(" ")[2];
} 