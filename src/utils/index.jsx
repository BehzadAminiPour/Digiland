// import axios from "axios";

// const url = "https://sfvvhtvsovzhvkclrfcg.supabase.co"; // Replace with your API base URL
// const API_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdnZodHZzb3Z6aHZrY2xyZmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzgyNDQsImV4cCI6MjAxNjkxNDI0NH0.2-IHzpW9sXwJEyHR4GC9V-8D08PyEBjv9kqmV8r2gv0";

// export async function getProducts() {
//   try {
//     const response = await axios.get(`${url}/Products`, {
//       headers: {
//         "apikey": API_KEY,
//         // Add other headers if needed
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw new Error("Products could not be loaded");
//   }
// }
// console.log(getProducts())




export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
