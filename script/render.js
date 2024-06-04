import { cardComponent } from "../component/cardComponent.js";

let renderArea = document.querySelector("#card-area");

const BASE_URL="http://127.0.0.1:5500/Render%20Card%20JSON/data/products.json"
fetch(BASE_URL).then((res)=>(res.json())).then((data)=>{
    data.map((product)=>{
        renderArea.innerHTML+=cardComponent(product)

    });

})
