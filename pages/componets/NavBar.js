import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/*<Link href="/" className= {[styles.link, router.pathname === '/' ? styles.hide: ''].join(" ")}>Home</Link>*/}
            {/*<Link href="/about" className={`${styles.link}, ${router.pathname === '/about' ? styles.hide: ''}`}>About</Link>*/}

            <Link href="/" className={[router.pathname === "/" ? styles.active : "", styles.link].join(" ")}>
                Home
            </Link>
            {/* <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>123</span> */}
            <Link href="/about" className={[router.pathname === "/about" ? styles.active : "", styles.link].join(" ")}>
                About
            </Link>
            <Link href="/ex" className={[router.pathname === "/ex" ? styles.active : "", styles.link].join(" ")}>
                Ex
            </Link>
        </nav>
    );
}
