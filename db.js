users = [{
    username:"User Six",
    password:"Pa55word.",
    user_Id: 6
}]

function getUser(username,password){
    foundUser = users.find(user=>{return user.username==username&&user.password==password})

    if(foundUser != undefined){
        return foundUser
    }else{
        return null
    }
}

module.exports.getUser = getUser