import React from "react";
import './with-spinner.styles.scss'

export const WithSpinner = (WrappedComponent) => ({isDataInLoading, ...otherProps}) => (
    !isDataInLoading ? <WrappedComponent {...otherProps} /> : 
    <div className="loading-view-circle">
        <div className="loading-view-overlay"></div>
    </div> 
)