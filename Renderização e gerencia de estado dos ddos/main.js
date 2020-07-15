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

function renderGaleryProduct()
{
    let resultHtml = '';    
    for(let prop in products)
    {
      resultHtml += renderProduct(products[prop]);      
    }    
    return resultHtml;
}
document.querySelector(".store").innerHTML = renderGaleryProduct();






