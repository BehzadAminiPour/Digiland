import supabase from "./supabase";

export async function getProducts(filters) {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded");
  }
  if (filters) {
    if (filters.company && filters.company !== "همه") {
      data = data.filter((product) => product.company === filters.company);
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      data = data.filter((product) =>
        product.title.toLowerCase().includes(search),
      );
    }
    if (filters.price) {
    return  data = data.filter((product) => +product.price <= +filters.price);
    }
  }
  return data;
}
