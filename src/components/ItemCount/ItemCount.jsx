import React from 'react';
import { useState } from 'react';

const ItemCount = ({ValInicial, stock}) => {
    const [contador, setContador] = useState(1) // Defino un estado con valor inicial 1


    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)  
    return (
        <div>
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            {contador}
            <button className='btn btn-dark' onClick={() => sumar ()}>+</button>
        </div>
    );
}

export default ItemCount;
