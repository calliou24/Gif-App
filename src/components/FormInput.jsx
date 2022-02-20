import React, {useState} from 'react';
import PropTypes from 'prop-types'



export const FormInput = ( {add, reset} ) => {

    const [targetValue , setTargetValue] = useState('')
    //important that this use state have the argument of an Empty String of something 
    //we dont want to have a undefined props inside our component
    function sendValue(e) {
        
        e.preventDefault()
        add( e.target.firstChild.value)
        e.target.firstChild.value = ""
        setTargetValue("")
    }
    function setTargetValueReset(e) {
        
        e.preventDefault()
        reset()

    }
    return (
        <div className='form-cont'> 
        <p>Search</p>
        <form  onSubmit={ e => sendValue( e )}>
            <input onChange={ e => setTargetValue( e.target.value)}placeholder="..."/>
            <p className="text-reflect">{targetValue}</p>
            <button type='submit' className='btn-add-cat'>Add</button>
            <button onClick={e => setTargetValueReset(e)} type='submit' className='btn-add-cat'>Reset</button>
        </form>
        </div>
    )
} 

FormInput.propTypes = { 
    add : PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired
}