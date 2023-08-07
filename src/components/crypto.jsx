import { useState } from "react"
import module from "./crypto.css"


export default function Cryptocur (){
    const [qty,setQty] = useState()
    const data = [
        {
            name : "BITCOIN",
            price : 25000,
           
        },
        {
            name : "DOGE",
            price : 0.07,
           

        },
        {
            name : "RIPPLE",
            price : 0.45,
            
        }
    ]
 
    var CartData = JSON.parse(localStorage.getItem("cart")) || []
    const handlebtn = (item) => {
           
        var obj = {
            name : item.name,
            price : item.price,
            qtydata : qty

        }

        CartData.push(obj)

        localStorage.setItem("cart",JSON.stringify(CartData))
        alert("Add to Cart")
        window.location.reload()

    }
 
     return (
        <div>

            <div className={module.maindiv}>
                {
                    data && data.map((item) => <div  key={item.name}>
                         <div className={module.mapData}>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        </div>
                        <div className={module.btn}>
                             <input type="number" placeholder="Qty" onChange={(e)=> setQty(e.target.value)}/>
                             <button onClick={()=> handlebtn(item)}>Add To Cart</button>
                           
                            
                        </div>
                    </div>)
                }
            </div>

           
        </div>
     )

}