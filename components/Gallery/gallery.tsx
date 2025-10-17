import styles from "./gallery.module.scss";
import Wave from "../Wave/wave";
import Image from "next/image";

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <Wave horizontal={true} vertical={false} />
            <div>
                <Image src="/photos/office1.jpg" alt="" fill={true} />
                <Image src="/photos/office2.jpg" alt="" fill={true} />
                <Image src="/photos/prep.jpg" alt="" fill={true} />
                <Image src="/photos/table.jpg" alt="" fill={true} />
            </div>
            <Wave horizontal={true} vertical={true} />
        </div>
    )
}

export default Gallery;