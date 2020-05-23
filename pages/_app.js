import App from 'next/app';
import Head from 'next/head'

import Navbar from '../components/navbar.component'
import Footer from '../components/footer.component'

class MovieApp extends App {

  // execute getInitialProps and pass data to page via props
  static getInitialProps = async (appContext) => {
    console.log('calling initial props from _app.js');
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Home</title>
          <link rel='stylesheet' href='https://bootswatch.com/4/superhero/bootstrap.min.css' />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd" crossOrigin="anonymous"></script>
        </Head>
        <Navbar />
        <div className="site-bg home-page-padding">
          {/* // Component holds pages where you navigation to, similar as children props */}
          <Component {...pageProps} />
        </div>
        <Footer />
        <style jsx>
          {`
            .home-page-padding {
              padding-top: 3rem;
            }

            .site-bg {
              background-color: #1a2b34;
            }  
        ` }
        </style>
      </>
    )
  }
}


export default MovieApp



// This default export is required in a new `pages/_app.js` file.
// const App = ({ Component, pageProps }) => {
//   // execute getInitialProps and pass data to home component via props
//   return(
//     <>
//       <Head>
//         <title>Home</title>
//         <link rel='stylesheet' href='https://bootswatch.com/4/superhero/bootstrap.min.css' />
//         <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossOrigin="anonymous"></script>
//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd" crossOrigin="anonymous"></script>
//       </Head>
//       <Navbar />
//       <div className="site-bg home-page-padding">
//         {/* // Component holds pages where you navigation to, similar as children props */}
//         <Component {...pageProps} />
//       </div>
//       <Footer />
//       <style jsx>
//         {`
//             .home-page-padding {
//               padding-top: 3rem;
//             }

//             .site-bg {
//               background-color: #1a2b34;
//             }  
//         ` }
//       </style>
//     </>
//   )
// }

// App.getInitialProps = async (appContext) => {

//   console.log('calling initial props from _app.js');
  
//   const appProps = await App.getInitialProps(appContext)

//   return { ...appProps }
// }

// export default App
