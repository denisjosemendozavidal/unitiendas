export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>/* Your header */</header>
        <main>{children}</main>
        <footer>/* Your footer */</footer>
      </body>
    </html>
  );
}
