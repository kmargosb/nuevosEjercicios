
// Ejercicio 1
// 1 - Crea una funcion que reciba dos numeros y RETORNE la suma de estos

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const suma = (num1, num2) => {
    return num1 + num2
}
console.log(suma(3, 3))

// Ejercicio 2
// 2 - Crea una funcion que reciba un array y RETORNE su longitud

const arrayLenght = (array) => {
    return array.length
}

console.log(arrayLenght(numeros))

// Ejercicio 3
// 3 - Crea una funcion que reciba un numero y RETORNE el cuadrado de ese numero

const cuadradoN = (num) => {
    return Math.pow(num, 2) || num * num
}

console.log(cuadradoN(10));

// Ejercicio 4
// 4 - Crea una funcion que reciba un string y RETORNE la letra en la posicion 3 si existe, si no existe, que retorne null

const letraPosicion = (string) => {
    console.log(string.length)
    if (string.length <= 3) {
        return null
    } else {
        return string[3]
    }
}

console.log(letraPosicion("al"));

// Ejercicio 5
// 5 - Crea una funcion que reciba un array con numeros y que RETORNE un array con los numeros pares

const even = (arrayNro) => {
    let newArray = []
    for (const nro of arrayNro) {
        if (nro % 2 == 0) {
            newArray.push(nro)
        }
    }
    return newArray
}

console.log(even(numeros));

// Ejercicio 6
// 6-  Crea una funcion que reciba un array de numeros y retorne un array conteniendo los cuadrados de esos mismos numeros ( usen metodos de array )

const cuadradoNro = (array2) => {
    const arrayCuadrado = []
    for (const nro of array2) {
        arrayCuadrado.push(Math.pow(nro, 2))
    }
    return arrayCuadrado
}

console.log(cuadradoNro(numeros));

// Ejercicio 7
// 7- Crea una funcion que reciba un objeto vacio, y un string. La funcion debe retornar un objeto con una propiedad .name con el valor del string que
//    recibió.

const objetoVacio = {}
const nuevoString = "soy un nuevo string ahora vamos a probar"

const objeto = (objetoVacio, string) => {
    objetoVacio.name = string
    return objetoVacio
}

console.log(objeto(objetoVacio, nuevoString))

// Ejercicio 8
// 8 - Crea una funcion que reciba un array vacio y retorne un array con los numeros del 1 al 10 de esta manera : [1,2,3,4...]

const array1a10 = (array) => {
    let newArray = []
    for (let i = 1; i <= 10; i++) {
        newArray.push(i)
    }
    return newArray
}

console.log(array1a10([]))

// Ejercicio 9
// 9- Crea una funcion que reciba un numero y retorne la suma de los numeros del 1 hasta dicho numero

const sumaDeNumeros = (num) => {
    let suma = 0
    for (let i = 1; i <= num; i++) {
        suma += i
    }
    return suma
}

console.log(sumaDeNumeros(34351236))

// Ejercicio 10
// 10 - Crea una funcion que reciba un string y que retorne el numero de letras 'a' que existen en ese string

const nroDeLetrasA = (string) => {
    let sumaLetras = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a') {
            sumaLetras++
        }
    }
    return sumaLetras
}

console.log(nroDeLetrasA(nuevoString))


// Ejercicio 11
// 11 - Crea una funcion que reciba boolean y que si es true retorne un string 'Si puedes pasar', si el boolean es false, que retorne 'No puedes pasar'

const entrada = (boolean) => {
    return boolean ? "si puedes pasar" : "No puedes pasar"
}
console.log(entrada(false))


// Ejercicio 12
// 12 - Crea una funcion que reciba un dos parametros de tipo numero : Numero de balas, Numero de dragones. La funcion tiene que retornar true o false
// si con el numero de balas puedes matar al numero de dragones. La relacion es que con 2 balas se mata a 1 dragon.

const mataDragon = (balas, dragones) => {
    if (balas / 2 >= dragones) {
        return true
    } else { return false }
}

