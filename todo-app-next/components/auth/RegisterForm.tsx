import { useState } from 'react';
import axios from 'axios';

type RegisterFormProps = {
  onRegister: () => void;
};

const API_URL = 'http://localhost:5000/api/auth';

const register = (email: string, password: string) => axios.post(API_URL + '/register', {email, password});

export default function RegisterForm(props: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const { data } = await register(email, password);
    localStorage.setItem('token', data.token);
    props.onRegister();
    return data.user;
  }

  return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className='input w-full' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input className='input w-full' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <input className='input w-full' type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        <button className='btn' type="submit">Submit</button>
      </form>
  )
}