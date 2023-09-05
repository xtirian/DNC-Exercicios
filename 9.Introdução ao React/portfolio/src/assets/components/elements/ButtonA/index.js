import style from "./style.module.css";

export default function ButtonA({ children, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className={style.btn}>
      <button onClick={handleClick}>
        <p>{children}</p>
      </button>
    </div>
  );
}
