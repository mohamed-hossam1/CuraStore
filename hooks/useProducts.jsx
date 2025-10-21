"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

export function useGetProducts(initialData, select="*") {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select(select).order("id");
      if (error) throw error;
      return data;
    },
    initialData,
  });
}


