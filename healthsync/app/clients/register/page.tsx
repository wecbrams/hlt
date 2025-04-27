'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterClientPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(0);
  const [symptoms, setSymptoms] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/clients', {
      method: 'POST',
      body: JSON.stringify({ name, age, symptoms }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      const data = await res.json();
      alert(`Client registered! Recommended programs: ${data.recommended.join(', ')}`);
      router.push('/clients');
    } else {
      alert('Failed to register client');
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Register New Client</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          className="border p-2 rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />
        <textarea
          className="border p-2 rounded"
          placeholder="Describe Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Register Client
        </button>
      </form>
    </div>
  );
}
