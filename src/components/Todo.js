import React from 'react'

const Todo = ({name, age, occupation, onDelete}) => (
  <div className="item" onContextMenu={onDelete}>
    <h3 className={'item-title'}>{ name.length < 1 ? 'Name' : name }</h3>
    <p className={'item-age'}>{ age.length < 1 ? 0 : age }</p>
    <p className={'item-occupation'}>{ occupation.length < 1 ? 'Occupation' : occupation }</p>
  </div>
)

export default Todo