import React from 'react'

//export default function Title(props) {
export default function Title({mainTitle}) {
  return (
    <h1 style={{backgroundColor:'orange', borderBottom:'5px solid red', textAlign:'center'}}>
        {/* {props.mainTitle} */}
        {mainTitle}
    </h1>
  )
}
