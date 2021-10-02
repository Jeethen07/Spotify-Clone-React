export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Just for developing we used the token here
  // after developing change the token to null
  // token:
  // "BQDFNYDTMmZ2Scpoj4dqtdP6Yw7ljT-B4RAupPgCbA6eejIc42iwV7VmkY4BYzClckoAXlbyBgtsi8CsUPBu9q63SEWshmap2Xkekio76TLVsbahimNSBGVaSHtlXD0p4qNswO3btMZkkeSFxO3Vfv761AJRFRgPPj64BiVJ_wjwcEjA",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
