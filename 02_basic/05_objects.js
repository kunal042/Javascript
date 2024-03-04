const course ={
    cousename : "js in hindi",
    courseprice : 999,
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

console.log(instructor);