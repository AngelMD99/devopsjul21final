const validatePhone = require('./phone_validation').validatePhone

describe('Phone number validation tests',()=>{
    it('should run', ()=>{})

    it('should return false when phone number is empty', ()=>{
        expect(validatePhone('')).toBe(false)
    })

    it('should return false when phone length is less different than 10 digits', ()=>{
        expect(validatePhone('9417')).toBe(false)
    })

    it('should return true phone does not include other characters than numbers', ()=>{
        expect(validatePhone('6142569864')).toBe(true)
    })

    it('should return false when phone number include special characters', ()=>{
        expect(validatePhone('614-781201')).toBe(false)
    })

    it('should return false when phone number include letters', ()=>{
        expect(validatePhone('6IA5974315')).toBe(false)
    })

    
})