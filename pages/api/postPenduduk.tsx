import supabase from '../../utils/supabase';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body;
    const { data, error } = await supabase
    .from('data_penduduk')
    .insert([

      {
        rw: parseInt(body.rw,10),
        rt: parseInt(body.rt,10),
        date: body.date,
        l_tetap: parseInt(body.L_Tetap,10),
        p_tetap: parseInt(body.P_Tetap,10),
        l_musim_datang: parseInt(body.L_Musim_Datang,10),
        p_musim_datang: parseInt(body.P_Musim_Datang,10),
        l_musim_keluar: parseInt(body.L_Musim_Keluar,10),
        p_musim_keluar: parseInt(body.P_Musim_Keluar,10),
        l_lahir: parseInt(body.L_Lahir,10),
        p_lahir: parseInt(body.P_Lahir,10),
        l_meninggal: parseInt(body.L_Meninggal,10),
        p_meninggal: parseInt(body.P_Meninggal,10),
      }

    ]);

  if (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ error: 'Error saving data' });
  } else {
    res.status(200).json({ message: 'Data saved successfully', data });
  }
} else {
  res.status(405).json({ error: 'Method Not Allowed' });
}
}
