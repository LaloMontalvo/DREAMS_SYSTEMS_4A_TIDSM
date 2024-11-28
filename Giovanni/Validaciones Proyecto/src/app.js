// src/app.js

// VALIDACIONES PARA CLIENTES

/**
 * Valida el nombre completo.
 * @param {string} nombre - El nombre completo a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreCliente(nombre) {
    if (!nombre.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (nombre.length < 3) {
        return 'El nombre debe tener al menos 3 caracteres.';
    }
    if (nombre.length > 100) {
        return 'El nombre no debe exceder los 100 caracteres.';
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]+$/.test(nombre)) {
        return 'El nombre solo debe contener letras y espacios.';
    }
    if (/ {2,}/.test(nombre)) {
        return 'El nombre no debe contener espacios consecutivos.';
    }
    return 'Válido';
}

/**
 * Valida el número de teléfono.
 * @param {string} telefono - El número de teléfono a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarTelefonoCliente(telefono) {
    if (!telefono.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^\+?\d{10,15}$/.test(telefono.replace(/\s+/g, ''))) {
        return 'El número de teléfono debe tener entre 10 y 15 dígitos.';
    }
    return 'Válido';
}

//VALIDACIONES PARA EMPLEADOS
// src/app.js

/**
 * Valida la clave de empleado.
 * @param {string} clave - La clave de empleado a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarClaveEmpleado(clave) {
    if (!clave.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^[A-Z]{4}\d{3}$/.test(clave)) {
        return 'La clave debe tener 4 letras mayúsculas seguidas de 3 números.';
    }
    return 'Válido';
}

/**
 * Valida el nombre completo.
 * @param {string} nombreCompleto - El nombre completo a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreEmpleado(nombreCompleto) {
    if (!nombreCompleto.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (nombreCompleto.length < 3) {
        return 'El nombre debe tener al menos 3 caracteres.';
    }
    if (nombreCompleto.length > 150) {
        return 'El nombre no debe exceder los 150 caracteres.';
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]+$/.test(nombreCompleto)) {
        return 'El nombre solo debe contener letras y espacios.';
    }
    return 'Válido';
}

/**
 * Valida la fecha de nacimiento.
 * @param {string} fecha - La fecha de nacimiento a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarFechaNacimientoEmpleado(fecha) {
    if (!fecha.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^\d{2}-\d{2}-\d{4}$/.test(fecha)) {
        return 'La fecha debe estar en formato dd-mm-aaaa.';
    }
    const [dia, mes, anio] = fecha.split('-').map(Number);
    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return 'La fecha contiene valores inválidos.';
    }
    return 'Válido';
}

/**
 * Valida el número de teléfono.
 * @param {string} telefono - El número de teléfono a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarTelefonoEmpleado(telefono) {
    if (!telefono.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^\+?\d{10,15}$/.test(telefono.replace(/\s+/g, ''))) {
        return 'El número de teléfono debe tener entre 10 y 15 dígitos.';
    }
    return 'Válido';
}
// VALIDACIONES PARA USUARIOS

/**
 * Valida el nombre de usuario.
 * @param {string} nombreUsuario - El nombre de usuario a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreUsuario(nombreUsuario) {
    if (!nombreUsuario.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (nombreUsuario.length < 5) {
        return 'El nombre de usuario debe tener al menos 5 caracteres.';
    }
    if (nombreUsuario.length > 20) {
        return 'El nombre de usuario no debe exceder los 20 caracteres.';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(nombreUsuario)) {
        return 'El nombre de usuario solo puede contener letras, números y guiones bajos.';
    }
    return 'Válido';
}

/**
 * Valida la contraseña.
 * @param {string} contrasena - La contraseña a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarContrasenaUsuario(contrasena) {
    if (!contrasena.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (contrasena.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (!/[A-Z]/.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra mayúscula.';
    }
    if (!/[a-z]/.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra minúscula.';
    }
    if (!/\d/.test(contrasena)) {
        return 'La contraseña debe contener al menos un número.';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
        return 'La contraseña debe contener al menos un carácter especial.';
    }
    return 'Válido';
}

//VALIDACIONES PARA PRODUCTOS

/**
 * Valida el nombre del producto.
 * @param {string} nombreProducto - El nombre del producto a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreProducto(nombreProducto) {
    if (!nombreProducto.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (nombreProducto.length < 3) {
        return 'El nombre del producto debe tener al menos 3 caracteres.';
    }
    return 'Válido';
}

/**
 * Valida el código del producto (letras y números).
 * @param {string} codigoProducto - El código del producto a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarCodigoProducto(codigoProducto) {
    if (!codigoProducto.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^[A-Za-z0-9]+$/.test(codigoProducto)) {
        return 'El código del producto solo debe contener letras y números.';
    }
    if (codigoProducto.length < 6 || codigoProducto.length > 12) {
        return 'El código del producto debe tener entre 6 y 12 caracteres.';
    }
    return 'Válido';
}

/**
 * Valida la descripción del producto.
 * @param {string} descripcion - La descripción del producto a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarDescripcionProducto(descripcion) {
    if (descripcion && descripcion.length > 200) {
        return 'La descripción no debe exceder los 200 caracteres.';
    }
    return 'Válido';
}

/**
 * Valida el precio por unidad.
 * @param {number} precio - El precio del producto a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarPrecioProducto(precio) {
    if (isNaN(precio) || precio <= 0) {
        return 'El precio debe ser un número positivo.';
    }
    if (!/^(\d+(\.\d{1,2})?)$/.test(precio.toString())) {
        return 'El precio debe tener hasta dos decimales.';
    }
    return 'Válido';
}

//VALIDACIONES PARA VENTAS

// VALIDACIONES PARA VENTAS

/**
 * Valida el número de venta (debe contener letras y números).
 * @param {string} numeroVenta - El número de venta a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNumeroVenta(numeroVenta) {
    if (!numeroVenta.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!/^[A-Za-z0-9]+$/.test(numeroVenta)) {
        return 'El número de venta solo debe contener letras y números.';
    }
    if (numeroVenta.length < 6 || numeroVenta.length > 12) {
        return 'El número de venta debe tener entre 6 y 12 caracteres.';
    }
    return 'Válido';
}

/**
 * Valida el tipo de venta (solo puede ser "Papelería" o "Ciber").
 * @param {string} tipoVenta - El tipo de venta a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarTipoVenta(tipoVenta) {
    const tiposValidos = ['Papelería', 'Ciber'];
    if (!tipoVenta.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (!tiposValidos.includes(tipoVenta)) {
        return 'El tipo de venta debe ser "Papelería" o "Ciber".';
    }
    return 'Válido';
}

// VALIDACIONES PARA PROVEEDORES

/**
 * Valida el nombre del proveedor (debe tener al menos 3 caracteres).
 * @param {string} nombreProveedor - El nombre del proveedor a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreProveedor(nombreProveedor) {
    if (!nombreProveedor.trim()) {
        return 'Este campo es obligatorio.';
    }
    if (nombreProveedor.length < 3) {
        return 'El nombre del proveedor debe tener al menos 3 caracteres.';
    }
    return 'Válido';
}

/**
 * Valida el número telefónico del proveedor (formato: XXX-XXX-XXXX).
 * @param {string} telefonoProveedor - El número telefónico a validar.
 * @returns {string} - Mensaje de validación.
 */
