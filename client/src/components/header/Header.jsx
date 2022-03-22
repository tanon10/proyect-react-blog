import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={require("../img/header1.jpg")} alt="" className="headerImg" />
    </div>
  );
}
