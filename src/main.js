import Cliente from './Cliente.js'
import Impuestos from './Impuesto.js'

const impuesto1 = new Impuestos()
impuesto1.montoBrutoAnual = 100000
impuesto1.deducciones = 5000

const cliente1 = new Cliente()
cliente1.nombre = 'Kika'
cliente1.impuesto = impuesto1

console.log(cliente1)
cliente1.calcularImpuesto()