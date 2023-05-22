
// Change hero names a-c = 5*, d-f = 4*
const a = "John", b = "Jane", c = "Alex", d = "Jolene", e = "MC-2", f = "Carol"

// determining what hero is pulled
const wish = {
    five() {
        if(x < 33.3){
            console.log("Hero won:",a)
        } else {
            console.log("Hero won:",b)
        }
        if(x > 66.6){
            console.log("Hero won:",c)
        }
    
    },
    four() {
        if(x < 33.3){
            console.log("Hero won:",d)
        } else {
            console.log("Hero won:",e)
        }
        if(x > 66.3){
            console.log("Hero won:",f)
        }
    },
    three() {

    }
}

let x = Math.floor((Math.random() * 100) + 1);

// choosing what rarity is pulled
// 5*
if(x > 99.1){
    console.log("5 star won")
    wish.five()
}
// 4*
if(x > 80){
    console.log("4 star won")
    wish.four()
}
// 3*
if(x < 80){
    console.log("3 star won")
    wish.three()
}