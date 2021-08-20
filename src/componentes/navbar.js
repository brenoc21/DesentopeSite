import React from 'react'
import Tamanho_certo from './Imgs/Logo_borda.png'

const Navbar = props => {
    return (
        <header>
                
                <div className='Hamburger on'>
                    
                <div className='One'></div>
                <div className='Two'></div>
                <div className='Three'></div>
                <div className='Four'></div> 
                
                   
                </div>
            
        <nav className='menuNav'> {/* navbar-default */}

            
            <ul className='links'>
                <li><a href='#about'>Sobre</a></li>
                <li><a href='#services'>Serviços</a></li>
            </ul>
            <div className='logoMarca'>
                <a href='#home'>
                    <img src={Tamanho_certo} alt='Tamanho_certo' width='90' height='90' />

                </a>
            </div>
            <ul className='links'>

                <li><a href='#portfolio'>Equipamento</a></li>
                <li><a href='#contact'>Orçamento</a></li>

            </ul>
           
        </nav>
        </header>
    )
}
export default Navbar