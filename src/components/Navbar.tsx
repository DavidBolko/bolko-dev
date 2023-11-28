const Navbar = () => {
  return (
    <nav className="flex fixed top-0 backdrop-blur-lg z-10 bg-primary/5 p-4 pr-12 pl-12  w-full ">
      <a href="#" className="text-xl link">bolko.github.<span className="text-primary">io</span></a>
      <ul className="flex justify-end items-center gap-8 tracking-widest w-full">
        <li><a href="#" className="text-stone-100 link">HOME</a></li>
        <li><a href="#" className="text-stone-400 link">PROJECTS</a></li>
        <li><a href="#" className="text-stone-400 link">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


