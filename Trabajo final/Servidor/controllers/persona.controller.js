const { response, request }= require('express');
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const agregarPersona = async(req=request, res=response) => {

    const {cedula, nombre, apellido, fecha_cumple, user_id} = req.body;

    const result = await prisma.personas.create({
        data:{
            cedula, 
            nombre, 
            apellido, 
            fecha_cumple, 
            user_id
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        result
    })
}

const mostrarPersonas = async(req=request, res=response) => {

    const personas= await prisma.personas.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        personas
    })
}

const editarPersonas = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos en la proxima sesion"
    })
}

const eliminarPersonas = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos en la proxima sesion"
    })
}

module.exports = {
    agregarPersona,
    mostrarPersonas,
    editarPersonas,
    eliminarPersonas,
}