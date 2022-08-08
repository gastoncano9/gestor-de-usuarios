import '../estilos/Input.css';
//le estamos diciendo que label es aparte
// y que el resto de las propiedades se la dejamos al rest
const Input = ({label, ...rest}) =>
{
    return (
        <div className = 'contenedor-input'>
            <label>{label}</label>
            <input
                {...rest}//aca recibe todas las propiedades 
            />
        </div>
    );
}

export default Input;