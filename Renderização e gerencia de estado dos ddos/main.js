const products =[
    {
        id : 1,
        name: "shorts",
        description: "summer shorts",
        value: 300
    },
    {
        id : 2,
        name: "jacket",
        description: "jacket for winter",
        value: 400
    },
    {
        id : 3,
        name: "slipper",
        description: "white slipper number 42",
        value: 20
    },
    {
        id : 4,
        name: "sneakers",
        description: "allstar number 42",
        value: 150
    }
]
const car_Products ={
    1 : {
        id : 1,
        name: "shorts",
        description: "summer shorts",
        value: 300,
        quantity : 2
    },
    2:{
        id : 2,
        name: "jacket",
        description: "jacket for winter",
        value: 400,
        quantity: 1
    }
}


function renderProduct (product) 
{
    return `<div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card">
                        <img src="https://lorempixel.com/500/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <small>Valor: R$${product.value}</small>
                            <p class="card-text">${product.description}</p>
                            <button data-add-index="${product.id}" class="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>`;
}

function renderProductCar(product)
{   
    return `<div class="car">
                <div class="card car_itens">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>                        
                        <p class="card-text">Preço Unidade : R$${product.value} | Quantidade: ${product.quantity} </p>
                        <p class="cardt-text">Valor: R$${product.value * product.quantity} </p>
                        <button class="btn btn-danger btn-sm">Remover</button>
                    </div>
                </div>
            </div>`;
}
function renderyGaleryProductCar(){
    let html = '';
    for(let id in car_Products){
       html += renderProductCar(car_Products[id]);
    };
    return html;
}

function renderGaleryProduct()
{
    return products.reduce((result, index) => (result += renderProduct(index)),'');
}

function addTotal()
{
    let totalAmount = 0;
    for(let i in car_Products)
    {
        totalAmount += car_Products[i].value * car_Products[i].quantity;
    }
    return renderTotal(totalAmount);
}
function renderTotal(value)
{
    return `R$<strong> ${value}</strong>`;
}
document.querySelector(".store").innerHTML = renderGaleryProduct();
document.querySelector(".store-car").innerHTML = renderyGaleryProductCar();
document.querySelector(".car_total").innerHTML = addTotal();





