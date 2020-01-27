import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [blockClass, setBlockClass] = useState('ErrorBlockNo');

  useEffect(() => {
    const ageArrCheck = [];
    for(let i = 0; i < age.length; i++) {
      if(isNaN(parseInt(age[i]))) {
        ageArrCheck.push(age[i]);
      }
    }
    if(ageArrCheck.length > 0) {
      setAgeError('Only numbers!');
      setBlockClass('ErrorBlock');
    } else {
      setAgeError('');
      setBlockClass('ErrorBlockNo');
    }
  }, [age, ageError]);

  return(
    <form className="form">
      <input type="text" name="name" id="name" className='form-input' placeholder={'Name'} required />
      <input type="text" name="age" id="age" onChange={(e) => {
        setAge(e.target.value)
      }} className="form-input" placeholder={'Age'} required />
      { ageError !== '' && <span>{ageError}</span> }
      <input type="text" name="occupation" id="occupation" className="form-input" placeholder={'Occupation'} required />
      <div className={blockClass}></div>
      <input type="submit" name="submit" id="submit" className={'form-btn'} value={'Add item'} onClick={(e) => {
        e.preventDefault()
        let nameInputValue,
          ageInputValue,
          occupationInputValue;
        if(document.querySelector('#name').value.length < 1) {
          nameInputValue = 'Name';
        } else {
          nameInputValue = document.querySelector('#name').value;
        }
        if(document.querySelector('#age').value.length < 1 || isNaN(document.querySelector('#age').value / document.querySelector('#age').value)) {
          ageInputValue = 0;
        } else {
          ageInputValue = document.querySelector('#age').value;
        }
        if(document.querySelector('#occupation').value.length < 1 ) {
          occupationInputValue = 'Occupation';
        } else {
          occupationInputValue = document.querySelector('#occupation').value;
        }
        console.log(dispatch(addTodo(nameInputValue, ageInputValue, occupationInputValue)));
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#occupation').value = '';
      }}/>
    </form>
  )
}

export default connect()(AddTodo)