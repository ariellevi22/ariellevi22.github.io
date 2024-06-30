import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import styles from "./card.module.css";

/** A component for a display card */
const Card = ({
  children,
  colorLight = `var(--color-primary)`,
  colorDark = colorLight,
  enableHorizontal,
  imgSrc,
  imgPosition,
}: CardProps) => (
  <div className={styles.cardContainer}>
    <div
      className={[styles.card, enableHorizontal ? styles.horizontal : undefined]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--color-accent-light": colorLight,
          "--color-accent-dark": colorDark,
        } as CSSProperties
      }
    >
      {imgSrc && (
        <div className={styles.cardCover}>
          <Image src={imgSrc} alt="" style={{ objectPosition: imgPosition }} />
        </div>
      )}

      <div className={styles.cardContents}>{children}</div>
    </div>
  </div>
);

/** Props for the card component */
type CardProps = {
  /** The card's contents */
  children?: React.ReactNode;

  /** The card's accent color using a light color scheme */
  colorLight?: string;

  /** The card's accent color using a dark color scheme */
  colorDark?: string;

  /** Whether the card can display with a horizontal layout (if large enough) */
  enableHorizontal?: boolean;

  /** A cover image to display on the card */
  imgSrc?: StaticImageData | string;

  /** The CSS background position string for the cover image */
  imgPosition?: string;
};

export default Card;
