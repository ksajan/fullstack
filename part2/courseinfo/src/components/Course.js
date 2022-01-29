import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const IndividualCourse = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Course = ({ course }) => {
    return (
    <div>
        {course.map(course => <IndividualCourse key={course.id} course={course} />)}
    </div>
    )
}

export default Course