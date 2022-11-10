import { axiosClient } from "../../utils/axios";

async function testAPI() {
  return await axiosClient.get("/test");
}

function Shop() {
  testAPI().then(console.log).catch(console.error);
  return <div>Shop</div>;
}

export default Shop;
