import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";

export const metadata = {
  title: "Mtrip Hotels",
  description: "Travel website",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
