import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Tambahin proteksi biar kita tau kalo variabelnya kosong
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Waduh Dil, ENV lu belum ke-load atau salah nama variabel!")
}

console.log("Cek ENV URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Cek ENV KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const supabase = createClient(
    supabaseUrl || '', 
    supabaseAnonKey || ''
)