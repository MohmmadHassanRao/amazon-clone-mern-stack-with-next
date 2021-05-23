import axios from "axios";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  })
    .then((res) => res.data)
    .catch((err) => err);
  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );
  // CONSOLE LOGGING OCCURS ERROR
  // .then((json) => console.log(json));
  return {
    props: {
      products,
    },
  };
}
