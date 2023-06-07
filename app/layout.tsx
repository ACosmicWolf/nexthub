import NavMenu from "./NavMenu";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "NextHub",
  description: "A dev.to clone built with Next.js, firebase and tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="m-auto w-5/6 lg:w-7/12">
          <NavMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
