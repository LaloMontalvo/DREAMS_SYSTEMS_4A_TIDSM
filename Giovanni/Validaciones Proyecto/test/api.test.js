// test/api.test.js
const chai = require('chai');
const expect = chai.expect;
const {validarNombreCliente,
    validarTelefonoCliente, validarClaveEmpleado,    
    validarNombreEmpleado,
    validarFechaNacimientoEmpleado,
    validarTelefonoEmpleado,
    validarNombreUsuario, validarContrasenaUsuario,
    validarNombreProducto, validarCodigoProducto,
    validarDescripcionProducto, validarPrecioProducto,
    validarNumeroVenta, validarTipoVenta, validarNombreProveedor,
    validarTelefonoProveedor, validarTiempo, validarPrecioPorHora,
    validarCorreoLogin, validarContrasenaLogin,
    validarRegistroGoogle, validarNombreApellido, 
    validarNumeroTarjeta, validarFechaVencimiento,
    validarCVC, validarCodigoPostal} = require('../src/app');

describe('Proyecto: Papelería "Ciber Center"', () => {
    //API CLIENTES
    describe('Api 1.- Clientes', () => {
    describe('Validación de Nombre Completo', () => {
        it('Debe rechazar nombre vacío', () => {
            const resultado = validarNombreCliente('');
            expect(resultado).to.equal('Este campo es obligatorio.');
        });

        it('Debe rechazar nombre con menos de 3 caracteres', () => {
            const resultado = validarNombreCliente('A');
            expect(resultado).to.equal('El nombre debe tener al menos 3 caracteres.');
        });

        it('Debe aceptar nombre válido', () => {
            const resultado = validarNombreCliente('Juan Carlos');
            expect(resultado).to.equal('Válido');
        });

        it('Debe rechazar nombre con caracteres no permitidos', () => {
            const resultado = validarNombreCliente('Juan#Carlos');
            expect(resultado).to.equal('El nombre solo debe contener letras y espacios.');
        });

        it('Debe aceptar nombre con acentos y caracteres especiales permitidos', () => {
            const resultado = validarNombreCliente('José María');
            expect(resultado).to.equal('Válido');
        });

        it('Debe rechazar nombre con espacios consecutivos', () => {
            const resultado = validarNombreCliente('Juan  Carlos');
            expect(resultado).to.equal('El nombre no debe contener espacios consecutivos.');
        });

        it('Debe rechazar nombre con longitud mayor a 100 caracteres', () => {
            const resultado = validarNombreCliente('A'.repeat(101));
            expect(resultado).to.equal('El nombre no debe exceder los 100 caracteres.');
        });
    });

    describe('Validación de Número de Teléfono', () => {
        it('Debe rechazar número vacío', () => {
            const resultado = validarTelefonoCliente('');
            expect(resultado).to.equal('Este campo es obligatorio.');
        });

        it('Debe rechazar número con menos de 10 dígitos', () => {
            const resultado = validarTelefonoCliente('123456789');
            expect(resultado).to.equal('El número de teléfono debe tener entre 10 y 15 dígitos.');
        });

        it('Debe aceptar número con 10 dígitos', () => {
            const resultado = validarTelefonoCliente('1234567890');
            expect(resultado).to.equal('Válido');
        });

        it('Debe aceptar número con formato internacional válido', () => {
            const resultado = validarTelefonoCliente('+52 1234567890');
            expect(resultado).to.equal('Válido');
        });

        it('Debe rechazar número con más de 15 dígitos', () => {
            const resultado = validarTelefonoCliente('1234567890123456');
            expect(resultado).to.equal('El número de teléfono debe tener entre 10 y 15 dígitos.');
        });

        it('Debe rechazar número con caracteres no numéricos', () => {
            const resultado = validarTelefonoCliente('123-456-7890');
            expect(resultado).to.equal('El número de teléfono debe tener entre 10 y 15 dígitos.');
        });
    });
}); });

