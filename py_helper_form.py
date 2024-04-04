List = ['Tetap', 'Musim_Datang', 'Musim_Keluar', 'Lahir', 'Meninggal']
set = ['{(e) => setLTetap(e.target.value)}', '{(e) => setLMusimDatang(e.target.value)}', '{(e) => setLMusimKeluar(e.target.value)}', '{(e) => setLLahir(e.target.value)}', '{(e) => setLMeninggal(e.target.value)}', ]
for i in range(len(List)):
    print(
    f"""
    <label className="block text-gray-700 text-sm font-bold mt-2">
        Penduduk {List[i]}
      </label>
      <div className="grid grid-cols-2 gap-4 ">
   
     
    <div className="col-span-1 ">
      
    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Lelaki
      </label>


        <input value={{L_{List[i]}}} onChange={{(e) => setL{List[i]}(e.target.value)}} type="text" id="L_{List[i]}" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999"/>
       
        
    </div>


   

    <div className="col-span-1">

    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Perempuan
      </label>


        <input value={{P_{List[i]}}} onChange={{(e) => setP{List[i]}(e.target.value)}} type="text" id="P_{List[i]}" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="999" required />
       
       
    </div>

    </div>
    """
    )