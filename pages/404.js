import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Eits...</h1>
      <h2>Halamannya ngga ada nih</h2>
      <p>
        Balik lagi aja ke{" "}
        <Link href="/">
          <a>Halaman Utama</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
