import profileImg from "@/assets/photos/profile-picture.jpg";
import Container from "@/containers/container";
import { name } from "@/global";
import Image from "next/image";
import { useId } from "react";
import SocialButtons from "../social-buttons";
import styles from "./hero-header.module.css";

/**
 * A component for the website's hero header, which contains a heading,
 * a photo, and social buttons
 */
const HeroHeader = () => {
  const nameId = useId();

  return (
    <header className={styles.header}>
      <div className={styles.background} role="presentation" />

      <Container className={styles.grid}>
        <Image
          src={profileImg}
          priority
          quality={100}
          alt=""
          aria-labelledby={nameId}
          className={styles.profileImage}
        />

        <div className={styles.profileInfo}>
          <div>
            <h1 id={nameId}>{name}</h1>
            <p>Software Engineer at Garmin</p>
          </div>

          <SocialButtons />
        </div>
      </Container>
    </header>
  );
};

export default HeroHeader;
