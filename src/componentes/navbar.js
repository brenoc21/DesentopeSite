import React, { useState } from 'react'
import Tamanho_certo from './Imgs/Logo_borda.png'


const Navbar = props => {
    const [showMenu, setShowMenu] = useState(false)
    let menu
    let Nome
    
    if(showMenu){
        menu = <div className='showMenu' >
        <ul className='linksHamburger' id='nav-ul'>
            <li><a href='#about'onClick = {() => setShowMenu(!showMenu)}>Sobre</a></li>
            <li><a href='#services'onClick = {() => setShowMenu(!showMenu)}>Serviços</a></li>
            <li><a href='#portfolio'onClick = {() => setShowMenu(!showMenu)}>Equipamento</a></li>
            <li><a href='#contact'onClick = {() => setShowMenu(!showMenu)}>Orçamento</a></li>
        </ul>
   </div>
    }else{
        Nome=<h6 className="NomeEmpresa">Desentope</h6>
    }
    
    return (
        <div>    
        <nav className='menuNav'> 

            {Nome}
            <ul className='links' id='nav-ul'>
                <li><a href='#about'>Sobre</a></li>
                <li><a href='#services'>Serviços</a></li>
            </ul>
            <div className='logoMarca'>
                <a href='#home'>
                    <img src={Tamanho_certo} alt='Tamanho_certo' width='60' height='60' />

                </a>
            </div>
            {menu}
            <div className = 'hamburger'>
                {!showMenu?
                <div className='glyphicon glyphicon-menu-hamburger' onClick = {() => setShowMenu(!showMenu)}></div>:
                <div className='glyphicon glyphicon-remove' onClick = {() => setShowMenu(!showMenu)}></div>
            }
                
            </div>
            
            
            <ul className='links' id='nav-ul'>

                <li><a href='#portfolio'>Equipamento</a></li>
                <li><a href='#contact'>Orçamento</a></li>

            </ul>
            
        </nav>
        </div>
    )
}
export default Navbar