import { createSelector } from "reselect";

const selectMyProfile = (state) => state.myProfile;

export const selectMyProfileLoginedUser = createSelector(
  [selectMyProfile],
  (myProfile) => myProfile.loginedUser
);

export const selectMyProfileIsLoading = createSelector(
  [selectMyProfile],
  (myProfile) => myProfile.isLoading
);
