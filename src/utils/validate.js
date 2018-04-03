//function to validate name field
export const validateName = function (name){
    /* regular expression for name accepting only names beginning 
    with an alphabet and not containing special character */
    var reg=/^[a-zA-Z\s]+$/;
    if(!reg.test(name)){
       return false;
    }
    else{
        return true;
    }
}

//function to validate email field
export const validateEmail = function (email){
    //regular expression for email taking format abc@gmail.com
    var reg = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
    if(!reg.test(email)){
        return false;
    }
    else{
        return true;
    }
}

//function to validate phone field
export const validatePhone = function (phone){
    //regular expression for phone taking format 9999999999
    var reg = /^(\+\d{1,2})?\(?\d{3}\)?\d{3}\d{4}$/;
    if(!reg.test(phone)){
        return false;
    }
    else{
        return true;
    }
}