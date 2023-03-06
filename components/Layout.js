import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="">
      <div className="sticky top-0 z-40">
        <Header />
      </div>
      <main className="w-full min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
