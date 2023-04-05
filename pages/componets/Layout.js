import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    console.log(children);

    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    );
}
