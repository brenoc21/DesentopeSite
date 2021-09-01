import React from 'react'
import Tamanho_certo from './Imgs/Logo_borda.png'

const Navbar = props => {
    return (
       
            
        <nav className='menuNav'> 

            
            <ul className='links' id='nav-ul'>
                <li><a href='#about'>Sobre</a></li>
                <li><a href='#services'>Serviços</a></li>
            </ul>
            <div className='logoMarca'>
                <a href='#home'>
                    <img src={Tamanho_certo} alt='Tamanho_certo' width='90' height='90' />

                </a>
            </div>
            <button className='Hamburger' id = 'Hamburger'>
                <i className='fas fa-bars'>

                </i>
            </button>
            <ul className='links' id='nav-ul'>

                <li><a href='#portfolio'>Equipamento</a></li>
                <li><a href='#contact'>Orçamento</a></li>

            </ul>
           
        </nav>
    )
}
export default Navbar