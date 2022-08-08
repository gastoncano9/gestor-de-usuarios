import '../estilos/Conteiner.css';

const Conteiner = ({children}) =>
{
    return (
        <div className = "contenedor">
            {children}
        </div>
    );
}

export default Conteiner;