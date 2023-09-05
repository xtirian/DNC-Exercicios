import style from "./style.module.css";

export default function ButtonB({ children, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className={style.btn2}>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
