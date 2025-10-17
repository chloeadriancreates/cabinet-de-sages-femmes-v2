import styles from "./article.module.scss";
import Image from "next/image";
import { Consultation } from "@/lib/types";

const Article = ({ consultation }: { consultation: Consultation }) => {
    const { photo, title, content } = consultation;

    return (
        <article className={styles.article}>
            <div data-container="photo">
                <Image src={`/photos/${photo}.jpg`} alt="" fill={true} />
            </div>
            <div data-container="description">
                <h3>{title}</h3>
                {content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
        </article>
    )
}

export default Article;