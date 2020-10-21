import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
        {/* <!-- facebook --> */}
        <meta property="fb:app_id" content="" />
        <meta property="og:url" content="https://andrewmasonmedia.now.sh/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Andrew Mason: Designer, Developer, Copywriter." />
        <meta property="og:image" content="https://andrewmasonmedia.now.sh/images/mm_home_ss.png" />
        <meta property="og:image:alt" content="A screenshot of the homepage of andrewmasonmedia.com showing the website title (Mason: Web design, graphic design, copywriting), and an abstract background image of colored lines over a black background." />
        <meta property="og:description" content="I'm a Toronto designer, developer and copywriter. I build websites, design UIs & imagery, & write copy for a wide range of formats." />
        <meta property="og:site_name" content="Andrew Mason" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="" />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@C_AndrewMason" />
        <meta name="twitter:creator" content="@C_AndrewMason" />
        <meta name="twitter:url" content="https://andrewmasonmedia.now.sh/" />
        <meta name="twitter:title" content="Andrew Mason" />
        <meta name="twitter:description" content="I'm a Toronto designer, developer and copywriter. I build websites, design UIs & imagery, & write copy for a wide range of formats." />
        <meta name="twitter:image" content="https://andrewmasonmedia.now.sh/images/mm_home_ss.png" />
        <meta name="twitter:image:alt" content="A screenshot of the homepage of andrewmasonmedia.com showing the website title (Mason: Web design, graphic design, copywriting), and an abstract background image of colored lines over a black background." />
        <meta name="twitter:dnt" content="on" />
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}