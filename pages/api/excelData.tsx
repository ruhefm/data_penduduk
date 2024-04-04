import ExcelJS from 'exceljs';
import supabase from '../../utils/supabase'; // Adjust the path as needed
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from('data_penduduk').select('*');

    if (error) {
      console.error('Error fetching data:', error.message);
      return res.status(500).json({ error: 'Error fetching data' });
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data Penduduk');

    if (data.length > 0) {
      worksheet.columns = Object.keys(data[0]).map((key) => ({ header: key, key }));
      data.forEach((row) => {
        worksheet.addRow(Object.values(row));
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const fileKey = `data_penduduk_${Date.now()}.xlsx`; // Generate a unique file name
    const storageResponse = await supabase.storage
      .from('excelPenduduk')
      .upload(fileKey, buffer, { contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    if (storageResponse.error) {
      console.error('Error uploading file to storage:', storageResponse.error.message);
      return res.status(500).json({ error: 'Error uploading file to storage' });
    }

    const downloadUrl = storageResponse.data.path; // URL where the file is saved

    console.log("Sukses generate data:",downloadUrl)
    return res.status(200).json({ downloadUrl });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
