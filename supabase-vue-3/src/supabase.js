import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://bswhnfykqdncsmdtesjv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzd2huZnlrcWRuY3NtZHRlc2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjE4NzUsImV4cCI6MjAyNzg5Nzg3NX0.YgOfIbpArBNcUBz6JfM-XphGj4tfigGPxOqvlb9wmxs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
