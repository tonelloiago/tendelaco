import { useState } from "react";
import { TextField } from "@mui/material";

export function Button() {

    //Inicializa o estado com 0
    const [counter, setCounter] = useState(0);  //Retorna um array de duas posicoes

    //Imutabilidade: no react a variavel com estado nao é atualizada, mas sim recriada com o novo valor

    function increment() {

        setCounter(counter + 1);
        console.log(counter);

    }

    
    function decrement() {

        setCounter(counter - 1);
        console.log(counter);

    }

    return (

        <div>

        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />


        </div>
    );
};

//named export