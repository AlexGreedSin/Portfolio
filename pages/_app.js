// Import your global CSS file for styling consistency across pages
import '../styles/globals.css';

// The main application component that renders individual pages
function MyApp({ Component, pageProps }) {
  // Render the component associated with the current page and its props
  return <Component {...pageProps} />;
}

// Export the main application component for use in Next.js
export default MyApp;
