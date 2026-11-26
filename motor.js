
//motor.js — El Motor del Barrio
// Célula: Amaterasu
// Negocio: Biblioteca comunitaria

const registros = [
    { persona: "Manuel P.", categoria: "Prestamo", dia: 3, valor: 14 },
    { persona: "Juan C.", categoria: "Prestamo", dia: 5, valor: 22 },
    { persona: "Carlos R.", categoria: "Prestamo", dia: 1, valor: 8 },
    { persona: "Raúl G.", categoria: "Prestamo", dia: 7, valor: 30 },
    { persona: "Manuel P.", categoria: "Prestamo", dia: 2, valor: 12 },
    { persona: "María F.", categoria: "Prestamo", dia: 4, valor: 19 },
    { persona: "Camila S.", categoria: "Prestamo", dia: 6, valor: 3 },
    { persona: "Manuel P.", categoria: "Prestamo", dia: 1, valor: 25 },
    { persona: "Susana V.", categoria: "Prestamo", dia: 5, valor: 11 },
    { persona: "Pedro A.", categoria: "Prestamo", dia: 3, valor: 27 },
    { persona: "Juan C.", categoria: "Prestamo", dia: 2, valor: 6 },
    { persona: "Claudia D.", categoria: "Prestamo", dia: 7, valor: 15 },
    { persona: "Daniel H.", categoria: "Prestamo", dia: 4, valor: 9 },
    { persona: "Carlos R.", categoria: "Prestamo", dia: 6, valor: 20 },
    { persona: "Mónica B.", categoria: "Prestamo", dia: 1, valor: 4 },
    { persona: "Manuel P.", categoria: "Prestamo", dia: 5, valor: 28 },
    { persona: "Andrés G.", categoria: "Prestamo", dia: 3, valor: 17 },
    { persona: "Valentina R.", categoria: "Prestamo", dia: 2, valor: 10 },
    { persona: "Raúl G.", categoria: "Prestamo", dia: 6, valor: 23 },
    { persona: "Sebastián M.", categoria: "Prestamo", dia: 7, valor: 1 },
    { persona: "Sofía L.", categoria: "Prestamo", dia: 4, valor: 26 },
    { persona: "Diego N.", categoria: "Prestamo", dia: 1, valor: 13 },
    { persona: "Mateo Q.", categoria: "Prestamo", dia: 5, valor: 7 },
    { persona: "Isabella C.", categoria: "Prestamo", dia: 3, valor: 29 },
    { persona: "Lucas T.", categoria: "Prestamo", dia: 2, valor: 16 },
    { persona: "Mariana Z.", categoria: "Prestamo", dia: 6, valor: 21 },
    { persona: "Gabriel K.", categoria: "Prestamo", dia: 7, valor: 5 }
];


// ---------- NIVEL 1 · Datos ----------

// Mostrar un registro en una sola línea.
function mostrarRegistro(registro) {

    if (!registro) {
        return "Registro no encontrado";
    }

    return `Día ${registro.dia} · ${registro.persona} · ${registro.categoria} · $${registro.valor}`;
}


// Imprimir todos los registros utilizando mostrarRegistro().
function listarTodo(datos) {

    datos.forEach(registro => {
        console.log(mostrarRegistro(registro));
    });

}

// ---------- NIVEL 2 · Reportes ----------

// Sumar todos los valores.
function totalGeneral(datos) {

    return datos.reduce((total, registro) => {
        return total + registro.valor;
    }, 0);

}


// Calcular promedio por registro.
function promedio(datos) {

    if (datos.length === 0) {
        return 0;
    }

    return totalGeneral(datos) / datos.length;

}


// Encontrar el registro con el valor más alto.
function registroMayor(datos) {

    if (datos.length === 0) {
        return null;
    }

    return datos.reduce((mayor, registro) => {

        return registro.valor > mayor.valor ? registro : mayor;

    });

}


// Filtrar registros por categoría.
function filtrarPorCategoria(datos, categoria) {

    return datos.filter(registro => {
        return registro.categoria === categoria;
    });

}


// Agrupar y sumar los valores por categoría.
function totalesPorCategoria(datos) {

    return datos.reduce((totales, registro) => {

        if (totales[registro.categoria] === undefined) {
            totales[registro.categoria] = 0;
        }

        totales[registro.categoria] += registro.valor;

        return totales;

    }, {});

}


// ---------- NIVEL 3 · Set y Map ----------

// Contar cuántas personas diferentes existen.
function personasUnicas(datos) {

    const personas = new Set();

    datos.forEach(registro => {
        personas.add(registro.persona);
    });

    return personas.size;

}


// Contador de pasos para comparar los algoritmos.
const pasos = {
    recurrentesLento: 0,
    recurrentesRapido: 0
};


// Encontrar personas recurrentes con dos ciclos anidados.
function recurrentesLento(datos) {

    pasos.recurrentesLento = 0;

    const recurrentes = new Map();

    for (let i = 0; i < datos.length; i++) {

        let contador = 0;

        for (let j = 0; j < datos.length; j++) {

            pasos.recurrentesLento++;

            if (datos[i].persona === datos[j].persona) {
                contador++;
            }

        }

        if (contador > 1) {

            recurrentes.set(datos[i].persona, contador);

        }

    }

    return Array.from(recurrentes, ([persona, cantidad]) => ({
        persona,
        cantidad
    }));

}


