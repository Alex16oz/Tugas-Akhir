import { createClient } from '@supabase/supabase-js';

// Membaca variabel lingkungan dari file .env melalui enkapsulasi Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validasi sederhana untuk memastikan .env terbaca
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Error: Supabase URL atau Anon Key belum dikonfigurasi di file .env!");
}

// Menginisialisasi instansi klien Supabase tunggal (Singleton)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);