total = require("./addshipcost")

test('verificar suma de costo de envío', ()=> {
    expect(total(240)).toBe(265)
    
    

} )

test('verificar suma de costo de envío, prueba 2', ()=> {
    expect(total(245)).toBe(270)

} )