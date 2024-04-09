import './global.css';

export const metadata = {
  title: 'Krit Bannachaisirisuk',
  description: 'Peronal website of Krit Bannachaisirisuk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
