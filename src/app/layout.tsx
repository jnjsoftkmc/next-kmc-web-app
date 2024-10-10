import ClientProvider from "../components/ClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
