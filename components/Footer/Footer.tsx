import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`bleed ${styles.footer__content}`}>Footer</div>
    </footer>
  );
};

export default Footer;