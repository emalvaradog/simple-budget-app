let balance = 0
let ingresos = []
let egresos = []

function mostrarBalance() {
    const balanceHtml = document.getElementById("balance")
    balanceHtml.textContent = `$${balance}`
}

function agregarIngreso() {
    let cantidad = document.getElementById("incomeInput").value
    let concepto = document.getElementById("cuentas").value
    balance += Number(cantidad)
    let movimiento = {
        cantidad: cantidad,
        concepto: concepto
    }
    ingresos.push(movimiento)
    mostrarBalance()
    mostrarIngresos()

}

function agregarEgreso() {
    let cantidad = document.getElementById("expenseInput").value
    let concepto = document.getElementById("concepto").value
    balance -= Number(cantidad)
    let movimiento = {
        cantidad: cantidad,
        concepto: concepto
    }
    egresos.push(movimiento)
    // cantidad.value = ""
    mostrarBalance()
    mostrarEgresos()
}


function mostrarIngresos() {
    let ingreso = document.getElementById("incomesBalance")
    let ingresoNeto = ingresos.map((movimiento) => Number(movimiento.cantidad))
    ingreso.textContent = `Ingresos totales: $${Number(ingresoNeto.reduce((a, b) => a + b))}`
    // Lista de Ingresos
    let concepto = ingresos.map((movimiento) => movimiento.concepto)
    let cantidad = ingresos.map((movimiento) => movimiento.cantidad)
    let txtList = `${concepto[concepto.length - 1]} | $${cantidad[cantidad.length - 1]}`
    let node = document.createElement("li")
    let nodeTxt = document.createTextNode(txtList)
    node.appendChild(nodeTxt)
    document.getElementById("incomesList").appendChild(node)

}

function mostrarEgresos() {
    let egreso = document.getElementById("expensesBalance")
    let egresoNeto = egresos.map((movimiento) => Number(movimiento.cantidad))
    egreso.innerText = `Gastos totales: $${egresoNeto.reduce((a, b) => a + b)}`
    // Lista de Egresos
    let concepto = egresos.map((movimiento) => movimiento.concepto)
    let cantidad = egresos.map((movimiento) => movimiento.cantidad)
    let txtList = `${concepto[concepto.length - 1]} | $${cantidad[cantidad.length - 1]}`
    let node = document.createElement("li")
    let nodeTxt = document.createTextNode(txtList)
    node.appendChild(nodeTxt)
    document.getElementById("expensesList").appendChild(node)
}
