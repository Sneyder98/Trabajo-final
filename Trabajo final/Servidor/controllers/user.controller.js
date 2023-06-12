const { response, request }= require('express');
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const agregarUsuario = async(req=request, res=response) => {

    const {email, username, password} = req.body;

    const result = await prisma.user.create({
        data:{
            email,
            username,
            password
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

const mostrarUsuarios = async(req=request, res=response) => {

    const usuarios= await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        usuarios
    })
}

const login = async(req=request, res=response) => {

    const {email, password}=req.body.user;

    const usuario= await prisma.user.findMany({
        where: {
            AND: [
                {
                    email: email,
                },
                {
                    password: password,
                }
            ]
        },
      })
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    let respuesta="Este usuario no existe"
    if(usuario[0]){
        
        respuesta=usuario[0];
        
    }

    res.json({
        usuario:respuesta
    })
}

const editarUsuarios = (req=request, res=response) => {
    res.json({
        msg: "para la proxima sesion"
    })
}

const eliminarUsuarios = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos"
    })
}

module.exports = {
    agregarUsuario,
    mostrarUsuarios,
    editarUsuarios,
    eliminarUsuarios,
    login,
}