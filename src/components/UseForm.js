import {useEffect, useState} from 'react'
import '../componentsCss/Form.css'

const UseForm = (callback , validator) => {
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const [errors, setError] = useState({

    });
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChannge = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setError(validator(values));
        setIsSubmit(true)
    }
    useEffect(() => {
        if(Object.keys(errors).length===0 && isSubmit){
            callback();
        }
        
    }, [errors,isSubmit,callback]);

    return {handleChannge, values, handleSubmit, errors};
}

export default UseForm;