//API EMPLEADOS

    describe('Api 2.- Empleados', () => {
        describe('Validación de Clave de Empleado', () => {
            it('Debe rechazar clave vacía', () => {
                expect(validarClaveEmpleado('')).to.equal('Este campo es obligatorio.');
            });
    
            it('Debe rechazar clave con formato incorrecto', () => {
                expect(validarClaveEmpleado('ABC1234')).to.equal('La clave debe tener 4 letras mayúsculas seguidas de 3 números.');
            });
    
            it('Debe aceptar clave válida', () => {
                expect(validarClaveEmpleado('ABCD123')).to.equal('Válido');
            });
        });
    
        describe('Validación de Nombre Completo', () => {
            it('Debe rechazar nombre vacío', () => {
                expect(validarNombreEmpleado('')).to.equal('Este campo es obligatorio.');
            });
    
            it('Debe aceptar nombre válido', () => {
                expect(validarNombreEmpleado('Juan Pérez López')).to.equal('Válido');
            });
    
            it('Debe rechazar nombre con caracteres no permitidos', () => {
                expect(validarNombreEmpleado('Juan#Pérez')).to.equal('El nombre solo debe contener letras y espacios.');
            });
    
            it('Debe rechazar nombre con longitud mayor a 150 caracteres', () => {
                const largoNombre = 'A'.repeat(151);
                expect(validarNombreEmpleado(largoNombre)).to.equal('El nombre no debe exceder los 150 caracteres.');
            });
        });
    
        describe('Validación de Fecha de Nacimiento', () => {
            it('Debe rechazar fecha vacía', () => {
                expect(validarFechaNacimientoEmpleado('')).to.equal('Este campo es obligatorio.');
            });
    
            it('Debe rechazar fecha con formato incorrecto', () => {
                expect(validarFechaNacimientoEmpleado('2024/11/27')).to.equal('La fecha debe estar en formato dd-mm-aaaa.');
            });
    
            it('Debe aceptar fecha válida', () => {
                expect(validarFechaNacimientoEmpleado('27-11-2024')).to.equal('Válido');
            });
    
            it('Debe rechazar fecha con valores inválidos', () => {
                expect(validarFechaNacimientoEmpleado('32-13-2024')).to.equal('La fecha contiene valores inválidos.');
            });
        });
    
        describe('Validación de Número de Teléfono', () => {
            it('Debe rechazar teléfono vacío', () => {
                expect(validarTelefonoEmpleado('')).to.equal('Este campo es obligatorio.');
            });
    
            it('Debe aceptar teléfono válido con 10 dígitos', () => {
                expect(validarTelefonoEmpleado('1234567890')).to.equal('Válido');
            });
    
            it('Debe aceptar teléfono válido en formato internacional', () => {
                expect(validarTelefonoEmpleado('+52 1234567890')).to.equal('Válido');
            });
    
            it('Debe rechazar teléfono con menos de 10 dígitos', () => {
                expect(validarTelefonoEmpleado('123456789')).to.equal('El número de teléfono debe tener entre 10 y 15 dígitos.');
            });
        });
    });

