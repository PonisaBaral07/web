'use client'
import { useRouter } from 'next/navigation';

export default function Signout() {
  const router = useRouter();

  async function handleSignout() {
    try {
      await fetch('/api/signout');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button onClick={handleSignout} className='bg-red-800 text-white p-2 rounded-md'>
      Sign Out 
    </button>
  );
}