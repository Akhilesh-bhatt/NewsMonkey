import React from 'react'
import spinner from './spinner.gif'

const SpinnerLoad = () => {
    return (
        <div className="text-center my-2">
            <img src={spinner} alt="loading" />
        </div>
    )
}

export default SpinnerLoad
