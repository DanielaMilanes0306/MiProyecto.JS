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