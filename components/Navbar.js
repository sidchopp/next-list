import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>My List</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/list">
          <a>My List</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
