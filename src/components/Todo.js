import React from 'react'

export default function Todo(props) {

  const { item } = props;


  return (
    <div>
      {item.task}
    </div>
  )
}