// Assignment # 1
// var itemsArray = [
//     {
//         name: "juice",
//         price: 50,
//         quantity: 3
//     },
//     {
//         name: "cookie",
//         price: 30,
//         quantity: 9
//     },
//     {
//         name: "shirt",
//         price: 880,
//         quantity: 1
//     },
//     {
//         name: "pen",
//         price: 100,
//         quantity: 2
//     }
// ];
// var totalAmount=0;
// for (var i=0; i<itemsArray.length; i++){
//     document.write("The price per "+itemsArray[i].name+" is "+itemsArray[i].price+" and the amount of "+ itemsArray[i].quantity+" " +itemsArray[i].name+"s is "+itemsArray[i].quantity*itemsArray[i].price+"<br/>")
//     totalAmount += itemsArray[i].quantity * itemsArray[i].price;
//     console.log(totalAmount)
// }
// document.write("The total Amount of all items is "+ totalAmount);

// Assignment # 2

var bioData = {
    name: "Tabish Ismail",
    email: "tabish@gmail.com",
    password: "12345",
    age: "30",
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
}

console.log("age" in bioData,"country" in bioData,"firstName" in bioData,"lastName" in bioData);
