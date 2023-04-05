import Link from "next/link";
import {useRouter} from "next/router";
import styles from './NavBar.module.css';

export default function NavBar() {

    const router = useRouter();

    return (
        <nav>
            {/*<Link href="/" className= {[styles.link, router.pathname === '/' ? styles.hide: ''].join(" ")}>Home</Link>*/}
            {/*<Link href="/about" className={`${styles.link}, ${router.pathname === '/about' ? styles.hide: ''}`}>About</Link>*/}

            <Link href="/" className={[router.pathname === '/' ? styles.active : ""].join(" ")}>Home</Link>
            <span style={{paddingLeft: "20px", paddingRight: '20px'}}>123</span>
            <Link href="/about" className={router.pathname === '/about' ? styles.active : ""}>About</Link>

            <style jsx>
                {`
                  span {
                    color: coral;
                  }
                `}
            </style>
        </nav>
    );
}