// Encontrar personas recurrentes con Map.
// Los registros se recorren una sola vez.
function recurrentesRapido(datos) {

    pasos.recurrentesRapido = 0;

    const contadorPersonas = new Map();

    for (const registro of datos) {

        pasos.recurrentesRapido++;

        const persona = registro.persona;

        contadorPersonas.set(
            persona,
            (contadorPersonas.get(persona) || 0) + 1
        );

    }

    const recurrentes = [];

    contadorPersonas.forEach((cantidad, persona) => {

        if (cantidad > 1) {

            recurrentes.push({
                persona,
                cantidad
            });

        }

    });

    return recurrentes;

}


// Encontrar la categoría con mayor cantidad de registros.
function categoriaEstrella(datos) {

    if (datos.length === 0) {
        return null;
    }

    const categorias = new Map();

    for (const registro of datos) {

        const categoria = registro.categoria;

        categorias.set(
            categoria,
            (categorias.get(categoria) || 0) + 1
        );

    }

    let categoriaMayor = null;
    let cantidadMayor = 0;

    categorias.forEach((cantidad, categoria) => {

        if (cantidad > cantidadMayor) {

            cantidadMayor = cantidad;
            categoriaMayor = categoria;

        }

    });

    return categoriaMayor;

}


// Encontrar dos registros que sumen exactamente el objetivo.
function parQueSuma(datos, objetivo) {

    const valores = new Map();

    for (const registro of datos) {

        const complemento = objetivo - registro.valor;

        if (valores.has(complemento)) {

            return [
                valores.get(complemento),
                registro
            ];

        }

        valores.set(registro.valor, registro);

    }

    return null;

}


// ---------- NIVEL 4 · Cola y pila ----------

const colaDeAtencion = [];


// Agregar una persona al final de la cola.
function llegar(persona) {

    colaDeAtencion.push(persona);

    return colaDeAtencion.length;

}


// Atender a la primera persona que llegó.
function atender() {

    if (colaDeAtencion.length === 0) {
        return null;
    }

    return colaDeAtencion.shift();

}


// PILA DE HISTORIAL (LIFO).

const historial = [];


// Agregar un registro y guardarlo en el historial.
function agregarRegistro(datos, registro) {

    datos.push(registro);

    historial.push(registro);

    return registro;

}


// Deshacer el último registro agregado.
function deshacer(datos) {

    if (historial.length === 0) {
        return null;
    }

    const ultimoRegistro = historial.pop();

    const indice = datos.lastIndexOf(ultimoRegistro);

    if (indice !== -1) {
        datos.splice(indice, 1);
    }

    return ultimoRegistro;

}



//--------- NIVEL 5 · COSTO Y CONTADOR DE PASOS --------


// Mostrar la cantidad de pasos realizados por cada algo    itmo.
function mostrarPasos() {

    console.log("Pasos de recurrentesLento:", pasos.recurrentesLento);

    console.log("Pasos de recurrentesRapido:", pasos.recurrentesRapido);

}


//---------- ZONA DE PRUEBAS ----------

console.log("\n========== NIVEL 1 · DATOS ==========");

console.log(mostrarRegistro(registros[0]));

console.log("Listado completo:");
listarTodo(registros);


console.log("\n========== NIVEL 2 · REPORTES ==========");

console.log("Total general:", totalGeneral(registros));

console.log("Total con arreglo vacío:", totalGeneral([]));

console.log("Promedio:", promedio(registros));

console.log("Registro mayor:", registroMayor(registros));

console.log(
    "Registros de Prestamo:",
    filtrarPorCategoria(registros, "Prestamo")
);

console.log(
    "Totales por categoría:",
    totalesPorCategoria(registros)
);


console.log("\n========== NIVEL 3 · SET Y MAP ==========");

console.log("Personas diferentes:", personasUnicas(registros));

console.log("Recurrentes lento:", recurrentesLento(registros));

console.log("Recurrentes rápido:", recurrentesRapido(registros));

console.log("Categoría estrella:", categoriaEstrella(registros));

console.log("Par que suma 30:", parQueSuma(registros, 30));

console.log("Par que suma 1000:", parQueSuma(registros, 1000));


// Comparación de pasos.
console.log("\nComparación de pasos:");

mostrarPasos();


console.log("\n========== NIVEL 4 · COLA Y PILA ==========");


// Pruebas de la cola.
llegar("Manuel P.");
llegar("Juan C.");
llegar("Carlos R.");

console.log("Cola inicial:", colaDeAtencion);

console.log("Persona atendida:", atender());

console.log("Cola después de atender:", colaDeAtencion);


//Pruebas de la pila.
const registrosPrueba = [...registros];

const nuevoRegistro = {
    persona: "Laura M.",
    categoria: "Prestamo",
    dia: 7,
    valor: 18
};

console.log("Registros iniciales:", registrosPrueba.length);

agregarRegistro(registrosPrueba, nuevoRegistro);

console.log("Después de agregar:", registrosPrueba.length);

console.log("Registro deshecho:", deshacer(registrosPrueba));

console.log("Después de deshacer:", registrosPrueba.length);


// Prueba de deshacer con historial vacío.
console.log("Segundo deshacer:", deshacer(registrosPrueba));
