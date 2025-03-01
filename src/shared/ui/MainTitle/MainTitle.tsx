import { FC } from "react";
import styles from "./MainTitle.module.scss";

interface MainTitleProps {
  title: string
}

export const MainTitle: FC<MainTitleProps> = ({title}) => {
  return (
    <h1 className={styles.mainTite}>{title}</h1>
  )
}