//API USUARIOS

    describe('Api 3.- Usuarios', () => {
    describe('Validación de Nombre de Usuario', () => {
        it('Debe rechazar nombre de usuario vacío', () => {
            expect(validarNombreUsuario('')).to.equal('Este campo es obligatorio.');
        });
        it('Debe rechazar nombre de usuario con menos de 5 caracteres', () => {
            expect(validarNombreUsuario('Juan')).to.equal('El nombre de usuario debe tener al menos 5 caracteres.');
        });
        it('Debe rechazar nombre de usuario con más de 20 caracteres', () => {
            expect(validarNombreUsuario('JuanPérezLopezElUsuario')).to.equal('El nombre de usuario no debe exceder los 20 caracteres.');
        });
        it('Debe rechazar nombre de usuario con caracteres no permitidos', () => {
            expect(validarNombreUsuario('Juan!Pérez')).to.equal('El nombre de usuario solo puede contener letras, números y guiones bajos.');
        });
        it('Debe aceptar nombre de usuario válido', () => {
            expect(validarNombreUsuario('juan_perez')).to.equal('Válido');
        });
    });

    describe('Validación de Contraseña', () => {
        it('Debe rechazar contraseña vacía', () => {
            expect(validarContrasenaUsuario('')).to.equal('Este campo es obligatorio.');
        });
        it('Debe rechazar contraseña con menos de 8 caracteres', () => {
            expect(validarContrasenaUsuario('abc123')).to.equal('La contraseña debe tener al menos 8 caracteres.');
        });
        it('Debe rechazar contraseña sin mayúsculas', () => {
            expect(validarContrasenaUsuario('abcdefgh')).to.equal('La contraseña debe contener al menos una letra mayúscula.');
        });
        it('Debe rechazar contraseña sin minúsculas', () => {
            expect(validarContrasenaUsuario('ABCDEFGH')).to.equal('La contraseña debe contener al menos una letra minúscula.');
        });
        it('Debe rechazar contraseña sin números', () => {
            expect(validarContrasenaUsuario('Abcdefgh')).to.equal('La contraseña debe contener al menos un número.');
        });
        it('Debe rechazar contraseña sin caracteres especiales', () => {
            expect(validarContrasenaUsuario('Abcd1234')).to.equal('La contraseña debe contener al menos un carácter especial.');
        });
        it('Debe aceptar contraseña válida', () => {
            expect(validarContrasenaUsuario('Abcd1234!')).to.equal('Válido');
        });
    });
});

//API PRODUCTOS
    describe('Api 4.- Productos', () => {
    describe('Validación de Nombre de Producto', () => {
        it('Debe rechazar nombre vacío', () => {
            expect(validarNombreProducto('')).to.equal('Este campo es obligatorio.');
        });
        it('Debe rechazar nombre con menos de 3 caracteres', () => {
            expect(validarNombreProducto('A')).to.equal('El nombre del producto debe tener al menos 3 caracteres.');
        });
        it('Debe aceptar nombre válido', () => {
            expect(validarNombreProducto('Cuaderno')).to.equal('Válido');
        });
    });

    describe('Validación de Código de Producto', () => {
        it('Debe rechazar código vacío', () => {
            expect(validarCodigoProducto('')).to.equal('Este campo es obligatorio.');
        });
        it('Debe rechazar código con caracteres no permitidos', () => {
            expect(validarCodigoProducto('ABC$123')).to.equal('El código del producto solo debe contener letras y números.');
        });
        it('Debe rechazar código con longitud incorrecta', () => {
            expect(validarCodigoProducto('ABC12')).to.equal('El código del producto debe tener entre 6 y 12 caracteres.');
        });
        it('Debe aceptar código válido', () => {
            expect(validarCodigoProducto('ABC123')).to.equal('Válido');
        });
    });

    describe('Validación de Descripción de Producto', () => {
        it('Debe aceptar descripción vacía', () => {
            expect(validarDescripcionProducto('')).to.equal('Válido');
        });
        it('Debe rechazar descripción con más de 200 caracteres', () => {
            expect(validarDescripcionProducto('A'.repeat(201))).to.equal('La descripción no debe exceder los 200 caracteres.');
        });
        it('Debe aceptar descripción válida', () => {
            expect(validarDescripcionProducto('Cuaderno de notas, color azul, tamaño A4.')).to.equal('Válido');
        });
    });

    describe('Validación de Precio de Producto', () => {
        it('Debe rechazar precio no numérico', () => {
            expect(validarPrecioProducto('abc')).to.equal('El precio debe ser un número positivo.');
        });
        it('Debe rechazar precio negativo', () => {
            expect(validarPrecioProducto(-10)).to.equal('El precio debe ser un número positivo.');
        });
        it('Debe rechazar precio con más de dos decimales', () => {
            expect(validarPrecioProducto(10.123)).to.equal('El precio debe tener hasta dos decimales.');
        });
        it('Debe aceptar precio válido', () => {
            expect(validarPrecioProducto(10.99)).to.equal('Válido');
        });
    });
    });

