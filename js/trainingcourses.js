class course {
    constructor(courseName, coursePrice, courseLength, courseId) {
        this.courseName = courseName;
        this.coursePrice = coursePrice;
        this.courseLength = courseLength;
        this.courseId = courseId;
    }
    taxPriceCalc() {
        return this.coursePrice * 1.21;
    }
}
let course1 = new course("Basic Training", 2500, "6 Weeks", "btnBT");
let course2 = new course("Operator Training", 2000, "4 Weeks", "btnOT");
let course3 = new course("CQB Training", 1500, "2 Weeks", "btnCT");
let course4 = new course("Artillery Training", 1000, "1 Week", "btnAT");
let course5 = new course("Survival Training", 1800, "2 Weeks", "btnCSH");
let course6 = new course("Combat Medic Training", 2200, "4 Weeks", "btnCMT");


const courses = [course1, course2, course3, course4, course5, course6]

// console.log(courses)
// console.log(courses.length)

// alert("These are the courses available, COPY the name that you would like to get more info about \n Basic Training \n Operator Training \n CQB Training \n Artillery Training \n Survival Training \nCombat Medic Training")
// const extract = () => {
//     let namePrompt = prompt('Insert course name');
//     let newObject = courses.find(element => namePrompt === element.courseName)
//     console.log(newObject)
//     if (newObject.courseName === namePrompt) {
//         alert( "Name: " + newObject.courseName +"\n" + "Price: " + newObject.coursePrice + "\n" + "Duration: " + newObject.courseLength)
//     }
// }
// extract();


const buttons = document.getElementsByClassName('btn_comprar')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => { comprarProducto(e) });
}

const comprarProducto = (e) => {

    if (JSON.parse(localStorage.getItem('cart'))) {
        const producto = courses.find((course)=>course.courseId === e.target.id)
        const cart = [...JSON.parse(localStorage.getItem('cart')), producto]
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        const producto = courses.find((course)=>course.courseId === e.target.id)
        localStorage.setItem('cart', JSON.stringify([producto]))
    }

}
console.log()