import React from 'react'
import IndividualCourse from './IndivisualCourse'

const Course = ({ course }) => {
    return (
    <div>
        {course.map(course => <IndividualCourse key={course.id} course={course} />)}
    </div>
    )
}

export default Course