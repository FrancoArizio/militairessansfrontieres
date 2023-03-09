
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

const buttonDelete = document.getElementsByClassName(`button_Delete`);
const deleteButton = () =>{
    for (var i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", (e) => {
            console.log(e.target.id, 'sexo')
            const cart = JSON.parse(localStorage.getItem('cart')).filter((producto)=> producto.id != e.target.id)
            console.log(cart, "sexp")
            localStorage.setItem('cart', JSON.stringify(cart))
            document.getElementById(e.target.id).remove()
            Toastify({
                text: "COURSE REMOVED",
                duration: 1500,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                style: {
                    background: "linear-gradient(to right, #D20E0E, #D20E0E)",
                    color: "black",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            

           /*  courses.map((obj) =>{
                const shoppingCartItem = document.getElementById(e.target)
                shoppingCartItem.remove()
                Toastify({
                    text: "COURSE REMOVED",
                    duration: 1500,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    style: {
                        background: "linear-gradient(to right, #D20E0E, #D20E0E)",
                        color: "black",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            }) */
        })
    }
}

const courses = [course1, course2, course3, course4, course5, course6]

const buttons = document.getElementsByClassName('btn_comprar')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => { comprarProducto(e) });
}

const comprarProducto = (e) => {

    if (JSON.parse(localStorage.getItem('cart'))) {
        const producto = courses.find((course) => course.courseId === e.target.id)
        const cart = [...JSON.parse(localStorage.getItem('cart')), {...producto,id: crypto.randomUUID()}]
        localStorage.setItem('cart', JSON.stringify(cart))
        addItemToCart()
        deleteButton()
        Toastify({
            text: "COURSE ADDED TO CART",
            duration: 1500,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            style: {
                background: "linear-gradient(to right, #FBFF00, #C9D20E)",
                color: "black",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        const producto = courses.find((course) => course.courseId === e.target.id)
        localStorage.setItem('cart', JSON.stringify([{...producto,id: crypto.randomUUID()}]))
        addItemToCart()
        deleteButton()
        Toastify({
            text: "COURSE ADDED TO CART",
            duration: 1500,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            style: {
                background: "linear-gradient(to right, #FBFF00, #C9D20E)",
                color: "black",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}
const shoppingCartContainer = document.querySelector("itemContainer")

function addItemToCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const shoppingCartFila = document.getElementById("itemContainer")
    let fullhtml = ''
    cart.map((producto) => {
        const shoppingCartContent = `
        <div class="row shoppingCartItem" id=${producto.id}>
                    <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto.courseName}
                            </h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${producto.coursePrice}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${producto.courseLength}</p>
                            <button id='${producto.id}' class="btn btn-danger button_Delete">X</button>
                        </div>
                    </div>
                </div >
                `;
        fullhtml = fullhtml + shoppingCartContent


    })
    shoppingCartFila.innerHTML = fullhtml;

}












