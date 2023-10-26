import styles from "./card-list.module.css";

import { Pagination } from "@/components/pagination/pagination";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};
