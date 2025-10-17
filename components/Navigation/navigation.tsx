"use client"

import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsFixed(!!(document.scrollingElement && document.scrollingElement.scrollTop > 0));
        handleScroll();
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={styles.navigation} data-fixed={isFixed}>
            <Link href="/#cabinet">Le cabinet</Link>
            <Link href="/#prestations">Les prestations</Link>
            <Link href="https://user.clicrdv.com/634-adrian-oster-laurence">Prendre rendez-vous</Link>
        </nav>
    )
}

export default Navigation;