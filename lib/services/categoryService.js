import { createSupabaseServerClient } from "../supabaseServer";


export async function getCategoriesFromServer(select='*') {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("categories").select(select).order("id");
  if (error) throw error;
  return data;
}


export async function getCategoryFromServer(id, select='*') {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("categories").select(select).eq("id", id).single();
  if (error) throw error;
  return data;
}

