import styles from "./wave.module.scss";

const Wave = ({ horizontal, vertical }: { horizontal: boolean, vertical: boolean }) => {
    return (
        <svg
            viewBox="0 0 2880 130"
            className={styles.wave}
            data-horizontal={horizontal}
            data-vertical={vertical}
        >
            <path d="M2160 25.4374C2576 -31.7968 2880 25.4374 2880 25.4374V130H0V25.4374C0.153439 25.4663 304.105 82.6572 720 25.4374C1123 -30.0083 1420.89 21.9723 1439.12 25.2751L1440.88 25.5998C1459.11 28.9028 1757 80.883 2160 25.4374Z" />
        </svg>
    )
}

export default Wave;