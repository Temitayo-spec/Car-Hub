import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Car Hub',
  description:
    'Discover the best car in the world. Find, book, or rent a car -- quickly and easily!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
