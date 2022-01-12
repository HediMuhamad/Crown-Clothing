/*Higher Order Components */
import { compose } from "redux";
import { connect } from "react-redux";
import { WithSpinner } from "../with-spinner/with-spinner.component";

import SectionComponent from "./section.component";
import { selectIsCollectionsInFetching } from "../../redux/shop-data/shop-data.selector";

const mapStateToProps = state => ({
    isCollectionsInFetching: selectIsCollectionsInFetching(state)
})

const SectionComponentContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SectionComponent)

export default SectionComponentContainer