//API VENTAS

    describe('Api 5.- Ventas', () => {
    describe('Validación de Número de Venta', () => {
    it('Debe rechazar número de venta vacío', () => {
        expect(validarNumeroVenta('')).to.equal('Este campo es obligatorio.');
    });
    it('Debe rechazar número de venta con caracteres no permitidos', () => {
        expect(validarNumeroVenta('ABC$123')).to.equal('El número de venta solo debe contener letras y números.');
    });
    it('Debe rechazar número de venta con longitud incorrecta', () => {
        expect(validarNumeroVenta('AB12')).to.equal('El número de venta debe tener entre 6 y 12 caracteres.');
    });
    it('Debe aceptar número de venta válido', () => {
        expect(validarNumeroVenta('VNT123')).to.equal('Válido');
    });
});

    describe('Validación de Tipo de Venta', () => {
    it('Debe rechazar tipo de venta vacío', () => {
        expect(validarTipoVenta('')).to.equal('Este campo es obligatorio.');
    });
    it('Debe rechazar tipo de venta con valor no permitido', () => {
        expect(validarTipoVenta('Online')).to.equal('El tipo de venta debe ser "Papelería" o "Ciber".');
    });
    it('Debe aceptar tipo de venta válido (Papelería)', () => {
        expect(validarTipoVenta('Papelería')).to.equal('Válido');
    });
    it('Debe aceptar tipo de venta válido (Ciber)', () => {
        expect(validarTipoVenta('Ciber')).to.equal('Válido');
    });
}); });

//API PROVEEDORES 
    describe('Api 6.- Proveedores', () => {
    describe('Validación de Nombre del Proveedor', () => {
    it('Debe rechazar nombre de proveedor vacío', () => {
        expect(validarNombreProveedor('')).to.equal('Este campo es obligatorio.');
    });
    it('Debe rechazar nombre de proveedor corto', () => {
        expect(validarNombreProveedor('Jo')).to.equal('El nombre del proveedor debe tener al menos 3 caracteres.');
    });
    it('Debe aceptar nombre de proveedor válido', () => {
        expect(validarNombreProveedor('Proveedor ABC')).to.equal('Válido');
    });
});

    describe('Validación de Teléfono del Proveedor', () => {
    it('Debe rechazar teléfono vacío', () => {
        expect(validarTelefonoProveedor('')).to.equal('Este campo es obligatorio.');
    });
    it('Debe rechazar teléfono con formato incorrecto', () => {
        expect(validarTelefonoProveedor('123-456-789')).to.equal('El número telefónico debe tener el formato XXX-XXX-XXXX.');
    });
    it('Debe aceptar teléfono válido', () => {
        expect(validarTelefonoProveedor('123-456-7890')).to.equal('Válido');
    });
});
});

//API RENTAS
    describe('Api 7.- Rentas', () => {
    describe('Validación de Tiempo', () => {
        it('Debe rechazar tiempo negativo', () => {
            expect(validarTiempo(-60)).to.equal('El tiempo debe ser un número mayor a 0.');
        });
        it('Debe rechazar tiempo cero', () => {
            expect(validarTiempo(0)).to.equal('El tiempo debe ser un número mayor a 0.');
        });
        it('Debe aceptar tiempo válido en minutos', () => {
            expect(validarTiempo(120)).to.equal('Válido');
        });
    });

    describe('Validación de Precio por Hora', () => {
        it('Debe rechazar precio con tiempo no válido', () => {
            expect(validarPrecioPorHora(0)).to.equal('El precio es inválido.');
        });
        it('Debe aceptar precio válido según el tiempo', () => {
            expect(validarPrecioPorHora(120)).to.equal('Válido. El precio por 2 hora(s) es 16 MXN.');
        });
    });

});

