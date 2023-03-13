function cinema() {
    let seccion = parseInt(document.getElementById("seccion").value)
    const seccion1 = 20;
    const seccion2 = 40;
    const seccion3 = 30;
    let puestos1 = 0
    let puestos2 = 0
    let puestos3 = 0

    if (seccion == 1) {

        while (puestos1 < seccion1) {
            const puestosrestantes = seccion1 - puestos1
            const puestos = prompt("cuantos puestos desea comprar cap@ ? quedan:" + puestosrestantes)
            const puestosInt = parseInt(puestos)
            puestos1 += puestosInt

            if (puestosInt <= seccion1) {
                document.getElementById("mensaje").innerHTML = `compa se agotaron los puestos
                en esta seccion , compre puestos en seccion 2 o 3 gracias`
            }

        }
    } else if (seccion == 2) {

        while (puestos2 < seccion2) {
            const puestosrestantes = seccion2 - puestos2
            const puestos = prompt("cuantos puestos desea comprar cap@ ? quedan:" + puestosrestantes)
            const puestosInt = parseInt(puestos)
            puestos2 += puestosInt

            if (puestosInt <= seccion2) {
                document.getElementById("mensaje").innerHTML = `compa se agotaron los puestos
                en esta seccion , compre puestos en seccion 1 o 3 gracias`
            }

        }
    } else if (seccion == 3) {

        while (puestos3 < seccion3) {
            const puestosrestantes = seccion3 - puestos3
            const puestos = prompt("cuantos puestos desea comprar cap@ ? quedan:" + puestosrestantes)
            const puestosInt = parseInt(puestos)
            puestos3 += puestosInt

            if (puestosInt <= seccion3) {
                document.getElementById("mensaje").innerHTML = `compa se agotaron los puestos
                en esta seccion , compre puestos en seccion 1 o 2 gracias`
            }

        }
    }
}