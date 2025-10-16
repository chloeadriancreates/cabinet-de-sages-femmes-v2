import Badge from "@/components/Badge/badge";
import styles from "./page.module.scss";
import { advantages } from "@/lib/advantages";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Le cabinet</h2>
      <div data-container="advantages">
        {advantages.map(advantage => <Badge key={advantage.icon} advantage={advantage} />)}
      </div>
    </main>
  );
}