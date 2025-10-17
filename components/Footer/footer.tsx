import styles from "./footer.module.scss";
import { contact } from "@/lib/contact";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div data-container="contact">
                <h3>{contact.title}</h3>
                <div data-container="names">
                    {contact.names.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
                <div data-container="address">
                    {contact.address.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
            </div>
            <div data-container="links">
                <nav>
                    <Link href="https://user.clicrdv.com/634-adrian-oster-laurence">Prendre rendez-vous</Link>
                    <Link href="/mentions-legales">Mentions légales</Link>
                </nav>
                <div>
                    <div data-container="signature">
                        <span>Made with ♥︎ by&nbsp;</span>
                        <Link href="https://chloeadrian.dev">Chloé Adrian</Link>
                    </div>
                    <p>ⓒ Laurence Adrian-Oster & Caroline Bigorgne - 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;