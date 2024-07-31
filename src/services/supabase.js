
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://jnyumtavqjuqlgpqushg.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXVtdGF2cWp1cWxncHF1c2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMjE0MjcsImV4cCI6MjAzNzg5NzQyN30.dTAUd9MYbzVcXCOppbTWkJC16YYsnGB4jdKxw-uu5Qo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;