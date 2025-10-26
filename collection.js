                
// Product search functionality 
var productContainer = document.querySelector(".product__cards")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll(".product__card")

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase()

    productList.forEach((card) => {
        var productname = card.querySelector("h3").textContent
        if(productname.toUpperCase().indexOf(enteredValue) < 0){
            card.style.display = "none"
        } else {
            card.style.display = "block"
        }
    })
})


// Checkbox Filter Functionality
var checkboxes = document.getElementsByName("tags")
var productCards = document.querySelectorAll(".product__card")

Array.from(checkboxes).forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        // Get all checked values
        let checkedValues = Array.from(checkboxes)
            .filter((chk) => chk.checked)
            .map((chk) => chk.value.toLowerCase())

        // Loop through all products
        productCards.forEach((card) => {
            let name = card.querySelector("h3").textContent.toLowerCase()

            // Show card if it matches any checked value, or show all if none checked
            if (checkedValues.length === 0 || checkedValues.some((val) => name.includes(val))) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }
        })
    })
})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})
