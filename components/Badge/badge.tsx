import styles from "./badge.module.scss";
import Image from "next/image";
import { Advantage } from "@/lib/types";

const Badge = ({ advantage }: { advantage: Advantage }) => {
    const { icon, text } = advantage;

    return (
        <div className={styles.badge}>
            <div>
                <Image src={`/icons/${icon}.svg`} alt="" fill={true} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Badge;