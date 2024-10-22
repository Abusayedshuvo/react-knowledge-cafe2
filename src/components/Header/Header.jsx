import user from "../../assets/user.png";
const Header = () => {
  return (
    <header>
      <div className="flex py-10 justify-between">
        <p className="text-5xl font-bold">Knowledge Cafe</p>
        <img src={user} alt="" />
      </div>
    </header>
  );
};

export default Header;
