function course(courseName, coursePrice, courseLength) {
    this.courseName = courseName;
    this.coursePrice = coursePrice;
    this.courseLength = courseLength;
}
let course1 = new course("Basic Training", 2500, "6 Weeks");
let course2 = new course("Operator Training", 2000, "4 Weeks");
let course3 = new course("CQB Training", 1500, "2 Weeks");
let course4 = new course("Artillery Training", 1000, "1 Week");
let course5 = new course("Survival Training", 1800, "2 Weeks");
let course6 = new course("Combat Medic Training", 2200, "4 Weeks");


const courses = [course1, course2, course3, course4, course5, course6]

console.log(courses)
console.log(courses.length)

for (i = 0; i < courses.length; i++) {
    prompt=courseId
    courseId = i
    if ( courseId == courses[i].courseName) {
        console.log(courses[i].id)
    }
}
