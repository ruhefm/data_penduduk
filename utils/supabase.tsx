
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dblprfcpaguntuduujif.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibHByZmNwYWd1bnR1ZHV1amlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjI0NzEwNCwiZXhwIjoyMDI3ODIzMTA0fQ.yUHLWNDxCexibwYMgXNu1QRPQwRjaTtQ5O2WugLQIGo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


