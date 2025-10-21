import { createSupabaseServerClient } from "../supabaseServer";

export async function getProductsFromServer() {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("products").select("*").order("id");
  if (error) throw error;
  return data;
}

export async function getProductFromServer(id) {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}
