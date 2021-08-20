import React from 'react'
import emailjs from 'emailjs-com'
import { Alert } from 'bootstrap';

export default function ContactUs(){

    function enviarEmail(e){
        e.preventDefault();

    emailjs.sendForm('gmailmessage', 'template_mx2sspk', e.target, 'user_viBsDE6mZvtxWkCRBD2io')
      .then((result) => {
          alert('Mensagem enviada com sucesso! :)')
      }, (error) => {
          alert(error.message)
      });
      e.target.reset();
    }
    return(
        
        <div id='contact' className='container-fluid bg-grey'>
                    <h2 className='text-center'>Contato</h2>
                    <form onSubmit={enviarEmail}>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p>Mande mensagem e responderemos dentro de 24h!</p>
                            <p><span className='glyphicon glyphicon-map-marker'></span> Fortaleza, CE</p>
                            <p><span className='glyphicon glyphicon-phone'></span> +55 (85) 99911-5024</p>
                            <p><span className='glyphicon glyphicon-envelope'></span> desentopecontato@gmail.com</p>
                        </div>
                        <div className='col-sm-7 '>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
                                </div>
                                <div className='col-sm-6 form-group'>
                                    <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                                </div>
                            </div>
                            <textarea className='form-control' id='comments' name='message' placeholder='Descrição do chamado' rows='5'></textarea><br />
                            <div className='row'>
                                <div className='col-sm-12 form-group'>
                                    <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
    )
}
