import Link from "next/link";
import styles from "./auth-links.module.css";

export const AuthLinks = () => {
  const status = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};
