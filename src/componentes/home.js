import React from 'react'
import Tamanho_certo from './Imgs/Cano_verde.png'


const Home = props => {
    
    return (
        <div>
            
            <div id='home' className='jumbotron text-center'>
               
                <h1>Desentope</h1>
                <p>Nós nos especializamos em desentupimento!</p>


            </div>
            <div id= 'teste'></div>
            <div id='about' className='container-fluid'>
                <div className='ServiceContainer2'>
                    <div className='col-sm-8'>
                        <h2>Sobre nós</h2><br />
                        <h4>Trabalhamos com excelência no desentupimento. Nossa equipe especializada realiza os serviços com toda a dedicação e comprometimento.</h4><br />
                        <p>Temos o objetivo de facilitar a vida de nossos clientes, fazendo um serviço limpo, organizado e com garantia de qualidade. Temos como missão ser referência no mercado de desentupimento e oferecer serviços de altíssima qualidade.</p>
                        <br /><a href='#contact'><button className='btn btn-default btn-lg' >Entre em contato!</button></a>
                    </div>
                    <div className='col-sm-4'>
                        <img src={Tamanho_certo} alt='Tamanho_certo' width='300' height='300' />
                    </div>
                </div>
            </div>
           
            <div className='container-fluid bg-grey'>
                <div id='services' className='container-fluid text-center'>
                    <h2>Serviços</h2>
                    <h4> </h4>
                    <br />

                    <div className='ServiceContainer'>


                        <div className='coluna'>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Serviço de auto vácuo</h4>
                            </div>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Limpeza de caixas de gordura</h4>
                            </div>

                        </div>

                        <div className='coluna'>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Desentupimento com roto tooter</h4>
                            </div>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Limpeza de galerias e rede de esgoto</h4>
                            </div>
                        </div>
                        <div className='coluna'>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Desentupimento de rede de esgoto</h4>
                            </div>
                            <div className='rowService'>
                                <span className='glyphicon glyphicon-chevron-right logo-small'></span>
                                <h4>Desentupimento e limpeza de caixas de gordura</h4>
                            </div>
                        </div>





                    </div>


                </div>
            </div>


        </div>

    )
}
export default Home