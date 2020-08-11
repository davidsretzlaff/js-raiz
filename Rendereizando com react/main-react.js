

function AppComponent(){
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
    const [carItens,AddProductCar] = React.useState({}); 
    function  addProduct (product){
        
        if(!carItens[product.id])
        {
            AddProductCar({
                ...carItens,
                [product.id] :{
                    ...product,
                    quantity : 1
                }
            })
        }
        else{
            AddProductCar({
                ...carItens,
                [product.id]:{
                    ...product,
                    quantity : ++carItens[product.id].quantity 
                }
            })            
        }
    }
    function  removeProduct (index){
        
        if(carItens[index].quantity <= 1)
        {
            delete carItens[index];
            AddProductCar({ ...carItens });
        }
        else{
            AddProductCar({
                ...carItens,
                [index] : {
                    ...carItens[index],
                    quantity : -- carItens[index].quantity
                }
            })
        }
    }
    return (
        React.createElement(React.Fragment,null,
        React.createElement(RenderGalery,null,products.map(i => React.createElement(RenderItem,{item : i, OnAddProduct: addProduct, key:`product-${i.id}`}))),
        React.createElement(renderCar,{itens:  carItens , OnRemoveProduct: removeProduct}, Object.keys(carItens).map(i => React.createElement(renderCarItem, {index : i , OnRemoveProduct: removeProduct, carItens: carItens, key:`product-${i}`}))) 
        )
    )
}


RenderGalery = ({children}) => {
    return  React.createElement('div',{className:'col-sm-8'},
                React.createElement('div',{className:'row store'},
                    children
                )
            )
}


renderCar = ({itens,children}) => {   
return  React.createElement('div',{className:'col-sm-4'},
            React.createElement('div',{className:'store-car float-right'},
            children,
            React.createElement(renderTotal,{iCarItens : itens}),
            )
        )
}



function renderTotal({iCarItens}){
    total = Object.keys(iCarItens).reduce((acc,i)=>{return acc += iCarItens[i].value * iCarItens[i].quantity},0)
    return React.createElement('div',{className:'car_total mt-2 p3'},`total value: ${total}`);
    
}

renderCarItem = ({index,carItens,OnRemoveProduct}) =>{    
return  React.createElement('div',{className:'row'},
            React.createElement('div',{className:'car'},
                React.createElement('div',{className:'card car_itens'},
                    React.createElement('div',{className:'card-body'},
                        React.createElement('h5',{className:'card-title'}, carItens[index].name),
                        React.createElement('p',{className:'card-text'},`Valor Unitário: R$ ${carItens[index].value} | Quantidade: ${carItens[index].quantity}`),
                        React.createElement('p',{className:'card-text'},`Total: R$ ${carItens[index].value * carItens[index].quantity } `),
                        React.createElement('button',{className:'brn btn-danger -btn-sm', onClick:OnRemoveProduct.bind(null,index) },'Remover'),
                    )
                )
            )
        )
}


RenderItem = ({item,OnAddProduct}) => {
return React.createElement('div',{className:'col-sm-4 mb-3'},
            React.createElement('div',{className:'card'},
                React.createElement('img',{src:"https://lorempixel.com/500/300",className:'card-img-top'},null),
                React.createElement('div',{className:'card-body'},
                    React.createElement('h5',{className:'card-title'},`${item.name}`),
                    React.createElement('small',null,`${item.value}`),
                    React.createElement('p',{className:'card-text'},`${item.description}`),
                    React.createElement('button',{className:'btn btn-primary', onClick:OnAddProduct.bind(null,item)},'Adicionar'),
                ),
            )
        )    
}
ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
  )

