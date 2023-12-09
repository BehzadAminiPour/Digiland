import supabase from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded");
  }
  return data;
}