console.log(mataDragon(10, 5));


// Ejercicio 13
// 13 - Crea una funcion que reciba un string y retorne true o false si la letra 't' existe en el string.

const existeT = (string) => {
    return string.includes("t") ? true : false
}

console.log(existeT("aaaaaaaaaaaaaa aaaaaaaaaaaat fdfffff"))


// Ejercicio 14
// 14 - Crea una funcion que reciba un objeto y cree una etiqueta 'p' y una etiqueta 'img'. 
// La funcion tiene que retornar un elemento div con esos dos elementos p e img dentro. 
// El innertext de 'p' es la propiedad .name del objeto que viene y el src de la img es la propiedad .icon

const inerHtml = (objeto) => {
    return ` 
    <div>
    <p>${objeto.name}</p>
    <img src="${objeto.icon}">
    </div>`
}

console.log(inerHtml({ name: "probando", icon: "www.tuicono.com.ve" }))


// Ejercicio 15
// 15 - Crea una funcion que reciba un array de objetos con propiedad .edad y retorne un array con los objetos que su edad sea mayor a 18 

const estudiantes = [{ name: "pepito", edad: 11 }, { name: "nelson", edad: 35 }, { name: "enrique", edad: 20 }, { name: "rigoberto", edad: 18 }]
const arrayObjetos = (arrayDeObjetos) => {
    let newArrayDeObjetos = []
    arrayDeObjetos.forEach(estudiante => {
        estudiante.edad >= 18 ? newArrayDeObjetos.push(estudiante) : ""
    });
    return newArrayDeObjetos
}

console.log(arrayObjetos(estudiantes));


// Ejercicio 16
// 16 - Crea una funcion que reciba un 3 parametros : name, lastName y age. La funcion tiene que retornar un objeto con esos tres valores
// y ademas una propiedad que sea .isMarried marcada a true si la age es mayor a 25, de lo contrario sera false

const married = (name, lastName, age) => {
    const objeto = { name: name, lastName: lastName, age: age }
    age >= 25
        ? objeto.isMarried = true
        : objeto.isMarried = false

    return objeto
}

console.log(married("nelson", "camargo", 24))


// Ejercicio
// 17 - Crea una funcion que reciba 2 numeros : distancia y tiempo(en segundos). La funcion tiene que retornar la velocidad con esos datos

const velocidad = (distancia, tiempo) => {
    return distancia / tiempo + " " + "m/s"
}

console.log(velocidad(1000, 2))


// Ejercicio 18
// 18 - Crea una funcion que reciba 2 numeros : a y b. La funcion tiene que retornar el resultado de la formula de trinomio cuadrado
// perfecto que es (a al cuadrado + 2.a.b + b al cuadrado).

const trinomioCuadradoPerfecto = (a, b) => {
    return Math.pow(a, 2) + 2 * (a * b) + Math.pow(b, 2)
}

console.log(trinomioCuadradoPerfecto(2, 3))

// Ejercicio 19
// 19 Crea una funcion que reciba 3 numeros y te de los 2 resultados de una formula de segundo grado (busquenla en internet)

const formulaSegundoGrado = (a, b, c) => {
    let x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*(a*c))) / (2*a)
    let x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*(a*c))) / (2*a)

    return `${x1} ${x2}`
}

console.log(formulaSegundoGrado(2,5,2))

// Ejercicio 20
// 20 - Crea una funcion que reciaba un string que sera una frase. La funcion debera retornar esa misma frase pero sin espacio
// y con las letras todas en minusculas a excepción de la primera.

const frase8 = (string) => {
    let frase = string.toUpperCase().split('')
    let newFrase = []
    frase.forEach(e =>{
        if(e != ' '){
            newFrase.push(e)
        }
    })
    let arrayFrase = newFrase.join('')
    let letra1 = arrayFrase.charAt(0)
    let resto = arrayFrase.slice(1).toLowerCase()
    
    return letra1+resto
}

console.log(frase8(nuevoString))