function validarTelefonoProveedor(telefonoProveedor) {
    if (!telefonoProveedor.trim()) {
        return 'Este campo es obligatorio.';
    }
    const regexTelefono = /^\d{3}-\d{3}-\d{4}$/;
    if (!regexTelefono.test(telefonoProveedor)) {
        return 'El número telefónico debe tener el formato XXX-XXX-XXXX.';
    }
    return 'Válido';
}

// VALIDACIONES PARA RENTAS

/**
 * Valida el tiempo en minutos.
 * @param {number} tiempo - El tiempo en minutos.
 * @returns {string} - Mensaje de validación.
 */
function validarTiempo(tiempo) {
    if (isNaN(tiempo) || tiempo <= 0) {
        return 'El tiempo debe ser un número mayor a 0.';
    }
    return 'Válido';
}

/**
 * Valida el precio total basado en el tiempo.
 * El precio por hora es de 8 MXN.
 * @param {number} tiempo - El tiempo en minutos.
 * @returns {string} - Mensaje de validación.
 */
function validarPrecioPorHora(tiempo) {
    const precioPorHora = 8;
    const horas = tiempo / 60;
    const precioTotal = horas * precioPorHora;
    if (isNaN(precioTotal) || precioTotal <= 0) {
        return 'El precio es inválido.';
    }
    return `Válido. El precio por ${horas} hora(s) es ${precioTotal} MXN.`;
}

// VALIDACIONES PARA EL FORMULARIO DE LOGIN
/**
 * Valida el formato del correo electrónico.
 * Debe tener al menos un carácter antes y después del @, y un dominio.
 * @param {string} correo - El correo electrónico.
 * @returns {string} - Mensaje de validación.
 */
function validarCorreoLogin(correo) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        return 'El correo debe tener el formato correcto (ejemplo@dominio.com).';
    }
    return 'Válido';
}

/**
 * Valida la contraseña.
 * La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.
 * @param {string} contrasena - La contraseña.
 * @returns {string} - Mensaje de validación.
 */
function validarContrasenaLogin(contrasena) {
    const regexContrasena = /^[a-zA-Z0-9]{8,12}$/;
    if (!regexContrasena.test(contrasena)) {
        return 'La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.';
    }
    return 'Válido';
}

/**
 * Valida el registro con Google.
 * El correo debe ser válido y existir en la base de datos, y la contraseña debe ser válida.
 * Además, no puede haber campos vacíos.
 * @param {string} correo - El correo electrónico.
 * @param {string} contrasena - La contraseña.
 * @returns {string} - Mensaje de validación.
 */
