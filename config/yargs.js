const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripción de la tarea por hacer'
    }
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const opts3 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    }
}


const argv = require('yargs')
    .command('crear', ' crear una nueva actividad', opts)
    .command('actualizar', 'compleata una actividad', opts2)
    .command('borrar', 'borra una actividad', opts3)
    .help()
    .argv;

module.exports = {
    argv
}