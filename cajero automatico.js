
   
    var cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" }
];

var cuentaActual = null;

$(document).ready(function() {
    $("#btnLogin").click(function() {
        var cuentaIndex = $("#cuenta").val();
        var password = $("#password").val();
        if (cuentas[cuentaIndex].password == password) {
            cuentaActual = cuentas[cuentaIndex];
            $("#nombre").text(cuentaActual.nombre);
            $("#login").hide();
            $("#cajero").show();
        } else {
            $("#mensaje").text("Contraseña incorrecta");
        }
    });

    $("#btnSaldo").click(function() {
        $("#saldo").text("Tu saldo actual es $" + cuentaActual.saldo);
    });

    $("#btnIngresar").click(function() {
        var monto = prompt("Ingresa el monto a depositar");
        if (monto != null) {
            monto = parseInt(monto);
            if (isNaN(monto)) {
                alert("Monto inválido");
            } else if (monto + cuentaActual.saldo > 990) {
                alert("No puedes tener más de $990 en tu cuenta");
            } else {
                cuentaActual.saldo += monto;
                alert("Has depositado $" + monto);
                $("#saldo").text("Tu nuevo saldo es $" + cuentaActual.saldo);
            }
        }
    });

    $("#btnRetirar").click(function() {
        var monto = prompt("Ingresa el monto a retirar");
        if (monto != null) {
            monto = parseInt(monto);
            if (isNaN(monto)) {
                alert("Monto inválido");
            } else if (cuentaActual.saldo - monto < 10) {
                alert("No puedes tener menos de $10 en tu cuenta");
            } else {
                cuentaActual.saldo -= monto;
                alert("Has retirado $" + monto);
                $("#saldo").text("Tu nuevo saldo es $" + cuentaActual.saldo);
            }
        }
    });

    $("#btnSalir").click(function() {
        cuentaActual = null;
        $("#password").val("");
        $("#mensaje").text("");
        $("#saldo").text("");
        $("#cajero").hide();
        $("#login").show();
    });
});
