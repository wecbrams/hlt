// 'use client';

// import { useState, useEffect } from 'react';

// export default function ProgramsPage() {
//   const [programs, setPrograms] = useState([]);
//   const [name, setName] = useState('');

//   useEffect(() => {
//     fetch('/api/programs')
//       .then(res => res.json())
//       .then(data => setPrograms(data));
//   }, []);

//   async function handleCreate() {
//     await fetch('/api/programs', {
//       method: 'POST',
//       body: JSON.stringify({ name }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     setName('');
//     const res = await fetch('/api/programs');
//     const data = await res.json();
//     setPrograms(data);
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Health Programs</h1>
//       <div className="flex gap-2 mb-6">
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2"
//           placeholder="Program Name"
//         />
//         <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Program
//         </button>
//       </div>
//       <ul className="space-y-2">
//         {programs.map((program: any) => (
//           <li key={program.id} className="border p-2">{program.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
'use client'; // VERY IMPORTANT!

import { useState, useEffect } from 'react';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => setPrograms(data));
  }, []);

  async function handleCreate() {
    await fetch('/api/programs', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });
    setName('');
    const res = await fetch('/api/programs');
    const data = await res.json();
    setPrograms(data);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Health Programs</h1>
      <div className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
          placeholder="Program Name"
        />
        <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Program
        </button>
      </div>
      <ul className="space-y-2">
        {programs.map((program: any) => (
          <li key={program.id} className="border p-2">{program.name}</li>
        ))}
      </ul>
    </div>
  );
}
