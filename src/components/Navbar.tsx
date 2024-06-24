import { NavLink } from "react-router-dom";

function Logo() {
  return <h1 className="text-3xl font-bold">Adis Khodzhayarov</h1>;
}

function NavLinks({
  handleStyles,
}: {
  handleStyles?: ({ isActive }: { isActive: boolean }) => string;
}) {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={handleStyles ? handleStyles : ""}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}

function SmallCenter() {
  return <Logo />;
}

function BigCenter() {
  const handleStyles = ({ isActive }: { isActive: boolean }) =>
    `btn btn-ghost ${isActive ? "btn-active" : ""}`;

  return (
    <div className="flex space-x-4">
      <NavLinks handleStyles={handleStyles} />
    </div>
  );
}

function BigStart() {
  return <Logo />;
}

function SmallStart() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-52 p-2 shadow"
      >
        <li>
          <NavLinks />
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar p-4 shadow-lg bg-primary rounded-b-2xl">
      <div className="navbar-start hidden lg:flex text-white">
        <BigStart />
      </div>
      <div className="navbar-start lg:hidden">
        <SmallStart />
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <BigCenter />
      </div>
      <div className="navbar-center lg:hidden text-white">
        <SmallCenter />
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
}

export default Navbar;
