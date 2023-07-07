import { useState,useEffect } from "react"

export function Counter(){

    const[contadorUm,setContadorUm] = useState(0);
    const[contadorDois,setContadorDois] = useState(0);
    const[maiorContador,setMaiorContador] = useState(0);

    function retornaMaior(numeroUm,numeroDois){

        if(numeroUm > numeroDois){
            return numeroUm;
        }else{
            return numeroDois;
        }

        useEffect(() => {
         document.title = `clicou ${contadorUm + contadorDois}$vezes`
         setMaiorContador(retornaMaior(contadorUm,contadorDois));
        
         
        }, [contadorUm,contadorDois])

        useEffect(() => {
          
        
          return () => {
            console.log(`contador 1${contadorUm} | contador 2${contadorDois} |maior contador${maiorContador}` )
          }
        },[contadorUm,contadorDois,maiorContador] )

        

    }

    return(
        <div>
            <div>
            <p>contador um{contadorUm}</p>
            <p>contador dois{contadorDois}</p>
            <p>maior contador{maiorContador}</p>
            </div>
            <div>
                <button onClick={()=>setContadorUm(contadorUm + 1)}> contador um</button>
                <br />
                <button onClick={()=>setContadorDois(contadorDois + 2)}>contador dois</button>
            </div>

        </div>
    )
}