// API LOGIN
    describe('Api 8.- Login para App', () => {
    describe('Validación de Correo', () => {
        it('Debe rechazar correo sin el formato correcto', () => {
            expect(validarCorreoLogin('correo@dominio')).to.equal('El correo debe tener el formato correcto (ejemplo@dominio.com).');
        });
        it('Debe aceptar correo con formato correcto', () => {
            expect(validarCorreoLogin('correo@dominio.com')).to.equal('Válido');
        });
    });

    describe('Validación de Contraseña', () => {
        it('Debe rechazar contraseña con menos de 8 caracteres', () => {
            expect(validarContrasenaLogin('abc123')).to.equal('La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.');
        });
        it('Debe rechazar contraseña con más de 12 caracteres', () => {
            expect(validarContrasenaLogin('abc1234567890')).to.equal('La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.');
        });
        it('Debe rechazar contraseña con caracteres especiales', () => {
            expect(validarContrasenaLogin('abc@12345')).to.equal('La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.');
        });
        it('Debe aceptar contraseña válida', () => {
            expect(validarContrasenaLogin('abc12345')).to.equal('Válido');
        });
    });

    describe('Validación de Registro con Google', () => {
        it('Debe rechazar correo no registrado', () => {
            expect(validarRegistroGoogle('noexiste@dominio.com', 'abc12345')).to.equal('El correo no está registrado.');
        });
        it('Debe aceptar correo y contraseña válidos', () => {
            expect(validarRegistroGoogle('usuario1@dominio.com', 'abc12345')).to.equal('Válido');
        });
        it('Debe rechazar contraseña inválida', () => {
            expect(validarRegistroGoogle('usuario1@dominio.com', 'abc@123')).to.equal('La contraseña debe tener entre 8 y 12 caracteres y no puede contener caracteres especiales.');
        });
        it('Debe rechazar campos vacíos en correo y contraseña', () => {
            expect(validarRegistroGoogle('', '')).to.equal('El correo y la contraseña no pueden estar vacíos.');
        });
        it('Debe rechazar campo vacío en correo', () => {
            expect(validarRegistroGoogle('', 'abc12345')).to.equal('El correo y la contraseña no pueden estar vacíos.');
        });
        it('Debe rechazar campo vacío en contraseña', () => {
            expect(validarRegistroGoogle('usuario1@dominio.com', '')).to.equal('El correo y la contraseña no pueden estar vacíos.');
        });
    });

});

//API REGISTRO EN LA APP
    describe('Api 9.- Registro en la App', () => {
    describe('Validaciones del formulario de Registro', () => {

    // TESTS PARA NOMBRE, APELLIDO PATERNO Y APELLIDO MATERNO
    describe('Validación de Nombre, Apellido Paterno y Apellido Materno', () => {
        
        it('Debe rechazar el campo vacío (Nombre)', () => {
            expect(validarNombreApellido('', 'nombre')).to.equal('El campo nombre no puede estar vacío.');
        });
        it('Debe rechazar el campo vacío (Apellido Paterno)', () => {
            expect(validarNombreApellido('', 'apellidoPaterno')).to.equal('El campo apellidoPaterno no puede estar vacío.');
        });
        it('Debe rechazar el campo vacío (Apellido Materno)', () => {
            expect(validarNombreApellido('', 'apellidoMaterno')).to.equal('El campo apellidoMaterno no puede estar vacío.');
        });

        it('Debe rechazar si el nombre es menor a 2 caracteres', () => {
            expect(validarNombreApellido('A', 'nombre')).to.equal('El nombre debe tener al menos 2 caracteres.');
        });
        it('Debe rechazar si el apellido paterno es menor a 2 caracteres', () => {
            expect(validarNombreApellido('A', 'apellidoPaterno')).to.equal('El apellidoPaterno debe tener al menos 2 caracteres.');
        });
        it('Debe rechazar si el apellido materno es menor a 2 caracteres', () => {
            expect(validarNombreApellido('A', 'apellidoMaterno')).to.equal('El apellidoMaterno debe tener al menos 2 caracteres.');
        });

        it('Debe rechazar si el nombre contiene números', () => {
            expect(validarNombreApellido('Juan123', 'nombre')).to.equal('El nombre solo puede contener letras y espacios.');
        });
        it('Debe rechazar si el apellido paterno contiene números', () => {
            expect(validarNombreApellido('García123', 'apellidoPaterno')).to.equal('El apellidoPaterno solo puede contener letras y espacios.');
        });
        it('Debe rechazar si el apellido materno contiene símbolos', () => {
            expect(validarNombreApellido('Lopez@2024', 'apellidoMaterno')).to.equal('El apellidoMaterno solo puede contener letras y espacios.');
        });

        it('Debe rechazar si el nombre contiene múltiples espacios seguidos', () => {
            expect(validarNombreApellido('Juan   Pérez', 'nombre')).to.equal('El nombre no puede contener múltiples espacios seguidos.');
        });
        it('Debe rechazar si el apellido paterno contiene múltiples espacios seguidos', () => {
            expect(validarNombreApellido('García   Pérez', 'apellidoPaterno')).to.equal('El apellidoPaterno no puede contener múltiples espacios seguidos.');
        });
        it('Debe rechazar si el apellido materno contiene múltiples espacios seguidos', () => {
            expect(validarNombreApellido('López    García', 'apellidoMaterno')).to.equal('El apellidoMaterno no puede contener múltiples espacios seguidos.');
        });

        it('Debe aceptar un nombre válido', () => {
            expect(validarNombreApellido('Juan', 'nombre')).to.equal('Válido');
        });
        it('Debe aceptar un apellido paterno válido', () => {
            expect(validarNombreApellido('García', 'apellidoPaterno')).to.equal('Válido');
        });
        it('Debe aceptar un apellido materno válido', () => {
            expect(validarNombreApellido('Pérez', 'apellidoMaterno')).to.equal('Válido');
        });
    });
});
});

//API PARA PAGO CON STRIPE
    describe('Api 10.- Pago con Stripe en la App', () => {
    // TESTS PARA NÚMERO DE TARJETA
    describe('Validación del Número de Tarjeta', () => {
        it('Debe rechazar un número de tarjeta no válido', () => {
            expect(validarNumeroTarjeta('123456789012345')).to.equal('Número de tarjeta no válido.');
        });

        it('Debe aceptar un número de tarjeta válido', () => {
            expect(validarNumeroTarjeta('4242424242424242')).to.equal('Válido');
        });
    });

    // TESTS PARA FECHA DE VENCIMIENTO
    describe('Validación de la Fecha de Vencimiento', () => {
        it('Debe rechazar una fecha de vencimiento no válida', () => {
            expect(validarFechaVencimiento('13/25')).to.equal('La tarjeta ya ha vencido, no es válida.');
        });
    });
    // TESTS PARA CÓDIGO CVC
    describe('Validación del Código CVC', () => {
        it('Debe rechazar un código CVC con menos de 3 dígitos', () => {
            expect(validarCVC('12')).to.equal('El código CVC debe tener 3 o 4 dígitos.');
        });

        it('Debe aceptar un código CVC con 3 dígitos', () => {
            expect(validarCVC('123')).to.equal('Válido');
        });

        it('Debe aceptar un código CVC con 4 dígitos', () => {
            expect(validarCVC('1234')).to.equal('Válido');
        });
    });

    // TESTS PARA CÓDIGO POSTAL
    describe('Validación del Código Postal', () => {
        it('Debe rechazar un código postal con menos de 5 dígitos', () => {
            expect(validarCodigoPostal('1234')).to.equal('El código postal debe contener 5 dígitos numéricos.');
        });

        it('Debe rechazar un código postal con más de 5 dígitos', () => {
            expect(validarCodigoPostal('123456')).to.equal('El código postal debe contener 5 dígitos numéricos.');
        });

        it('Debe aceptar un código postal válido de 5 dígitos', () => {
            expect(validarCodigoPostal('12345')).to.equal('Válido');
        });

        it('Debe rechazar un código postal con caracteres no numéricos', () => {
            expect(validarCodigoPostal('12A45')).to.equal('El código postal debe contener 5 dígitos numéricos.');
        });
    });
});



