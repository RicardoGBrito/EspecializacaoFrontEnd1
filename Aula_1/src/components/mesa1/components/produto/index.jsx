import './style.css'

export function tratarPreco(price){

    
    if(price.toString().length>3){
        
        const stringPrice = price.toString()
        return 'R$ '+stringPrice[0]+'.'+stringPrice[1]+stringPrice[2]+stringPrice[3]+',00'
        
    }

    return 'R$ '+price+',00'
}
export default function Produto(props){
    


    return(
        <div className="container">
            <img className="container-img" src={props.value.images[0]}/>
            <div className="container-content">
                <p className="container-title">{props.value.title} </p>
                <p className="container-category">{props.value.category.toUpperCase()}</p>
                <p className="container-price">{tratarPreco(props.value.price)}</p>
            </div>
        </div>
    )
}