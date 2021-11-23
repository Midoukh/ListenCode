import React from 'react'
import classes from './Spinner.css'

const Spinner = ({ marginLeft, marginTop }) =>{
    return (
        <div className={classes.ldsEllipsis} style={{ marginLeft: marginLeft, marginTop: marginTop }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
