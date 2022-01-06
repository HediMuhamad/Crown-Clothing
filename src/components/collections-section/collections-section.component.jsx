import React from "react";

import './collections-section.styles.scss'

const CellctionSection = ({match}) => {
    const collection = match.params.collection;
    console.log(collection);
    return (
        <div>
            <h1>Collection Section</h1>
        </div>
    )
}

export default CellctionSection