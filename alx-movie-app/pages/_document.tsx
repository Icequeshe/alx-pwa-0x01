import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the web app manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#0070f3" />

        {/* Optional: App icons */}
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
