import React, { useContext } from 'react'
import { Context } from "../App";
type Props = {
  data?: any
  target: string
}

const Input = (props: Props) => {
  const { data, target } = props
  const ctx = useContext(Context)
  const { editGlobalObj } = ctx

  const handleChange = (e) => {
    const value = e.target.value
    console.log(value);
    editGlobalObj(target, value)
  }
  return (
    <input placeholder='请输入你的数据' onChange={handleChange} {...data} />
  )
}

export default Input