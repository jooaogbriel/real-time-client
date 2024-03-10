import { Input } from "../types"

const Input = ({ type, placeholder, name }:Input) => {
  return (
    <input  type={type} name={name} placeholder={placeholder} className='w-full rounded h-[52px] text-white flex justify-start p-2 bg-black border border-gray-800' />
  )
}
export default Input