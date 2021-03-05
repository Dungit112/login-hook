import React from 'react'
import UseForm from './UseForm'
import '../componentsCss/Form.css'
import validatorForm from './ValidatorForm'
const FormSignup = ({submitForm}) => {
    const {values, handleChannge, handleSubmit, errors} = UseForm(submitForm,validatorForm);
    return (
        <div>
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    
                    <h1>Signup</h1>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                        id="username"
                        type="text"
                        name="username"
                        className='form-input'
                        placeholder="enter your username"
                        value={values.username}
                        onChange={handleChannge}
                        
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                        id="email"
                        type="text"
                        name="email"
                        className='form-input'
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChannge}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="password">Pass Word</label>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        className='form-input'
                        placeholder="enter your password"
                        value={values.password}
                        onChange={handleChannge}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="confirmpassword">Confirm PassWord</label>
                        <input
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        className='form-input'
                        placeholder="enter your confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChannge}
                        />
                        {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                    </div>
                    <button type="submit" className="form-input-btn" >SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default FormSignup
