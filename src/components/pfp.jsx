'use client'; // If using App Router

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProfileSection() {
  const [avatarUrl, setAvatarUrl] = useState('./pfp.jpg'); // Fallback

  useEffect(() => {
    fetch('https://api.github.com/users/simaaksidd')
      .then(res => res.json())
      .then(data => setAvatarUrl(data.avatar_url))
      .catch(err => console.error('Failed to fetch GitHub avatar:', err));
  }, []);

  return (
    <Image 
      src={avatarUrl} 
      alt='Profile' 
      height={800} 
      width={400} 
      className="rounded-full"
    />
  );
}