"use client";
import React,{useState} from 'react'
import GridContainer from './grid';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';


function SectionForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(name === '' || email === ''|| message==''){
      alert("Preencha todos os dados")
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    emailjs.send("service_iyqgili","template_1cbfqjj",templateParams,"Jz_f6I01jXwjFu9v0")
    .then((response)=>{
      console.log("EMAIL ENVIADO", response.status,response.text)
      setName('')
      setEmail('')
      setMessage('')
    },(err)=>{console.log("ERRO",err)})
  }


    return ( 
    <section className='pt-10 bg-gray-200 p-4' id='form'>
        <GridContainer className='flex justify-center items-center gap-6 max-md:grid-cols-1 bg-white rounded-xl shadow-lg max-md:grid'>
        <div className='m-6'>
          <MdOutlineEmail size={48} color={'white'} className='rounded-full bg-secondary-500 py-2 px-2' />
          <h1 className='text-2xl font-bold'>Fale com a RC Consultoria</h1>
          <p className='text-black text-base'>Em breve nossos consultores entrarão em contato com você</p>
          </div>
            <form  onSubmit={sendEmail} className=" bg-slate-50 shadow-md rounded-md w-[50%] max-md:w-[80%]  m-6 py-4 px-4 ">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Seu nome"
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="seuemail@exemplo.com"
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensagem</label>
                        <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Escreva sua mensagem"
                        rows={4}
                        required
                        ></textarea>
                    </div>
                    <input type="submit" value="Enviar" className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer"/>
             </form>
             {/* <div className='bg-white rounded-md px-4 py-4 text-center align-middle'>
                <h1 className='font-bold text-4xl'>CONTATO</h1>
                <p className='text-xl text-black mb-4'>Dúvidas, reclamações, sugestões ou elogios? Entre em contato conosco!</p>
                <div className='grid gap-4 mb-4 text-lg cursor-pointer max-md:text-sm'>
                    <a>(17) 99171-7370</a>
                    <a>rc_consultoriatributaria</a>
                    <a>rc consultoria tributaria</a>
                    <a>contato@rcconsultoriatributaria.com.br</a>
                </div>
                <p className='text-black'>Fale com um de nossos consultores</p>
                <button className='rounded px-2 py-2 0'>Fale agora pelo WhatsApp!</button>
             </div> */}
        </GridContainer>
    </section> 
    );
}

export default SectionForm;