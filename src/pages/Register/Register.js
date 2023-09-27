import { useAuthentication } from "../../hooks/useAuthentication";

import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();


// importando o hook de autenticação
  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if (password!== confirmPassword) {
      setError("As senhas têm de ser iguais!")
      return;      
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(()=> {
    if (authError) {
      setError(authError);      
    }
  }, [authError]);



  return (
    <div className={styles.register}>
      <h1>Registra-te para postar!</h1>
      <p>Cria a tua conta e partilha as tuas fotos!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome de utilizador"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} 
            />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="displayName"
            required
            placeholder="Email do utilizador"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
        <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Corfirme a sua Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {!loading && <button className="btn">Registrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register