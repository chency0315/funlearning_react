import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Navbar from "../../components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "funlearning",
  description: "Generated by create next app",
  content:"width=device-width, initial-scale=1"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
