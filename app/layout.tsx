import "../styles/global.css";
import Navigation from "../components/navigation"
import { Metadata } from "next";

export const metadata :Metadata = {
  title: {
    template: "%s | GFEX",
    default: "Loading..." 
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}