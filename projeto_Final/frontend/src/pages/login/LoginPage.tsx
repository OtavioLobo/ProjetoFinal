import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  const [count, setCount] = useState(0)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail=(event:any)=>{
    setEmail(event.target.value);

  }

  const handlePassowrd=(event:any)=>{
    setPassword(event.target.value);

  }

  const handleClick = () =>{
    console.log(email);
    console.log(password)

    
     const admin = "otavio@gmail.com"
     const adminSenha = "123"

    if(email == admin && password == adminSenha) {
      goToHomePage()
    } else (
      alert("Email ou senha incorreto")
    )

  }

  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate('/register');
  }

  const goToHomePage = () => {
    navigate('/home');
  }

  return (
    <>
    
      <div className='Login'>
      <img src="lofi.svg" className='image'/>
        <div className='LoginBox'>
          <div className='LoginHeader'>Login</div>
          
          <div className='inputs'>

            <input onChange={(e:any) => handleEmail(e)} className='Email' placeholder='Entre com seu Email' type="text" />
            <input onChange={(e:any) => handlePassowrd(e)} className='password' placeholder='Entre com sua Senha' type="password" />
          
          </div>

          <div className='containerbutton'>

            <button onClick={handleClick} className='button'>Entrar</button>
            <button onClick={goToRegisterPage} className='submitbutton2' >Criar conta</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage