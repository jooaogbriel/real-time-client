'use client'
import React, { useState, FormEvent } from 'react';
import { UploadButton } from "@/app/utils/uploadthing";
import logo from '@/app/images/logo.jpg'
import Image from 'next/image';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';


export default function Page() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('http://localhost:3001/users/createUser', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      // Agora a resposta do servidor será exibida corretamente
      const data = await response.json();
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  }

  return (
    <div className='flex flex-col w-screen md:flex-row justify-center items-center h-screen '>
      <div>
        <Image src={logo} alt='' className='md:w-[500px] md:heigth-[470px] w-[250px] '/>
      </div>

      <div className=' flex flex-col justify-between gap-4 w-1/2  md:items-start '>
        <h1 className=' md:text-7xl font-bold mb-10 hidden md:block w-full' >Acontecendo agora</h1>
       
        <form onSubmit={onSubmit} className='flex flex-col gap-3 text-black '>
          <h2 className='text-white font-bold text-2xl'>Criar sua conta</h2>
          <Input placeholder="Nome de Usuário" type="text" />
          <Input placeholder="Email" type="text" />
          <Input placeholder="Senha" type="password" />
          <UploadButton
              endpoint="imageUploader"
              appearance={{button: {
                background: "white",
                padding: "1rem",
                color: "#fff",
              },
            }}
          />
          <Button value="Avançar"  />
        </form>
      </div>
      
    </div>
  );
}
