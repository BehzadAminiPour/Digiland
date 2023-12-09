/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sfvvhtvsovzhvkclrfcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdnZodHZzb3Z6aHZrY2xyZmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzgyNDQsImV4cCI6MjAxNjkxNDI0NH0.2-IHzpW9sXwJEyHR4GC9V-8D08PyEBjv9kqmV8r2gv0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
