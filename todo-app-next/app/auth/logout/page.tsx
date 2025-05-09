'use client'

// src/pages/Logout.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/auth');
  }, [router]);

  return null;
};

export default Logout;
