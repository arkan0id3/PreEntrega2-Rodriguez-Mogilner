// Consulta la base de datos de mis productos y la renderiza
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { consultarBDD } from "../../utils/funciones.js";
import ItemList from '../ItemList/ItemList.jsx';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    


    useEffect(() => {
        /*
        const consultarDatos = async() => {
            const prods = await consultarBDD('./json/productos.json')
            console.log(prods)
        }
        
        consultarDatos()
        */
        if(idCategoria) {


            consultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const items = ItemList({prods})
                setProductos(items)
                
            })
        }else{
            consultarBDD('./json/productos.json').then(prods => {
                const items = ItemList({prods})
                setProductos(items)
        }   )

        }
        
    },[idCategoria])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
        
    );
}

export default ItemListContainer;
