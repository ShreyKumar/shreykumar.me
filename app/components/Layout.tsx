import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export default function Layout({ className, children }: Readonly<{ className?: string, children: React.ReactNode }>) {
    return (
        <main>
            <MobileNavigation />
            <div className={`w-3/4 mx-auto mt-28 md:mt-20 ${className ?? ''}`}>
                <Navigation />
                {children}
            </div>
            <Footer />
        </main>
    );
}