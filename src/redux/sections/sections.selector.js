import { createSelector } from "reselect";

const selectSections = state => state.sections

export const selectDirectorySections = createSelector(
    [selectSections],
    (sections) => sections.sections
)