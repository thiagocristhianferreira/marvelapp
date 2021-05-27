import { useHistory } from 'react-router-dom';

import './style.css'

function Login() {
  const history = useHistory();

  return (
    <section>
      <div id="login">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label htmlFor="email_login">Seu e-mail</label>
            <input
              id="email_login"
              name="email_login"
              required
              type="text"
              placeholder="exemplo@email.com"
            />
          </p>
           
          <p> 
            <label htmlFor="senha_login">Sua senha</label>
            <input
              id="senha_login"
              name="senha_login"
              required
              type="password"
              placeholder="ex. 123456789"
            /> 
          </p>
           
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label htmlFor="manterlogado">Manter-me logado</label>
          </p>
          
          <button
            className="join-buttom"
            type="submit"
            value="Logar"
            onClick={ () => {
              history.push('/marvelcharacters');
            } }
          >
            Logar
          </button>
          
          <p className="link">
            Ainda não tem conta?
            <a href="/join">Cadastre-se</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;