let type1 = 1
let type2 = 'string'
let type3 = Boolean('Boolean type with value true')
let type4 = null
let type5 = undefined
let type6 = Symbol(1)
let type7 = BigInt(13213213132123)
let type8 = {}


document.write(`<div style='background-color: aqua'>Exercise 1 : type of data </div>`)
document.write('<hr>')
document.write(typeof type1)
document.write('<hr>')
document.write(typeof type2)
document.write('<hr>')
document.write(typeof type3)
document.write('<hr>')
document.write('null has type ', typeof type4)
document.write('<hr>')
document.write(typeof type5)
document.write('<hr>')
document.write(typeof type6)
document.write('<hr>')
document.write(typeof type7)
document.write('<hr>')
document.write(typeof type8)
document.write('<hr>')

document.write( `<div style='background-color: aqua'>Exercise 2 : Arefsetics</div>`)
document.write('<hr>')

let arefm1 = 2 + 2
document.write(arefm1)
document.write('<hr>')

let arefm2 = arefm1 +3
document.write(arefm2)
document.write('<hr>')

let arefm3 = arefm2 - 3
document.write(arefm3)
document.write('<hr>')

let arefm4 = arefm2 + arefm3
document.write(arefm4)
document.write('<hr>')

let arefm5 = arefm4 - 5.555555
document.write(arefm5)
document.write('<hr>')

let arefm6 = arefm5 / 5
document.write(arefm6)
document.write('<hr>')

let arefm7 = arefm6 * 3
document.write(arefm7)
document.write('<hr>')

let arefm8 = arefm7 % 3
document.write(arefm8)
document.write('<hr>')


let arefm9 = 2 + 2 * 2
document.write(arefm9)
document.write('<hr>')

let arefm10 = 3 * 2 / 2 * 5
document.write(arefm10)
document.write('<hr>')


document.write(`<div style='background-color: aqua'>Exercise 3: Data type conversion</div>`)
document.write('<hr>')

let conv1 = Number('3')
document.write(conv1)
document.write('<hr>')

let conv2 = String(12323)
document.write(conv2)
document.write('<hr>')

let conv3 = Boolean('')
document.write(conv3)
document.write('<hr>')

let conv4 = Boolean(0)
document.write(conv4)
document.write('<hr>')

let conv5 = Boolean('asd')
document.write(conv5)
document.write('<hr>')

let conv6 = Boolean(3)
document.write(conv6)
document.write('<hr>')

document.write(`<div style='background-color: aqua'>Arithmetic operators</div>`)
document.write('<hr>')

let oper1 = 1
oper1++
document.write(oper1)
document.write('<hr>')


oper1--
document.write(oper1)
document.write('<hr>')

oper1++
let oper2 = oper1**3
document.write(oper2)
document.write('<hr>')


let oper3 = 11 + '1'
document.write(oper3)
document.write('<hr>')

let oper4 = '' + true
document.write(oper4)
document.write('<hr>')


let oper5 = true + true + ''
document.write(oper5)
document.write('<hr>')
