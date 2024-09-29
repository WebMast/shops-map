import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Store locator",
    description: "Find our stores",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-300`}>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Header/>
                    <div className="app-content w-full text-black">
                        {children}
                    </div>
                    <Footer/>
                </main>
            </body>
        </html>
    );
}
