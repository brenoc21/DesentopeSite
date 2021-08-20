import React from 'react'
import eqp1 from './Imgs/eqp1.jpg'
import Eqp2 from './Imgs/Eqp2.jpg'
import Eqp3 from './Imgs/Eqp3.png'

const Portfolio = props =>{
return(
    <div id='portfolio' className='container-fluid text-center bg-grey'>
                <h2>Nossos equipamentos</h2><br />
                <h4>Modernidade e praticidade!</h4>
                <div className='row text-center '>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Eqp3} alt='Eqp1' width='400' height='300' />
                            <p><strong>Nome</strong></p>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Eqp3} alt='Eqp2' width='400' height='300' />
                            <p><strong>Nome</strong></p>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Eqp3} alt='Eqp3' width='400' height='300' />
                            <p><strong>Nome</strong></p>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div><br />

               
            </div>  
)



}
export default Portfolio