function validarRegistroGoogle(correo, contrasena) {
    // Validar que los campos no estén vacíos
    if (!correo || !contrasena) {
        return 'El correo y la contraseña no pueden estar vacíos.';
    }

    // Simulamos un chequeo de correo y contraseña en la base de datos.
    const correosExistentes = ['usuario1@dominio.com', 'usuario2@dominio.com']; // Simulación
    if (!correosExistentes.includes(correo)) {
        return 'El correo no está registrado.';
    }

    return validarContrasenaLogin(contrasena);
}

//VALIDACIONES PARA REGISTRO EN LA APP

/**
 * Valida el Nombre, Apellido Paterno y Apellido Materno.
 * Asegura que no estén vacíos, que no tengan números o símbolos,
 * que no tengan espacios al inicio o al final, y que no contengan múltiples espacios seguidos.
 * @param {string} campo - El nombre, apellido paterno o apellido materno.
 * @param {string} tipo - Tipo de campo: 'nombre', 'apellidoPaterno', 'apellidoMaterno'.
 * @returns {string} - Mensaje de validación.
 */
function validarNombreApellido(campo, tipo) {
    if (!campo.trim()) {
        return `El campo ${tipo} no puede estar vacío.`;
    }

    // Eliminar espacios al inicio y al final
    campo = campo.trim();

    // Verificar si el campo tiene un mínimo de 2 caracteres
    if (campo.length < 2) {
        return `El ${tipo} debe tener al menos 2 caracteres.`;
    }

    // Verificar si el campo contiene solo letras (sin números ni símbolos)
    const regexLetras = /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/;
    if (!regexLetras.test(campo)) {
        return `El ${tipo} solo puede contener letras y espacios.`;
    }

    // Verificar si hay múltiples espacios seguidos
    const regexEspacios = /\s{2,}/;
    if (regexEspacios.test(campo)) {
        return `El ${tipo} no puede contener múltiples espacios seguidos.`;
    }

    return 'Válido';
}

// VALIDACIONES PARA EL FORMULARIO DE PAGO DE STRIPE (Tarjeta de Crédito/Débito)
const validator = require('validator');

/**
 * Valida el número de tarjeta utilizando el algoritmo de Luhn.
 * @param {string} tarjeta - El número de la tarjeta de crédito/débito.
 * @returns {string} - Mensaje de validación.
 */
function validarNumeroTarjeta(tarjeta) {
    if (!validator.isCreditCard(tarjeta)) {
        return 'Número de tarjeta no válido.';
    }
    return 'Válido';
}

/**
 * Valida la fecha de vencimiento de la tarjeta (MM/AA).
 * @param {string} fecha - La fecha de vencimiento (MM/AA).
 * @returns {string} - Mensaje de validación.
 */
function validarFechaVencimiento(fecha) {
    const [mes, anio] = fecha.split('/');
    const fechaActual = new Date();
    const fechaVencimiento = new Date(`20${anio}-${mes}-01`); // Fecha del primer día del mes

    // Verificar que el formato sea válido
    if (!validator.isDate(fecha, { format: 'MM/YY', strictMode: true })) {
        return 'La tarjeta ya ha vencido, no es válida.';
    }

    // Verificar si la tarjeta ha caducado
    if (fechaVencimiento < fechaActual) {
        return 'La tarjeta ha caducado.';
    }

    // Si la fecha es válida y no ha caducado
    return 'Válido';
}
/**
 * Valida el código de seguridad (CVC).
 * @param {string} cvc - El código CVC de la tarjeta.
 * @returns {string} - Mensaje de validación.
 */
function validarCVC(cvc) {
    if (!validator.isLength(cvc, { min: 3, max: 4 })) {
        return 'El código CVC debe tener 3 o 4 dígitos.';
    }
    return 'Válido';
}

/**
 * Valida el código postal.
 * @param {string} codigoPostal - El código postal (de 5 dígitos).
 * @returns {string} - Mensaje de validación.
 */
function validarCodigoPostal(codigoPostal) {
    // Verifica que el código postal sea un número de 5 dígitos
    const regexCodigoPostal = /^[0-9]{5}$/;
    if (!regexCodigoPostal.test(codigoPostal)) {
        return 'El código postal debe contener 5 dígitos numéricos.';
    }
    return 'Válido';
}


module.exports = {validarNombreCliente, validarTelefonoCliente, validarClaveEmpleado,
    validarNombreEmpleado, validarFechaNacimientoEmpleado, validarTelefonoEmpleado, validarNombreUsuario,
    validarContrasenaUsuario, validarNombreProducto, validarCodigoProducto, validarDescripcionProducto,
    validarPrecioProducto, validarNumeroVenta, validarTipoVenta, validarNombreProveedor,
    validarTelefonoProveedor, validarTiempo, validarPrecioPorHora, validarCorreoLogin, validarContrasenaLogin,
    validarRegistroGoogle, validarNombreApellido, validarNumeroTarjeta, validarFechaVencimiento,
    validarCVC, validarCodigoPostal
};


