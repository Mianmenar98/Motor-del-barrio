// motor.js — El Motor del Barrio
// Célula: Amaterasu  Negocio: Biblioteca Publica de medellín

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

// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
  // devuelve un texto: "Día 1 · Persona · Categoría · valor"
return `dia: ${registro[0].dia} ; ${registro[0].persona} ; ${registro[0].categoria} ; ${registro[0].valor}`
}
function listarTodo(datos) {
    let lista = ""
    datos.forEach(element => {
        lista += `dia ${element.dia} ; ${element.persona} ; ${element.categoria} ; ${element.valor}\n`
    });
    return lista
}

console.log(mostrarRegistro(registros))
console.log(listarTodo(registros))




