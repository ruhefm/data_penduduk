import Image from "next/image";
import TambahPenduduk from '../../components/TambahPenduduk';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* Centering item */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        



      <div className="w-full mx-auto">
<h1 className="font-sans font-extrabold text-2xl mb-4">Data Penduduk</h1>

  <TambahPenduduk />

</div>






      </div>

      
 









     
      
    </main>
  );
}
