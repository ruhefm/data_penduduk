require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASEURL;
const supabaseKey = process.env.SUPABASEKEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is not provided');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
