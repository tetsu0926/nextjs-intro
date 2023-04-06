import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
}
