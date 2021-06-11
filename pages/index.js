import Head from "next/head";
import Link from "next/link";
import styles from "../css/main.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Order List</title>
        <meta name="keywords" content="Orders" />
      </Head>
      <div>
        <h1 className={styles.container}>Homepage</h1>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aperiam saepe nesciunt rerum minima possimus voluptates iste placeat totam voluptatem?</p>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aperiam saepe nesciunt rerum minima possimus voluptates iste placeat totam voluptatem?</p>
        <Link href="/orders">
          <a className={styles.btn}>See Order List</a>
        </Link>
      </div>
    </>
  );
}
