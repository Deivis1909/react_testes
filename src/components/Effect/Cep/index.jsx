import { useState,useEffect } from "react"

export function Cep(){
    const[endereco,setEndereco] = useState({});
    const meuCep = "88034001"

    useEffect(() => {
      fetch(`https://viacep.com.br/ws/${meuCep}/json/`)
      .then((response)=>response.json())
      .then((object)=>{
        setEndereco(object);
        console.log("objeto setado");
      })
    },[])
    

    return(
        <div>
            <h1>endereco completo</h1>
            <p>logradouro: {endereco.logradouro}</p>
            <p>complemento: {endereco.complemento}</p>
            <p>bairro: {endereco.bairro} </p>
            <p>cidade: {endereco.localidade}</p>
            
        </div>
    )
}