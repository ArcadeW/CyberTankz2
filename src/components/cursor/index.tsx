"use client";
import { useEffect, useState } from "react";
import styles from "./cursor.module.css";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: position.x, top: position.y }}
    >
      <div
        className={styles.square}
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className={`${styles.axis} ${styles.xAxis}`}
        style={{ top: position.y }}
      ></div>
      <div
        className={`${styles.axis} ${styles.yAxis}`}
        style={{ left: position.x }}
      ></div>
    </div>
  );
}
