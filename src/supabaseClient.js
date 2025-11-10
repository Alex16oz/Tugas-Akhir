import { createClient } from '@supabase/supabase-js'

// Ambil variabel lingkungan yang Anda buat di langkah 3
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Buat dan ekspor client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)