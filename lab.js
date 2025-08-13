class Especie {
    constructor(raza, especie) {
        this._raza = raza;
        this._especie = especie;
    }

    get raza() { return this._raza }
    set raza(v) { this._raza = v }

    get especie() { return this._especie }
    set especie(v) { this._especie = v }
}

class CentroVeterinario {
    constructor(id, nombre, nit, tipoPersona, representante, direccion, correo, horario, contacto1, cargo1, telefono1, contacto2, cargo2, telefono2) {
        this._id = id;
        this._nombre = nombre;
        this._nit = nit;
        this._tipoPersona = tipoPersona;
        this._representante = representante;
        this._direccion = direccion;
        this._correo = correo;
        this._horario = horario;
        this._contacto1 = contacto1;
        this._cargo1 = cargo1;
        this._telefono1 = telefono1;
        this._contacto2 = contacto2;
        this._cargo2 = cargo2;
        this._telefono2 = telefono2;
    }
    get id() { return this._id }
    set id(v) { this._id = v }
    get nombre() { return this._nombre }
    set nombre(v) { this._nombre = v }
    get nit() { return this._nit }
    set nit(v) { this._nit = v }
    get tipoPersona() { return this._tipoPersona }
    set tipoPersona(v) { this._tipoPersona = v }
    get representante() { return this._representante }
    set representante(v) { this._representante = v }
    get direccion() { return this._direccion }
    set direccion(v) { this._direccion = v }
    get correo() { return this._correo }
    set correo(v) { this._correo = v }
    get horario() { return this._horario }
    set horario(v) { this._horario = v }
    get contacto1() { return this._contacto1 }
    set contacto1(v) { this._contacto1 = v }
    get cargo1() { return this._cargo1 }
    set cargo1(v) { this._cargo1 = v }
    get telefono1() { return this._telefono1 }
    set telefono1(v) { this._telefono1 = v }
    get contacto2() { return this._contacto2 }
    set contacto2(v) { this._contacto2 = v }
    get cargo2() { return this._cargo2 }
    set cargo2(v) { this._cargo2 = v }
    get telefono2() { return this._telefono2 }
    set telefono2(v) { this._telefono2 = v }
}

class Parametro {
    constructor(id, examen, nombreParametro, unidades, refCaninos, refFelinos, refAviar, refLagomorfo, refBovino, refEquino) {
        this._id = id;
        this._examen = examen;
        this._nombreParametro = nombreParametro;
        this._unidades = unidades;
        this._refCaninos = refCaninos;
        this._refFelinos = refFelinos;
        this._refAviar = refAviar;
        this._refLagomorfo = refLagomorfo;
        this._refBovino = refBovino;
        this._refEquino = refEquino;
    }
    get id() { return this._id }
    set id(v) { this._id = v }
    get examen() { return this._examen }
    set examen(v) { this._examen = v }
    get nombreParametro() { return this._nombreParametro }
    set nombreParametro(v) { this._nombreParametro = v }
    get unidades() { return this._unidades }
    set unidades(v) { this._unidades = v }
    get refCaninos() { return this._refCaninos }
    set refCaninos(v) { this._refCaninos = v }
    get refFelinos() { return this._refFelinos }
    set refFelinos(v) { this._refFelinos = v }
    get refAviar() { return this._refAviar }
    set refAviar(v) { this._refAviar = v }
    get refLagomorfo() { return this._refLagomorfo }
    set refLagomorfo(v) { this._refLagomorfo = v }
    get refBovino() { return this._refBovino }
    set refBovino(v) { this._refBovino = v }
    get refEquino() { return this._refEquino }
    set refEquino(v) { this._refEquino = v }
}

class Examen {
    constructor(id, nombre, tipoMuestra, estabilidad, estabilidadCentrifugada, tiempoReporte, laboratorio) {
        this._id = id;
        this._nombre = nombre;
        this._tipoMuestra = tipoMuestra;
        this._estabilidad = estabilidad;
        this._estabilidadCentrifugada = estabilidadCentrifugada;
        this._tiempoReporte = tiempoReporte;
        this._laboratorio = laboratorio;
    }
    get id() { return this._id }
    set id(v) { this._id = v }
    get nombre() { return this._nombre }
    set nombre(v) { this._nombre = v }
    get tipoMuestra() { return this._tipoMuestra }
    set tipoMuestra(v) { this._tipoMuestra = v }
    get estabilidad() { return this._estabilidad }
    set estabilidad(v) { this._estabilidad = v }
    get estabilidadCentrifugada() { return this._estabilidadCentrifugada }
    set estabilidadCentrifugada(v) { this._estabilidadCentrifugada = v }
    get tiempoReporte() { return this._tiempoReporte }
    set tiempoReporte(v) { this._tiempoReporte = v }
    get laboratorio() { return this._laboratorio }
    set laboratorio(v) { this._laboratorio = v }
}

