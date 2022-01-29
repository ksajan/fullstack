import React from 'react'

const TraditionalTotalMethod = ({ parts }) => {
    let total = 0
    parts.forEach(part => total += part.exercises)
    return (
        <div>
            <p>traditional total: {total}</p>
        </div>
    )
}

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

const TotalPart = ({ parts }) => {
    const total = parts.length
    return (
        <div>
            <p>Total part {total}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <div>
            <TraditionalTotalMethod parts={parts} />
            <Totatal parts={parts} />
            <TotalPart parts={parts} />
        </div>
    )
}

export default Total 