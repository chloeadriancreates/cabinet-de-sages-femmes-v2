import styles from "./page.module.scss";
import { advantages } from "@/lib/advantages";
import { consultations } from "@/lib/consultations";
import Badge from "@/components/Badge/badge";
import Gallery from "@/components/Gallery/gallery";
import Article from "@/components/Article/article";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 id="cabinet">Le cabinet</h2>
      <section data-container="advantages">
        {advantages.map(advantage => <Badge key={advantage.icon} advantage={advantage} />)}
      </section>

      <Gallery />

      <h2 id="prestations">Ce que la sage-femme peut faire pour vous</h2>
      <section data-container="consultations">
        {consultations.map(consultation => <Article key={consultation.photo} consultation={consultation} />)}
      </section>
    </main>
  );
}