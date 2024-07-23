
import ts from '../assets/images/logoTS.webp'
import react from '../assets/images/logoReact.png'
import stylesDefaul from '../styles/styles'

const Fondo = () => {
  return (
    <div className='absolute  w-full h-[100vh]'>

     <div className='mov_horizontal'>
     <img src={react} alt="" className={`${stylesDefaul.logos_tech} ` } />
      <img src={ts} alt=""  className={`${stylesDefaul.logos_tech}`} />
      <img src={react} alt="" className={`${stylesDefaul.logos_tech} ` } />
      <img src={ts} alt=""  className={`${stylesDefaul.logos_tech}`} />
     </div>

    </div>
  )
}

export default Fondo
