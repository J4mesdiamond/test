'use client'

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const {push} = useRouter() 

  const correctPassword = ['a', '2', 'A', '4', '1'];
  const correctEmail = ['ufuomararuvwe@gmail.com'];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputEmail === correctEmail[0] && inputPassword === correctPassword.join("")) {
      // Login successful, redirect to next page
      push(`/users`);
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <main>
      <h1 className=' text-center'>New User Login</h1>
      <form onSubmit={handleSubmit}  className='flex min-h-screen flex-col items-center gap-8 p-24'>
        <input
          type="email"
          value={inputEmail}
          placeholder="Enter Your Email"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          type="password"
          value={inputPassword}
          placeholder="Enter Your Password"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-active btn-primary">Login In</button>
      </form>
      <Link href="/users">Users</Link>
    </main>
  );
}