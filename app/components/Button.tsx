import { ButtonType } from "../types"

const Button = ({type, value}:any) => {
  return (
    <button className="bg-white font-bold open:border-green-500 rounded-full h-14" type={type}>{value}</button>
  )
}

export default Button