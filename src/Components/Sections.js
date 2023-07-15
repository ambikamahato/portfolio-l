import React from "react";

const Section = ({tittle,des}) => {
    return (
        <div className="sections">
            <hr />
            <h1>{tittle}</h1>
            <p>{des}</p>
        </div>
    )
}

export default Section;