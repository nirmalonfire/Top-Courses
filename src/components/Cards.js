import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {
    let courses = props.courses;
    // const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        }else{
            return courses[category];
        }
    }

    // let allCourses = [];
    // const getCourses = () => {
    //     // console.log(courses);
    //     Object.values(courses).forEach((coursesCategory) => {
    //         coursesCategory.forEach((courses) => {
    //             allCourses.push(courses);
    //         })
    //     })
    //     return allCourses;
    // }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards;