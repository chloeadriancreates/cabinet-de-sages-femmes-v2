import styles from "./hero.module.scss";
import Image from "next/image";
import Wave from "../Wave/wave";
import { contact } from "@/lib/contact";

const Hero = () => {
    const { title, names } = contact;
    return (
        <section className={styles.hero}>
            <Image
                src="/photos/hero.jpg"
                fill={true}
                alt=""
                priority={true}
            />
            <div>
                <h1>{title}</h1>
                <div>
                    {names.map((name, index) => <p key={index}>{name}</p>)}
                </div>
            </div>
            <Wave horizontal={false} vertical={false} />
        </section>
    )
}

export default Hero;