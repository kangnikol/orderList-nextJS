export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { order: data },
  };
};

const Details = ({ order }) => {
  return (
    <div>
      <h1>{order.name}</h1>
      <p>{order.email}</p>
      <p>{order.website}</p>
      <p>{order.address.city}</p>
    </div>
  );
};

export default Details;
