// user
export const selectUser = state => state.user.userData;
export const selectUserIsLoading = state => state.user.isLoading;

// reviews
export const selectReviews = state => state.reviews.reviews;

// theme

export const selectThemeIsLight = (state) => state.theme.value === "light";
export const selectTheme = (state) => state.theme.value;