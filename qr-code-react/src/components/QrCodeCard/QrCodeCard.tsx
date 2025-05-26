import styles from "./QrCodeCard.module.css";
import myImage from "../../assets/image-qr-code.png";

export default function QrCodeCard() {
  return (
    <div className={`${styles.QrCodeContainer}`}>
      <img src={myImage} alt="QR code" className={`${styles.QrCodeImage}`} />
      <div className={`${styles.textContainer}`}>
        <h4 className={`${styles.subheader} text-outfit-bold`}>
          Improve your front-end skills by building projects
        </h4>
        <p className={`${styles.paragraph} text-outfit-regular`}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