class Paciente {
    constructor(codigo, nombre, idCentro, historiaClinica, medico, especie, raza, edad, propietario, observaciones, urgencia) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._idCentro = idCentro;
        this._historiaClinica = historiaClinica;
        this._medico = medico;
        this._especie = especie;
        this._raza = raza;
        this._edad = edad;
        this._propietario = propietario;
        this._observaciones = observaciones;
        this._urgencia = urgencia;
    }
    get codigo() { return this._codigo }
    set codigo(v) { this._codigo = v }
    get nombre() { return this._nombre }
    set nombre(v) { this._nombre = v }
    get idCentro() { return this._idCentro }
    set idCentro(v) { this._idCentro = v }
    get historiaClinica() { return this._historiaClinica }
    set historiaClinica(v) { this._historiaClinica = v }
    get medico() { return this._medico }
    set medico(v) { this._medico = v }
    get especie() { return this._especie }
    set especie(v) { this._especie = v }
    get raza() { return this._raza }
    set raza(v) { this._raza = v }
    get edad() { return this._edad }
    set edad(v) { this._edad = v }
    get propietario() { return this._propietario }
    set propietario(v) { this._propietario = v }
    get observaciones() { return this._observaciones }
    set observaciones(v) { this._observaciones = v }
    get urgencia() { return this._urgencia }
    set urgencia(v) { this._urgencia = v }
}


let razas = [];
let centrosVeterinarios = [];
let parametros = [];
let examenes = [];
let pacientes = [];

function agregarRaza() {
    console.log("Ingrese los datos para una nueva raza:");
    const raza = prompt("Raza: ");
    const especie = prompt("Especie: ");
    const nuevaRaza = new Especie(raza, especie);
    razas.push(nuevaRaza);
    console.log('Nueva raza agregada:', nuevaRaza);
}


function mostrarRazas() {
    console.log('Lista de Razas:');
    razas.forEach((raza, index) => {
        console.log(`${index + 1}. ${raza.raza} (${raza.especie})`);
    });
}


function agregarCentroVeterinario() {
    console.log("Ingrese los datos para un nuevo centro veterinario:");
    const id = parseInt(prompt("ID: "));
    const nombre = prompt("Nombre: ");
    const nit = prompt("NIT: ");
    const tipoPersona = prompt("Tipo de Persona: ");
    const representante = prompt("Representante Legal: ");
    const direccion = prompt("Dirección: ");
    const correo = prompt("Correo Electrónico: ");
    const horario = prompt("Horario de Atención: ");
    const contacto1 = prompt("Contacto 1: ");
    const cargo1 = prompt("Cargo 1: ");
    const telefono1 = prompt("Teléfono 1: ");
    const contacto2 = prompt("Contacto 2: ");
    const cargo2 = prompt("Cargo 2: ");
    const telefono2 = prompt("Teléfono 2: ");

    const nuevoCentro = new CentroVeterinario(
        id,
        nombre,
        nit,
        tipoPersona,
        representante,
        direccion,
        correo,
        horario,
        contacto1,
        cargo1,
        telefono1,
        contacto2,
        cargo2,
        telefono2
    );
    centrosVeterinarios.push(nuevoCentro);
    console.log('Nuevo centro veterinario agregado:', nuevoCentro);
}


function mostrarCentrosVeterinarios() {
    console.log('Lista de Centros Veterinarios:');
    centrosVeterinarios.forEach((centro, index) => {
        console.log(`${index + 1}. ${centro.nombre}`);
    });
}


function agregarParametro() {
    console.log("Ingrese los datos para un nuevo parámetro:");
    const id = parseInt(prompt("ID: "));
    const examen = prompt("Examen: ");
    const nombreParametro = prompt("Nombre del Parámetro: ");
    const unidades = prompt("Unidades: ");
    const refCaninos = prompt("Referencia Caninos: ");
    const refFelinos = prompt("Referencia Felinos: ");
    const refAviar = prompt("Referencia Aviar: ");
    const refLagomorfo = prompt("Referencia Lagomorfo: ");
    const refBovino = prompt("Referencia Bovino: ");
    const refEquino = prompt("Referencia Equino: ");

    const nuevoParametro = new Parametro(
        id,
        examen,
        nombreParametro,
        unidades,
        refCaninos,
        refFelinos,
        refAviar,
        refLagomorfo,
        refBovino,
        refEquino
    );
    parametros.push(nuevoParametro);
    console.log('Nuevo parámetro agregado:', nuevoParametro);
}


