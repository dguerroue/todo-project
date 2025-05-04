import { useState } from 'react';
import api from '../../helpers/api';

type LoginFormProps = {
  onLogin: () => void;
};

const login = (email: string, password: string) => api.post('/auth/login', {email, password});

function LoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data } = await login(email, password);
    localStorage.setItem('token', data.token);
    props.onLogin();
    return data.user;
  }

  return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" autoComplete='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Submit</button>
      </form>
  )
}

export default LoginForm;