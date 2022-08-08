import {useState} from 'react'

const useFormulario = (inicial) =>
{
  const [formulario, setFormulario] = useState(inicial);

  const cambios = (e) =>
  {
    setFormulario(
    {
      ...formulario,
      [e.target.name] : e.target.value
    });
  }

  const reset = () =>
  {
    setFormulario(inicial);
  }

  return [formulario, cambios, reset];
}

export default useFormulario;