function mostrarParametros() {
    console.log('Lista de Parámetros:');
    parametros.forEach((parametro, index) => {
        console.log(`${index + 1}. ${parametro.nombreParametro} (${parametro.examen})`);
    });
}


function agregarExamen() {
    console.log("Ingrese los datos para un nuevo examen:");
    const id = parseInt(prompt("ID: "));
    const nombre = prompt("Nombre: ");
    const tipoMuestra = prompt("Tipo de Muestra: ");
    const estabilidad = prompt("Estabilidad: ");
    const estabilidadCentrifugada = prompt("Estabilidad Centrifugada: ");
    const tiempoReporte = prompt("Tiempo de Reporte: ");
    const laboratorio = prompt("Laboratorio: ");

    const nuevoExamen = new Examen(
        id,
        nombre,
        tipoMuestra,
        estabilidad,
        estabilidadCentrifugada,
        tiempoReporte,
        laboratorio
    );
    examenes.push(nuevoExamen);
    console.log('Nuevo examen agregado:', nuevoExamen);
}


function mostrarExamenes() {
    console.log('Lista de Exámenes:');
    examenes.forEach((examen, index) => {
        console.log(`${index + 1}. ${examen.nombre}`);
    });
}


function agregarPaciente() {
    console.log("Ingrese los datos para un nuevo paciente:");
    const codigo = prompt("Código del Paciente: ");
    const nombre = prompt("Nombre del Paciente: ");
    const idCentro = parseInt(prompt("ID del Centro Veterinario: "));
    const historiaClinica = prompt("Historia Clínica: ");
    const medico = prompt("Médico Veterinario: ");
    const especie = prompt("Especie: ");
    const raza = prompt("Raza: ");
    const edad = parseInt(prompt("Edad en Años: "));
    const propietario = prompt("Propietario: ");
    const observaciones = prompt("Observaciones: ");
    const urgencia = prompt("Urgencia Vital (Sí/No): ");

    const nuevoPaciente = new Paciente(
        codigo,
        nombre,
        idCentro,
        historiaClinica,
        medico,
        especie,
        raza,
        edad,
        propietario,
        observaciones,
        urgencia
    );
    pacientes.push(nuevoPaciente);
    console.log('Nuevo paciente agregado:', nuevoPaciente);
}


function mostrarPacientes() {
    console.log('Lista de Pacientes:');
    pacientes.forEach((paciente, index) => {
        console.log(`${index + 1}. ${paciente.nombre} (${paciente.especie} - ${paciente.raza})`);
    });
}


function mostrarMenu() {
    console.log("\nMenú Principal:");
    console.log("1. Agregar Raza");
    console.log("2. Mostrar Razas");
    console.log("3. Agregar Centro Veterinario");
    console.log("4. Mostrar Centros Veterinarios");
    console.log("5. Agregar Parámetro");
    console.log("6. Mostrar Parámetros");
    console.log("7. Agregar Examen");
    console.log("8. Mostrar Exámenes");
    console.log("9. Agregar Paciente");
    console.log("10. Mostrar Pacientes");
    console.log("0. Salir");

    
    let menuconsola = [" 1. Agregar Raza"," 2. Mostrar Razas"," 3. Agregar Centro Veterinario"," 4. Mostrar Centros Veterinarios"," 5. Agregar Parámetro"," 6. Mostrar Parámetros"," 7. Agregar Examen"," 8. Mostrar Exámenes"," 9. Agregar Paciente ","10. Mostrar Pacientes"," 0. Salir "];
    menuconsola.sort();
    alert("Presione F12 para abrir consola. Presione el boton OK y seleccione una opción:  ")
 
    const opcion = parseInt(prompt(menuconsola));


    switch (opcion) {
        case 1:
            agregarRaza();
            break;
        case 2:
            mostrarRazas();
            break;
        case 3:
            agregarCentroVeterinario();
            break;
        case 4:
            mostrarCentrosVeterinarios();
            break;
        case 5:
            agregarParametro();
            break;
        case 6:
            mostrarParametros();
            break;
        case 7:
            agregarExamen();
            break;
        case 8:
            mostrarExamenes();
            break;
        case 9:
            agregarPaciente();
            break;
        case 10:
            mostrarPacientes();
            break;
        case 0:
            console.log("Saliendo del sistema...");
            return false;
        default:
            console.log("Opción no válida. Por favor, intente nuevamente.");
    }

    return true;
}


function main() {
    let continuar = true;

    while (continuar) {
        continuar = mostrarMenu();
    }
}


main();

