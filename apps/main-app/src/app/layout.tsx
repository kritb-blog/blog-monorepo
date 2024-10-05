import './global.css';
import { Prompt } from 'next/font/google';
import { ThemeProvider } from './providers/ThemeProvider';

const promptFont = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600'],
});

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
    <html lang="en" className={promptFont.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
