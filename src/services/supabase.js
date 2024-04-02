import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fplunwuhutsaponwkzna.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbHVud3VodXRzYXBvbndrem5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTIwNzMsImV4cCI6MjAyMjA4ODA3M30.KqLblIp75UBI785Zobx8L3tNHszM-gmixmu8eNP8k9A`;
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbHVud3VodXRzYXBvbndrem5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTIwNzMsImV4cCI6MjAyMjA4ODA3M30.KqLblIp75UBI785Zobx8L3tNHszM - gmixmu8eNP8k9A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
