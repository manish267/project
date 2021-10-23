import React from 'react'

const CompanyComp = (props) => {
    return (
        <div className="d-flex direction-row">
        <img style={{'height':"130px"}} src={props.image} alt={props.name} />
            
        </div>
    )
}

export default CompanyComp
