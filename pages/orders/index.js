import Head from "next/head";
import styles from "../../css/orders.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { orders: data },
  };
};

const Orders = ({ orders }) => {
  return (
    <>
      <Head>
        <title>List | Order List</title>
        <meta name="keywords" content="Orders" />
      </Head>
      <div>
        <h1>Order List</h1>
        {orders.map((order) => (
          <Link href={"/orders/" + order.id} key={order.id}>
            <a className={styles.list}>
              <h3>{order.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Orders;
