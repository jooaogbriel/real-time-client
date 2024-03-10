'use client'
import React, { FormEvent, useState } from 'react';
import logo from '@/app/images/x.webp'
import Image from 'next/image';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { z } from  'zod' 

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  imgUrl: z.string(),
});

export default function Page() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('http://localhost:3001/users/createUser', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
      const data = await response.json()
      // ...
    } catch (error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
  }
 

  return (
    <div className='flex flex-col w-screen md:flex-row justify-center items-center h-screen '>
      <div>
        <Image src={logo} alt='' className='md:w-[500px] w-[250px] '/>
      </div>

      <div className=' flex flex-col justify-between gap-4  w-full p-2 sm:w-1/2   md:items-start '>
        <h1 className=' md:text-7xl font-bold mb-10 hidden md:block w-full' >Acontecendo agora</h1>
       
        <form onSubmit={onSubmit} className='flex flex-col gap-3 text-black md:w-1/2 '>
          <h2 className='text-white font-bold text-2xl'>Criar sua conta</h2>
          <Input placeholder="Nome de Usuário" type="text" name='username' />

          <Input placeholder="Email" type="text" name='email'  />
          <Input placeholder="Senha" type="password" name='password'  />
          <Input placeholder="Img" type="text" name='imgUrl' />
          {/* <UploadButton
              endpoint="imageUploader"
              appearance={{button: {
                background: "white",
                padding: "1rem",
                color: "#fff",
              },
            }}
          /> */}
          <Button type='submit' value="Avançar"  />
        </form>
      </div>
    </div>
  );
};
