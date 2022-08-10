import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/places">
          <a>My List</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
