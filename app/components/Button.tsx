const Button = ({type, value}:any) => {
  return (
    <button className="bg-white font-bold open:border-green-500 rounded-full h-14" type='submit'>{value}</button>
  )
}

export default Button