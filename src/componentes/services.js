import React from 'react'

const Services = props => {
    return(
        <div id='services' className='container-fluid text-center'>
                <h2>ACREDITAMOS EM</h2>
                <h4> </h4>
                <br />
                <div className='row '>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-flash logo-small'></span>
                        <h4>AGILIDADE</h4>
                        <p>Respondemos o seu chamado em 24h.</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-heart logo-small'></span>
                        <h4>AMOR</h4>
                        <p>Carinho e zelo pelo trabalho.</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-wrench logo-small'></span>
                        <h4>ESFORÇO</h4>
                        <p>Equipe comprometida com você.</p>
                    </div>
                </div>
                <br /><br />
                <div className='row2'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-leaf logo-small'></span>
                        <h4>SUSTENTABILIDADE</h4>
                        <p>Nos comprometemos com a manutenção do meio ambiente.</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-certificate logo-small'></span>
                        <h4>EFICIENCIA</h4>
                        <p>Solução rápida para o seu problema.</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-lock logo-small'></span>
                        <h4>EQUIPE QUALIFICADA</h4>
                        <p>Equipe qualificada e especializada em desentupimento.</p>
                    </div>
                </div>
            </div>
    )

}
export default Services