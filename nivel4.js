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