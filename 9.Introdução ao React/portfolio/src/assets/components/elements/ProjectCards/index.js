import style from "./style.module.css";
import Button from "../ButtonB";
import React, {useState} from "react";

import Project1 from "../../../images/projects/thumbnail-project1.webp";

export default function ProjectCards({
  img,
  liveURL,
  title,
  technologies,
  content,
  link,
}) {
  const [info, setInfo] = useState(false);

  function handleInfo(){
   setInfo(true)
  }

  return (
    <div className={style.cardProject} >
      <a href={liveURL} target="_blank" onMouseEnter={handleInfo} >
        <img src={img} />
      </a>
      {info === true && (
        <section>
          <h3>{title}</h3>
          <p>
            <strong>Tecnologias:</strong> {technologies}
          </p>
          <p>
            <em>{content}</em>
          </p>
          <Button link={link}>Acesse ao Repositório</Button>
        </section>
      )}
    </div>
  );
}
