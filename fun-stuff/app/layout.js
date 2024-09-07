import "./globals.css";

export const metadata = {
  title: "C^2",
  description: "Bio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
