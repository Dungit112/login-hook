export default function validatorForm(values){
    let errors = {};
    if(!values.username.trim()){
        errors.username = "Username is required"
    };
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email Address is invalid"
    };
    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length<6){
        errors.password = "Password need to be 6 chareacter more"
    };
    if(!values.confirmpassword){
        errors.confirmpassword = "ConfirmPassWord is required"
    }else if(values.confirmpassword !== values.password){
        errors.confirmpassword = "ConfirmPassWord and Password do not match"
    }
    return errors
}