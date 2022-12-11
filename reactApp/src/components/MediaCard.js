// import { useRef } from "react";
// import Service from "../components/ServiceArr";
import styles from "../styles/MediaCard.module.css";

export default function MediaCard() {
  const Service = [
    {
      image: "/floor.jpeg",
      Name: "Office Clean",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl purus, blandit id tincidunt sit amet, vulputate id sem. ",
    },
    {
      image: "/window.jpeg",
      Name: "School Clean",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl purus, blandit id tincidunt sit amet, vulputate id sem. ",
    },
    {
      image: "/surface.jpeg",
      Name: "Contract clean",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl purus, blandit id tincidunt sit amet, vulputate id sem. ",
    },
  ];
  console.log(Service);
  return (
    <div className={styles.servicecards}>
      {Service.map((ser) => (
        <div className={styles.card}>
          <img src={ser.image} alt="photo" />
          <h2>{ser.Name}</h2>
          <p>{ser.description}</p>
          <div className={styles.btn}>
            <button>More</button>
          </div>
        </div>
      ))}
    </div>
  );
}
