import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';

import CheckoutPage from './checkout-page.component'

import { selectIsCollectionsInFetching } from '../../redux/shop-data/shop-data.selector';

const mapStateToProps = state => ({
    isCollectionsInFetching: selectIsCollectionsInFetching(state)
})

const CheckoutPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CheckoutPage)

export default CheckoutPageContainer