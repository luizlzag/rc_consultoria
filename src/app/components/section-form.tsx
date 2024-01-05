"use client";
import React,{useState} from 'react'
import GridContainer from './grid';


function SectionForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: any) => {
        console.log('enviado')
      };
    return ( 
    <section className='pt-20 bg-gray-200 p-4' id='form'>
        <GridContainer className='grid grid-cols-2 gap-6 max-md:grid-cols-1'>
            <form onSubmit={handleSubmit} className=" bg-white rounded-md px-4 py-4 shadow">
              <h1 className='text-center text-xl font-bold mb-2'>ENVIE UMA MENSAGEM !</h1>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="seuemail@exemplo.com"
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Assunto</label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Assunto da mensagem"
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensagem</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Escreva sua mensagem"
                        rows={4}
                        required
                        ></textarea>
                    </div>
                    <button type="submit" className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
             </form>
             <div className='bg-white rounded-md px-4 py-4 text-center align-middle'>
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
             </div>
        </GridContainer>
    </section> 
    );
}

export default SectionForm;