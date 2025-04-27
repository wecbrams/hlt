
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);
  async function fetchClients() {
    const res = await fetch(`/api/clients?q=${q}`);
  
    if (!res.ok) {
      console.error('Failed to fetch clients');
      return;
    }
  
    const data = await res.json();
    setClients(data);
  }
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border p-2"
          placeholder="Search Clients"
        />
        <button onClick={fetchClients} className="bg-green-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <ul className="space-y-2">
        {clients.map((client: any) => (
          <li key={client.id} className="border p-2">
            <Link href={`/clients/${client.id}`}>
              {client.name} (Age {client.age})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
