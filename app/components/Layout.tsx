import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ className, children }: Readonly<{ className?: string, children: React.ReactNode }>) {
    return (
        <main>
            <div className={`w-3/4 mx-auto mt-20 ${className ?? ''}`}>
                <Navigation />
                {children}
            </div>
            <Footer />
        </main>
    );
}