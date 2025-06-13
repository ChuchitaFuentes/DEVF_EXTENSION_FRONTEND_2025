import './Header.css' /* Se importa el estilo */

export const Header = ({children, title, show}) =>{
    return (
        <header className="header"> {/*Esto es un comentario jsx y es para decir que las clases en react se nombran como className, como palabra reservada */}
            <h1 className="title"> {title|| "Titulo por defecto"} </h1>
            {children}
            {
                show ? <p>Este texto se va a mostrar solo si el prop show es true</p> : <p>how es falso</p> /* Se puede cambiar ? por && si no se quiere dicernir entre dos opciones */
            }
            
        </header>
    )
}