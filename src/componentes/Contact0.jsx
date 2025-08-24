import React, {useState} from "react";

const Contact0 =() => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    
    const handleSubmit =(e) => {
        e.preventDefault()
        console.log("Enviado",{nombre,email,telefono})
    }

    const handleNombre =(e) =>{
    setNombre(e.target.value)
    }
    const handleEmail =(e) =>{
    setEmail(e.target.value)
    }
    const handleTelefono =(e) =>{
    setTelefono(e.target.value)
    }

    return (
        <div className = "container">
            <h1 className = "mian-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type = "text"
                placeholder="ingrese tu nombre"
                value={nombre}
                onChange={handleNombre}
                />
                <input type = "email"
                placeholder="ingrese tu email"
                value={email}
                onChange={handleEmail}
                />
                <input type = "phone"
                placeholder="ingrese tu telefono"
                value={telefono}
                onChange={handleTelefono}
                />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact0;