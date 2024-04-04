"use client";
import { saveAs } from 'file-saver';

import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TambahPenduduk = () => {


//   const fields = [
//     {type: "text", name: "L_Tetap", required: true, label: "L Tetap"},
//     {type: "text", name: "P_Tetap", required: true, label: "P Tetap"},
//     {type: "text", name: "L_Musim_Datang", required: true, label: "L Pendatang"},
//     {type: "text", name: "P_Musim_Datang", required: true, label: "P Pendatang"},
//     {type: "text", name: "L_Musim_Keluar", required: true, label: "L Keluar"},
//     {type: "text", name: "P_Musim_Keluar", required: true, label: "P Keluar"},
//     {type: "text", name: "L_Lahir", required: true, label: "L Lahir"},
//     {type: "text", name: "P_Lahir", required: true, label: "P Lahir"},
//     {type: "text", name: "L_Meninggal", required: true, label: "L Meninggal"},
//     {type: "text", name: "P_Meninggal", required: true, label: "P Meninggal"},
//     {type: "text", name: "favorite_color", required: false, label: "Favorite color"},
// ]
  // const variable = ['L_Tetap', 'P_Tetap', 'L_Musim_Datang', 'L_Musim_Datang', 'L_Musim_Keluar', 'P_Musim_Keluar', 'L_Lahir', 'P_Lahir', 'L_Meninggal', 'P_Meninggal']
  // for (let i=0; i<=range(variable);i++) {
  //   const [`${variable[i]}, set${variable[i]} = useState('');`]
  // }
  const currentDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [rw, setRW] = useState('7');
  const [rt, setRT] = useState('1');
  const [date, setDate] = useState(currentDate);
  const [L_Tetap, setLTetap] = useState('');
  const [P_Tetap, setPTetap] = useState('');
  const [L_Musim_Datang, setLMusim_Datang] = useState('');
  const [P_Musim_Datang, setPMusim_Datang] = useState('');
  const [L_Musim_Keluar, setLMusim_Keluar] = useState('');
  const [P_Musim_Keluar, setPMusim_Keluar] = useState('');
  const [L_Lahir, setLLahir] = useState('');
  const [P_Lahir, setPLahir] = useState('');
  const [L_Meninggal, setLMeninggal] = useState('');
  const [P_Meninggal, setPMeninggal] = useState('');
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/excelData', {
        method: 'GET',
      });

      if (response.ok) {
        const { downloadUrl } = await response.json();
        const newDownloadUrl = `https://dblprfcpaguntuduujif.supabase.co/storage/v1/object/public/excelPenduduk/${downloadUrl}`;
        setDownloadUrl(newDownloadUrl);
      } else {
        console.error('Failed to get download URL');
      }
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  };

  const handleDownloadClick = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/postPenduduk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rw, rt, date, L_Tetap, P_Tetap, L_Musim_Datang, P_Musim_Datang, L_Musim_Keluar, P_Musim_Keluar, L_Lahir, P_Lahir, L_Meninggal, P_Meninggal }),
    });


    if (response.ok) {
      toast.success('Data submitted successfully');
    } else {
      toast.error('Failed to submit data');
    }

    const data = await response.json();
    console.log(data);
  };


  const RT = [];
  for(let i=1;i<=7;i++) {
    RT.push(`RT. 0${i}`);
  }

const test = 7;
  return (
<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">





    <div className="sm:col-span-2">

    <label className="block text-sm font-semibold leading-6 text-gray-900">Alamat</label>
      
    <div className="relative">

    <select value={rw} onChange={(e) => setRW(e.target.value)} id="rw" name="rw" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      <option value='7'>RW. 07</option>
            </select>



      <select value={rt} onChange={(e) => setRT(e.target.value)} id="rt" name="rt" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
      {RT.map((item, index) => (
          <option value={index+1} key={index}>{item}</option>
        ))}
            </select>
<select value={date} onChange={(e) => setDate(e.target.value)} name="date"  id="date" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">

<option value={currentDate} key="date">{currentDate}</option>

</select>


</div>



</div>









     


<label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk Tetap
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={L_Tetap} onChange={(e) => setLTetap(e.target.value)} type="text" id="L_Tetap" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={P_Tetap} onChange={(e) => setPTetap(e.target.value)} type="text" id="P_Tetap" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"  />
       
       
    </div>

    </div>
    

    <label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk Musim_Datang
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={L_Musim_Datang} onChange={(e) => setLMusim_Datang(e.target.value)} type="text" id="L_Musim_Datang" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={P_Musim_Datang} onChange={(e) => setPMusim_Datang(e.target.value)} type="text" id="P_Musim_Datang" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"  />
       
       
    </div>

    </div>
    

    <label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk Musim_Keluar
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={L_Musim_Keluar} onChange={(e) => setLMusim_Keluar(e.target.value)} type="text" id="L_Musim_Keluar" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={P_Musim_Keluar} onChange={(e) => setPMusim_Keluar(e.target.value)} type="text" id="P_Musim_Keluar" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"  />
       
       
    </div>

    </div>
    

    <label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk Lahir
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={L_Lahir} onChange={(e) => setLLahir(e.target.value)} type="text" id="L_Lahir" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={P_Lahir} onChange={(e) => setPLahir(e.target.value)} type="text" id="P_Lahir" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"  />
       
       
    </div>

    </div>
    

    <label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk Meninggal
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={L_Meninggal} onChange={(e) => setLMeninggal(e.target.value)} type="text" id="L_Meninggal" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={P_Meninggal} onChange={(e) => setPMeninggal(e.target.value)} type="text" id="P_Meninggal" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"  />
       
       
    </div>

    </div>



    </div>
    
    <div className="grid grid-cols-1 items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
      <button onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Generate Data
      </button>
      {downloadUrl && <button onClick={handleDownloadClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Download Data
      </button>}
    </div>
    <ToastContainer />
  </form>
  );
};

export default TambahPenduduk;