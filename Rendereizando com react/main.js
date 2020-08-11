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
   
}


function renderProduct (product,index) 
{
    return `<div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card">
                        <img src="https://lorempixel.com/500/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <small>Valor: R$${product.value}</small>
                            <p class="card-text">${product.description}</p>
                            <button data-add-index="${index}" class="btn btn-primary btn-add">Adicionar</button>
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
                        <button data-product-id="${product.id}" class="btn btn-danger btn-sm btn-remove">Remover</button>
                    </div>
                </div>
            </div>`;
}
function renderyGaleryProductCar(){
    let html = '';
    for(let id in car_Products){
       html += renderProductCar(car_Products[id]);
    };
    document.querySelector(".store-car").innerHTML = html;
}

function renderGaleryProduct()
{
    let html = '';
    products.map((i, ind) => {html += renderProduct(i,ind); }).join('');
    return html;
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
    document.querySelector(".car_total").innerHTML =`R$<strong> ${value}</strong>`;
}

document.querySelector(".store").innerHTML = renderGaleryProduct();

document.body.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('btn-add')){
        const index = element.getAttribute('data-add-index');
        const product = products[index];
        if(!car_Products[product.id])
        {
            car_Products[product.id] = product;
            car_Products[product.id].quantity = 0;
        }
            ++car_Products[product.id].quantity;
    }
    else if(element.classList.contains('btn-remove')){
        const productId = element.getAttribute('data-product-id');
        if(car_Products[productId].quantity <= 1 ){
            delete car_Products[productId];
        } else{
            --car_Products[productId].quantity;
        }
    }
    renderyGaleryProductCar();
    addTotal();
});



