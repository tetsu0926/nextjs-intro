import NavBar from "./componets/NavBar";

export default function App({ Component, pageProps }) {
    console.log("pageProps", pageProps);

    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <span>_app....</span>

            <style jsx global>
                {`
                    span {
                        font-weight: bold;
                    }
                    a {
                        text-decoration: none;
                        color: brown;
                        font-weight: bold;
                        font-size: 20px;
                    }
                `}
            </style>
        </div>
    );
}
