import styles from "./navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <button>Le cabinet</button>
            <button>Les prestations</button>
            <Link href="">Prendre rendez-vous</Link>
        </nav>
    )
}

export default Navigation;