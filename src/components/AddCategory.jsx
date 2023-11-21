import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la pagina una vez que enviemos la informacion
        if( inputValue.trim().length <= 1) return; //Validacion para evitar que el nombre sea muy corto

        // setCategories( categories =>  [ inputValue, ...categories ]); //Agregamos nuestra informacion manteniendo lo demas
        onNewCategory( inputValue.trim() )
        setInputValue('');//Esto limpia el imput luego de enviar la informacion del formulario 
    }

    return (
        <form onSubmit={ onSubmit }>
        <input
            typeof="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />

        </form>
    )
}


