// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// export default function ClientProfile() {
//   const { id } = useParams();
//   const [client, setClient] = useState<any>(null);

//   useEffect(() => {
//     fetch(`/api/clients?q=${id}`)
//       .then(res => res.json())
//       .then(data => setClient(data.find((c: any) => c.id.toString() === id)));
//   }, [id]);

//   if (!client) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{client.name}</h1>
//       <p className="mb-2">Age: {client.age}</p>
//       <p className="mb-2">Symptoms: {client.symptoms}</p>

//       <h2 className="text-xl font-semibold mt-4">Enrolled Programs:</h2>
//       <ul className="list-disc list-inside">
//         {client.enrollments.map((e: any) => (
//           <li key={e.id}>{e.program.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState<any>(null);
  const [programs, setPrograms] = useState([]);
  const [selectedProgramId, setSelectedProgramId] = useState<number>(0);

  useEffect(() => {
    fetchClient();
    fetchPrograms();
  }, []);
  async function fetchClient() {
    const res = await fetch(`/api/clients/${id}`);
    const data = await res.json();
    setClient(data);
  }
  

// //   async function fetchClient() {
// //     const res = await fetch(`/api/clients?q=${id}`);
// //     const data = await res.json();
// //     setClient(data.find((c: any) => c.id.toString() === id));
// //   }
// async function fetchClient() {
//     const res = await fetch(`/api/clients?q=${id}`);
//     const data = await res.json();
  
//     if (Array.isArray(data)) {
//       setClient(data.find((c: any) => c.id.toString() === id));
//     } else {
//       setClient(data);
//     }
//   }
  
  async function fetchPrograms() {
    const res = await fetch('/api/programs');
    const data = await res.json();
    setPrograms(data);
  }

  async function handleEnroll() {
    if (!selectedProgramId) return;

    const res = await fetch('/api/enrollments', {
      method: 'POST',
      body: JSON.stringify({ clientId: client.id, programId: selectedProgramId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      alert('Client enrolled successfully!');
      fetchClient(); // Refresh client data
    } else {
      alert('Enrollment failed');
    }
  }

  if (!client) return <div className="p-6">Loading client...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{client.name}</h1>
      <p className="mb-2">Age: {client.age}</p>
      <p className="mb-2">Symptoms: {client.symptoms}</p>

      <h2 className="text-xl font-semibold mt-6">Enrolled Programs:</h2>
<ul className="list-disc list-inside mb-6">
  {Array.isArray(client.enrollments) && client.enrollments.length > 0 ? (
    client.enrollments.map((e: any) => (
      <li key={e.id}>{e.program.name}</li>
    ))
  ) : (
    <li>No programs enrolled yet.</li>
  )}
</ul>


      <h2 className="text-xl font-semibold mb-2">Enroll in a New Program:</h2>
      <select
        className="border p-2 rounded mb-4"
        value={selectedProgramId}
        onChange={(e) => setSelectedProgramId(Number(e.target.value))}
      >
        <option value={0}>Select Program</option>
        {programs.map((program: any) => (
          <option key={program.id} value={program.id}>
            {program.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleEnroll}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
      >
        Enroll
      </button>
    </div>
  );
}
