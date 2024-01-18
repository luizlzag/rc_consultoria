"use client";
import React,{useState} from 'react'
import GridContainer from './grid';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

function SectionForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [wpp, setWpp] = useState('')

  function sendEmail(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(name === '' || email === ''|| message==='' || wpp===''){
      alert("Preencha todos os dados")
      return;
    }
    const templateParams = {
      from_name: name,
      message: message+" WhatsApp:"+wpp,
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
    <section className='pt-10 p-4' id='form'>
        <GridContainer className=' flex  items-center gap-6 bg-white rounded-xl shadow-lg max-md:grid'>

        <div className='bg-white rounded-md px-4 py-4 text-center align-middle text-secondary-400 grid'>
                <div className='grid gap-4 mb-4 text-lg cursor-pointer max-md:text-sm'>
                    <a  href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank' className=' rounded  py-10 px-8 bg-primary-100
                    brightness-75
                    hover:brightness-110
                    transition-all duration-500 flex items-center justify-center gap-2'><FaWhatsapp/>(17) 99171-7370</a>
                    <a href='mailto:contato@rcconsultoriatributaria.com.br' target='_blank' className=' rounded  py-10 px-8 bg-primary-100
                    brightness-75
                    hover:brightness-110
                    transition-all duration-500 flex items-center justify-center gap-2'><MdEmail/>contato@rcconsultoriatributaria.com.br</a>
                    <a href='https://www.instagram.com/rctributaria/?hl=fr' target='_blank' className=' rounded  py-10 px-8 bg-primary-100
                    brightness-75
                    hover:brightness-110
                    transition-all duration-500 flex items-center justify-center gap-2'><PiInstagramLogoBold/>@RCConsultoria</a>
                    <a href='https://maps.app.goo.gl/7xxt2a4ykWH5ehEAA' target='_blank'  className=' rounded  py-10 px-8 bg-primary-100
                     brightness-75
                     :hover:brightness-110
                    transition-all duration-500 flex items-center justify-center gap-2'><TbBrandGoogleMaps/>Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP</a>
                </div>
        </div>


          <div className=' m-6 py-4 px-4 w-full '>
            <h1 className='text-2xl font-bold'>Fale com a RC Consultoria</h1>
            <p className='text-black text-base'>Em breve nossos especialistas entraram em contato</p>
             <form  onSubmit={sendEmail}>
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
                        <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">Whatsapp</label>
                        <input
                        type="text"
                        id="WhatsApp"
                        name="WhatsApp"
                        value={wpp}
                        onChange={(e)=>setWpp(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Seu melhor numero"
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
            </div>


        </GridContainer>
    </section> 
    );
}

export default SectionForm;