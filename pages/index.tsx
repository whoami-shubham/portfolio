import styles from "../styles/Home.module.css";
import Home from "../src/views/home/Home";
import { response } from "../src/data";
export default function App({ data }) {
  return (
    <>
      <Home {...data} />
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://raw.githubusercontent.com/whoamishubham/whoamishubham.github.io/data/data.json')
  let res = response; //await res.json()
  console.log(
    "%c shubham  ",
    "color:green;background:black;font-size:5vw;border:1px solid red;"
  );
  const data = res?.data;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      isLoading: false,
    },
  };
}
