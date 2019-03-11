const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


//console.log(process.argv);

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=');


/*crearArchivo(base[1])
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));*/