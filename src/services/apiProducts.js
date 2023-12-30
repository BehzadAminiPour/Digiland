import supabase from "./supabase";

export async function getProducts(filters) {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded");
  }
  if (filters) {
    if (filters.company === "همه") return data;
    if (filters.company) {
      // Filter products by category
      // Replace this with your actual filtering logic
      data = data.filter((product) => product.company === filters.company);
    }
  }
  return data;
}
