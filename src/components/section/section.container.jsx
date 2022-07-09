/*Higher Order Components */
import { compose } from "redux";
import { connect } from "react-redux";
import { WithSpinner } from "../with-spinner/with-spinner.component";

import Section from "./section.component";
import { selectIsCollectionsInFetching } from "../../redux/shop-data/shop-data.selector";

const mapStateToProps = state => ({
    isCollectionsInFetching: selectIsCollectionsInFetching(state)
})

const SectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Section)

export default SectionContainer

