import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mhxeszofrtozdlfpcbta.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oeGVzem9mcnRvemRsZnBjYnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNDAxODgsImV4cCI6MjA4NDgxNjE4OH0.BNxos7i1e7Y1uMxUNoNGgzKo5l6ZqDV12cPk2JF-WII'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)