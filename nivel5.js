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
  // ... completen hasta tener mínimo 24 registros
];


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
