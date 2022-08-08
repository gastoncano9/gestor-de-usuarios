import {useState} from 'react';
import useFormulario from './hooks/useFormulario';
import Input from './componentes/Input';
import Card from './componentes/Card';
import Conteiner from './componentes/Conteiner';
import Boton from './componentes/Boton';

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [formulario, cambios, reset] = useFormulario({nombre:'', apellido:'', correo:''});

  const submit = (e) =>
  {
    e.preventDefault();

    setUsuarios([
      ...usuarios,
      formulario
    ]);

    reset();
  }

  console.log(usuarios);

  return (
    <Conteiner>
      <Card>
        <form onSubmit = {submit}>
          <Input
            label = {'Nombre'}
            name = "nombre"
            onChange = {cambios}
            value = {formulario.nombre}
          />

          <Input
            label = {'Apellido'}
            name = "apellido"
            onChange = {cambios}
            value = {formulario.apellido}
          />

          <Input
            label = {'Correo'}
            name = "correo"
            onChange = {cambios}
            value = {formulario.correo}
          />
          <Boton>Enviar</Boton>
        </form>
      </Card>
      <div>
        <ul>
          {usuarios.map(x =>
            <li key = {x.correo}>{`${x.nombre}`} {`${x.apellido}`} {`${x.correo}`}</li>)}
        </ul>
      </div>
    </Conteiner>
  );
}

export default App;
