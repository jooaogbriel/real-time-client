'use client'
import React, { useState, FormEvent } from 'react';

export default function Page() {
  const [apiResponse, setApiResponse] = useState<string>('');

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
      setApiResponse(`Usuário cadastrado com sucesso. ID: ${data.id}`);
    } catch (error) {
      console.error('Error during form submission:', error);
      setApiResponse('Erro ao cadastrar usuário. Por favor, tente novamente.');
    }
  }

  return (
    <div className='flex justify-around items-center'>
      <div>
        <h1>IMAGEM - LOGO</h1>
      </div>

      <div className=' flex flex-col justify-between'>
        <h1 className=' text-7xl font-bold' >Acontecendo agora</h1>
        <h2 className='text-4xl font-bold'>Inscreva-se hoje</h2>
        <form onSubmit={onSubmit} className='flex flex-col gap-3 text-black'>
          <input type="text" name="email" />
          <input type="text" name="username" />
          <input type="text" name="password" />
          <input type="text" name="imgUrl" />
          <button className='bg-white' type="submit">Submit</button>
        </form>
      </div>
      {/* Exiba a resposta da API ou mensagens de erro/sucesso */}
      {apiResponse && <p>{apiResponse}</p>}
    </div>
  );
}
