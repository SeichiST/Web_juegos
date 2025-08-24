import React, {useState} from "react";
import { useForm } from "react-hook-form";

const Contacto =() => {
    const {register, handleSubmit} = useForm()

    const enviar = (data) => {
        console.log(data)
    }

    return(
        <div className="contenedor">
            <h1 className = "mian-title">Contáctanos</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <label htmlFor="nombre">
                    Nombre
                </label>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <label htmlFor="email">
                    Correo
                </label>
                <input type="text" placeholder="Ingresa tu email" {...register("email")} />
                <label htmlFor="telefono">
                    Teléfono
                </label>
                <input type="text" placeholder="Ingresa tu teléfono" {...register("telefono")} />
                <label htmlFor="mensaje">
                    Mensaje
                </label>
                <textarea placeholder={"ingrese el mensaje\nMáximo 200 caracteres"}  
                className="Mensaje" {...register("mensaje")} maxLength={200} />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto