var cuentaMiguel = { nombre: "Miguel", password: "1234", saldo: 200 }
var cuentaMartin = { nombre: "Martin", password: "5678", saldo: 300 }
var cuentaLaura = { nombre: "Laura", password: "0987", saldo: 400 }


function login(form) {
    if (form.User.value == cuentaMiguel.nombre) {
        if (form.Pass.value == cuentaMiguel.password) {
            location = "CuentaMiguel.html"
        } else {
            alert("Contraseña incorrecta")
        }

    } else if (form.User.value == cuentaMartin.nombre) {
        if (form.Pass.value == cuentaMartin.password) {
            location = "CuentaMartin.html"
        } else {
            alert("Contraseña incorrecta")
        }
    } else if (form.User.value == cuentaLaura.nombre) {
        if (form.Pass.value == cuentaLaura.password) {
            location = "CuentaLaura.html"
        } else {
            alert("Contraseña incorrecta")
        }
    } else {
        alert("Usiario incorrecto")
    }
}

//FUNCIÓN PARA CONSULTAR SALDO MIGUEL
function consultarSaldoMig() {
    var CuentaMiguelSaldo = cuentaMiguel.saldo;
    var saldoInicial = (CuentaMiguelSaldo - 0);

    document.getElementById('SaldoMig').innerHTML = saldoInicial;
}


//FUNCIÓN PARA RESTAR SALDO MIGUEL
function RetiroMig() {
    var CuentaMiguelSaldo = cuentaMiguel.saldo;
    var retiro = document.getElementById("RetiroMig").value;
    var resultado = (CuentaMiguelSaldo - retiro);

    if (resultado < 10) {
        alert("No puedes tener menos de $10 en tu cuenta")

    } else {
        document.getElementById('ResRetMig').innerHTML = resultado;

    }

}

//FUNCIÓN PARA SUMAR SALDO MIGUEL
function DepositoMig() {
    var CuentaMiguelSaldo = cuentaMiguel.saldo;
    var deposito = document.getElementById('DepMig').value;
    var resultado = (CuentaMiguelSaldo + parseInt(deposito));
    document.getElementById('ResDepMig').innerHTML = resultado;

    if (resultado > 999) {
        alert("No puedes ser millonario")

    } else {
        document.getElementById('ResDepMig').innerHTML = resultado;

    }

}



 
//FUNCIÓN PARA CONSULTAR SALDO MARTIN
function consultarSaldoMart() {
    var CuentaMartinSaldo = cuentaMartin.saldo;
    var saldoInicial = (CuentaMartinSaldo - 0);

    document.getElementById('SaldoMar').innerHTML = saldoInicial;
}


//FUNCIÓN PARA RESTAR SALDO MARTIN
function RetiroMar() {
    var CuentaMartinSaldo = cuentaMartin.saldo;
    var retiro = document.getElementById("RetiroMar").value;
    var resultado = (CuentaMartinSaldo - retiro);

    if (resultado < 10) {
        alert("No puedes tener menos de $10 en tu cuenta")

    } else {
        document.getElementById('ResRetMar').innerHTML = resultado;

    }

}

//FUNCIÓN PARA SUMAR SALDO MARTIN
function DepositoMar() {
    var CuentaMartinSaldo = cuentaMartin.saldo;
    var deposito = document.getElementById('DepMar').value;
    var resultado = (CuentaMartinSaldo + parseInt(deposito));
    document.getElementById('ResDepMar').innerHTML = resultado;

    if (resultado > 999) {
        alert("No puedes ser millonario")

    } else {
        document.getElementById('ResDepMar').innerHTML = resultado;

    }

}



//FUNCIÓN PARA CONSULTAR SALDO LAURA
function consultarSaldoLau() {
    var CuentaLauraSaldo = cuentaLaura.saldo;
    var saldoInicial = (CuentaLauraSaldo - 0);

    document.getElementById('SaldoLau').innerHTML = saldoInicial;
}


//FUNCIÓN PARA RESTAR SALDO LAURA
function RetiroLau() {
    var CuentaLauraSaldo = cuentaLaura.saldo;
    var retiro = document.getElementById("RetiroLau").value;
    var resultado = (CuentaLauraSaldo - retiro);

    if (resultado < 10) {
        alert("No puedes tener menos de $10 en tu cuenta")

    } else {
        document.getElementById('ResRetLau').innerHTML = resultado;

    }

}

//FUNCIÓN PARA SUMAR SALDO LAURA
function DepositoLau() {
    var CuentaLauraSaldo = cuentaLaura.saldo;
    var deposito = document.getElementById('DepLau').value;
    var resultado = (CuentaLauraSaldo + parseInt(deposito));
    document.getElementById('ResDepLau').innerHTML = resultado;

    if (resultado > 999) {
        alert("No puedes ser millonario")

    } else {
        document.getElementById('ResDepLau').innerHTML = resultado;

    }

}
