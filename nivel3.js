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



// ---------- NIVEL 3 · Set y Map ----------
// function personasUnicas(datos) {}
// function recurrentesLento(datos) {}
// function recurrentesRapido(datos) {}
// function categoriaEstrella(datos) {}
// function parQueSuma(datos, objetivo) {}



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
