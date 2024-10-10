import React from 'react'

const validPassword = () => <h1>validPassword</h1>
const inValidPassword = () => <h1>inValidPassword</h1>

const Password = ({isValid}) => isValid ? <validPassword/> : <inValidPassword />;    

export default Password;