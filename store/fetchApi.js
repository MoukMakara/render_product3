const Base_Url = "https://fakestoreapi.com/";
// const Base_Url = "https://api.escuelajs.co";
export async function getData(endpoint) {
  try {
    const data = await fetch(`${Base_Url}${endpoint}`);
    const res = await data.json();
    return res;
  } catch (err) {
    console.log("error fetching data", err);
  }
}
