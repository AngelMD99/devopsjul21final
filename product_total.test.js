prod_total = require("./product_total")

test('verificar suma de costo de envío', ()=> {
    expect(prod_total(240,3)).toBe(720)
    
    

} )

test('verificar suma de costo de envío, prueba 2', ()=> {
    expect(prod_total(245,5)).toBe(1225)

} )