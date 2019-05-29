import * as tf from "@tensorflow/tfjs-node";
import iris from "./data/iris.json"
import irisTest from "./data/iris-testing.json"

/**
 * Las entradas y salidas de una red neural deberan ser tratadas
 * como tensores debido a que es la forma en como se operan 
 * estas estructuras de datos dentro del framework (aunque la justificacion
 * vas mas alla en un enfoque matematico)
 * 
 **/


/**
 * Primero, debemos realizar la traduccion de  nuestros datos 
 * a tensores.
 **/

const array = [1, 2, 3, 4]
const tensor = tf.tensor2d([array])
console.log(tensor);
console.log(tensor.print());

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
const tensor2 = tf.tensor2d(matrix)
console.log(tensor2);
console.log(tensor2.print());


/**
 * Convirtiendo nuestros datos a estructuras tensoriales
 * */

// 1. Convierte los datos en arreglos o en una matriz.
// 2. Usar tf.tensor2d para convertirlos en tensores
const trainingData = undefined
const testData = undefined



/**
 * La maquina no puede computar clases con valores alfanumericos
 * por ejemplo una red neuonal no entiende que es "cachorro"o "papaya"
 * debemos proporcionar una estructura de datos la cual represente nuestras
 * salidas.
 * Una de las codificaciones mas famosas se llama OHE (One Hot Encoding)
 * SUponiendo que tenemos 4 clases :
 *      - cachorro                  [1,0,0,0]
 *      - papaya   ==> | OHE | ==>  [0,1,0,0]
 *      - peaton                    [0,0,1,0]
 *      - nubes                     [0,0,0,1]
 */


/* Se te ocurre alguna idea de como realizar una salida de
 *  este estilo ?
 * Recuerad: Dentro de nuestros datos la clave 'species' guarda la clase
 * a la que pertenece nuestra muestra.
 */
console.log(iris[0].species); // Ejemplo de la salida de la primera muestra

const outputTrainingData = undefined

/**
 * Construir un modelo con el api Layers de tensorflowJs
 * es muy parecido a realizarlo con el api de Keras.
 * Keras : Deep Learning for humans.
 *         Es una biblioteca de codigo abierto que permite
 *         construir arquitecturas de redes neuronales en
 *         alto nivel. Nos despreocupamos de muchos detalles
 *         tecnicos a la hora de realizar nuestros prototipos
 *         de redes neuronales
 *  */


//Usaremos el modo secuencial (Es como armar mediante bloques de lego)

const model = tf.sequential()

/**
 *  Existen muchas arquitecturas de redes neuronales,
 *  cada una pensada para solucionar un grupo de problemas
 *  En este ejemplo usaremos una red densa (totalmente conectada)
 */


/**
 * Por ejemplo una red densa con 2 capas en donde la primer capa
 * tiene 5 neuronas y la segunda 8, se realizaria de la siguiente forma
 */


// model.add(tf.layers.dense({
//     inputShape: [4],
//     activation: "sigmoid",
//     units: 5,
// }))

// model.add(tf.layers.dense({
//     activation: "sigmoid",
//     units: 5,
// }))


/**
 * Ahora, es tu turno, 
 * Crea una arquitectura con la siguiente configuracion:
 *  Capa 1 = 5 neuronas activadas con la funcion 'sigmoid'
 *  Capa 2 = 4 neuronas activadas con la funcion 'relu'
 *  Capa 3 = 3 neuronas activadas con la funcion 'relu'
 * 
 * Nota : Recuerda indicar la entrada (inputShape) en cada capa
 */

/**
 * Debemos uncluir la capa de salida, la cual, nos dira a que clase pertenecen
 * nuestras muestras. Las salidas de las neuronas de la Capa 3 son numeros 
 * que podrian parecer sin sentido. Sin embargo, podemos llevar esos numeros
 * a terminos probabilisticos incluyendo una ultima capa(se le llama capa de salida)
 * activada mediante una funcion softmax, la cantidad de neuronas debe ser el numero
 * de clases a predecir.
 * 
 */

// model.add(tf.layers.dense({
//     activation: "softmax",
//     units: 3,
// }))


/**
 * El ultimo paso del ensamble de la arquitectura de red neuronal es
 * compilar el modelo. En otras palabras, pegar toda la red y aplicar
 *  los ultimos detalles.
 **/

/** 
 * Como aprenden estos sistemas ?
 * Se dice que un sistema (biologico o no biologico) aprende si tenemos una tarea (T)
 * a la cual podemos evaluar mediante el desempeno (P) de una metrica y dicho desempeno
 * mejora mientras el sistema adquiere una experiencia (E)
 * */

/**
 * En otras palabras, por ejemplo cuando empezamos a programar en JavaScript al principio 
 * revisamos mucha documentacion de distintas fuentes. En este caso nuestra tarea T es aprenden
 * JavaScript y podemos evaluar nuestro desempeno en dicha tarea contando el numero de veces
 * que realizamos una busqueda en el api, stackoverflow o google. A medida que programamos (experiencia E)
 * esa medida probablemente empezara a decaer a lo largo del tiempo (minutos, dias, meses, an`os)
 * si esa metrica baja a lo largo del tiempo se dice que aprendimos.
 */


/**
 * Para el aprendizaje profundo (en general para el machine learning),
 * la tarea puede estar en tres ramas principales cada una con problemas bien definidos.
 * (Clasificar, predecir un numero etc...). Las metricas normalmente son medidas de distancia
 * como la distancia euclidiana (Recuerdas el triangulo de pitagoras?) entre vectores. Tambien 
 * existen metricas que se encargan de evaluar que tanto nos equivocamos y de esa forma penalizar
 * los sistemas.
 */


/**
 * El proceso de aprendizaje es un mecanismo iterativo basado en la optimizacion de 
 * funciones matematicas. Existen muchos algoritmos capaces de lograr dicha optimizacion
 * y encontrar los puntos donde la metrica se hace lo mas pequena posible.
 */


// Agrega una capa densa de 3 neuronas y activacion softmax

// Compila tu modelo mediante la funcion de perdida loss:'categoricalCrossentropy' y 
// el optimizador tf.train.adam(.06)


// model.compile({
//     loss: "HERE LOSSS",
//     optimizer: HERE OPTIMIZER,
// })

// ES HORA DE ENTRENAR NUESTRO MODELO!!!



let train = async () => {

}
let inference = async () => {

}

/**
 * Experimentemos....
 * Realiza 3 entrenamientos donde varies el numero de epocas [10, 50, 100]
 * Que pasa si cambiamos el 0.6 de tf.train.adam(.06) por 0.1, 0.7 o 0.9 ?
 * Que pasa si escribimos mas  o menos capas ?
 */