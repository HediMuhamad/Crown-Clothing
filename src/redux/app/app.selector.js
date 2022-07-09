import { createSelector } from "reselect"

const selectApp = state => state.app;

export const selectMenuListShowing = createSelector(
	[selectApp],
	(app) => app.show
)