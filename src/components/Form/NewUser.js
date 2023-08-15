import React, { useState } from 'react';

const NewUser = () => {
    const [newForm, setNewForm] = useState({
        userName:'',
        age:''
    })

    console.log(newForm.age);

    const handleInputChange = (e) =>{
        setNewForm({...newForm,[e.target.name]: e.target.value});
    }
    return(
        <div>
            <form className="row">
                    <div className='form-group'>
                        <label htmlFor='validationUserName' className='form-label'>User Name</label>
                        <input type='text' value={newForm.userName} name='userName' onChange={handleInputChange} className={`form-control ${newForm.userName !== '' ? "is-valid" :"is-invalid" }`} id='validationUserName' />
                        {newForm.userName === '' &&                     
                        <div id="validationUserName" className="invalid-feedback">
                            Username must be filled
                        </div>}
                        <label htmlFor='validationUserName' className='form-label'>Age</label>
                        <input type='number' value={newForm.age} name='age' onChange={handleInputChange} className={`form-control ${newForm.age !== '' && newForm.age > 0 ? "is-valid" :"is-invalid" }`} id='validationUserName' />
                        {newForm.age <= 0 &&                     
                        <div id="validationUserName" className="invalid-feedback">
                            Age must be greater than 0
                        </div>}
                        {newForm.age === '' &&                     
                        <div id="validationUserName" className="invalid-feedback">
                            Age must be filled
                        </div>}
                    </div>                    
            </form>
        </div>
    )
}

export default NewUser;