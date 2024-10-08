
import "./globals.css";
import Script from 'next/script'



export const metadata = {
  title: "Yoda bot",
  description: "Yoda AI chat bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-QXDGZ1ZH7E"></Script>
<Script id="google-analytics">
  { `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QXDGZ1ZH7E');
       `
  }
</Script>
      </head>
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
