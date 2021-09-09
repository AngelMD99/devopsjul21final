function validatePhone(phone){
    let value = true;

    if (phone == "" || phone.length != 10){
        return false
    }
    else{

        for (let index = 0; index < phone.length; index++) {
            if (isNaN(Number(phone[index]))){
                value=false;
            }
  
        }

        return value;


        
    }
        
}

module.exports.validatePhone = validatePhone