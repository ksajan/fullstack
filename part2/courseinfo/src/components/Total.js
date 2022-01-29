import React from 'react'

const Totatal = ({ parts }) => {
    const total = parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)
    return (
        <div>
            <p>
                Number of exercises {total}
            </p>
        </div>
    )
}

const Total = ({ parts }) => {
    const len = parts.length
    return (
        <div>
            <p>Total of {len} exercise(s)</p>
        </div>
    )
}

export default Total