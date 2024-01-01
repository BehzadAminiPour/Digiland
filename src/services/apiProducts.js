import supabase from "./supabase";

export async function getProducts(filters) {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded");
  }
  if (filters) {
    // if (filters.company === "همه") return data;
      
    
    if (filters.company) {
      data = data.filter((product) => product.company === filters.company);
    
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      console.log(search);
      // Filter products based on the search
      data = data.filter(
        (product) => product.title.toLowerCase().includes(search),
        // Add more fields as needed for the search
      );
    }
  }
  return data;
}
