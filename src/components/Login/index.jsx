import React from 'react'

import './style.css'
import { useRef } from 'react';

export function Login(props){

    console.log("pagina atulizada");
    const emailInput = useRef();
    const senhaInput = useRef();

    function handleSubmit(event){
        event.preventDefault();
        const data = {
            email:emailInput.current?.value,
            senha:senhaInput.current?.value
        }
        console.log(data);

    }
  return (
    <div className="login">
        <div className="logincontainer">
            <h1>tela de login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                     //onChange={(event)=>setEmail(event.target.value)} 
                     ref={emailInput}  
                     type="email"
                        id="credencial"
                        placeholder="digite seu email"
                >
                    </input>
                </label>
                <label>
                    <input
                    //onChange={(event)=>setSenha(event.target.value)}
                    ref={senhaInput}
                    type="password"
                    id="senha"
                    placeholder="digite sua senha"
                    >
                    </input>
                </label>

                <input type="submit" value="entrar"></input>


        </form>

        </div>
    </div>
  )
}

