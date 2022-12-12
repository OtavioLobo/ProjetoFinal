import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'


function RegisterPage() {

    const navigate = useNavigate();
    const goToLoginPage = () => {
      navigate('/');
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();


    const handleEmail=(event:any)=>{
        setEmail(event.target.value);
    
      }
    
    const handlePassowrd=(event:any)=>{
        setPassword(event.target.value);
    
      }

    const handlePassowrd2=(event:any)=>{
        setPassword2(event.target.value);
    
      }  

      const handleClick = () =>{
        console.log(email);
        console.log(password)
        console.log(password2)

         

        if (password != password2) {
            alert("Senhas diferentes")
        }

        else if (password == null && password2 == null && email == null) {
            alert("Preencha os campos")
        }

        else if (password == null) {
            alert("Coloque uma senha")
        }
        else if (email == null) {
          alert("Coloque um email")
      }
        
      else {
            goToLoginPage()
        }
        
      }
    
    return (
        <>
        <div className='Register'>
          <div className='RegisterBox'>
            <div className='RegisterHeader'>Register</div>
            
            <div className='inputs'>
  
              <input onChange={(e:any) => handleEmail(e)}       className='Email' placeholder='Entre com seu Email' type="text" />
              <input onChange={(e:any) => handlePassowrd(e)}    className='password' placeholder='Entre com sua Senha' type="password" />
              <input onChange={(e:any) => handlePassowrd2(e)}    className='password' placeholder='Entre com sua Senha' type="password" />
            
            </div>
  
            <div className='containerbutton'>
  
              <button  onClick={handleClick} className='submitbutton'>Criar Conta</button>
  
            </div>
          </div>
        </div>
      </>
    )
}

export default RegisterPage;