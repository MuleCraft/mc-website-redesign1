import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oehqvcegskiujaebfdtd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laHF2Y2Vnc2tpdWphZWJmZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxOTk5OTgsImV4cCI6MjA3Mzc3NTk5OH0.NJ4esVZ24Osh1-0ZdLCovwaUE130B3Zuexe6Sk_5InM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

