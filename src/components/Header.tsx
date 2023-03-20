import { IconLogo } from "./IconLogo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <IconLogo />
      <h1>Advertisement Editor</h1>
    </header>
  );
};
