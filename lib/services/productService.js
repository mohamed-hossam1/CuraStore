import { createSupabaseServerClient } from "../supabaseServer";

export async function getProductsFromServer(select='*') {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("products").select(select).order("id");
  if (error) throw error;
  return data;
}

export async function getProductFromServer(id, select='*') {
  const supabase = await createSupabaseServerClient(); 
  const { data, error } = await supabase.from("products").select(select).eq("id", id).single();
  if (error) throw error;
  return data;
}



export async function getProductsByCategoryFromServer(categoryId) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
    .eq('is_active', true)
    .order('created_at', { ascending: false }); 
  
  if (error) throw error;
  return data || []; 
}