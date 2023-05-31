let menu=[
    {
        id:1,
        name:"Burger",//name of product
        price:"R100",//price of product
        img:"https://i.postimg.cc/C19vcJkR/burger.jpg",
    },
    {
        id:2,
        name:"Pizza",//name of product
        price:"R90",//price of product
        img:"https://i.postimg.cc/fbTgyVMR/pizza.jpg",//image of product
    },
    {
        id:3,
        name:"Spagheti & bolognese",//name of product
        price:"R70",//price of product
        img:"https://i.postimg.cc/RCLmWHBc/spaghetti-bolognese-36.jpg",//image of product
    },
    {
        id:4,
        name:"Oreo cake slice",//name of product
        price:"R70",//price of product
        img:"https://i.postimg.cc/qRZ8ZD38/cake.jpg",//image of product
    },
    {
        id:5,
        name:"Milkshake",//name of product
        price:"R70",//price of product
        img:"https://i.postimg.cc/g0sy32ct/milkshake.jpg",//image of product
    },
    {
        id:6,
        name:"Boerworse roll",//name of product
        price:"R70",//price of product
        img:"https://i.postimg.cc/76L39rfH/boerewors-rolls-2.jpg",//image of product
    },
]
let show = document.querySelector(".products");
menu.forEach((item) => {
show.innerHTML += `
<tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img src="${item.img}"></td>
    <td><button><i class="bi bi-plus"></i></button></td>
    <td><button><i class="bi bi-trash3-fill"></i></button></td>
</tr>`
})