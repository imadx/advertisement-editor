import { ReactNode } from "react";
import styles from "./InputSection.module.css";

interface Props {
  label: string;
  input: ReactNode;
}

export const InputSection = ({ label, input }: Props) => {
  return (
    <div className={styles.container}>
      <label>
        <span>{label}</span>
        {input}
      </label>
    </div>
  );
};
