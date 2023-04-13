import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

import "normalize.css";
import "../assets/css/main.css";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export const Head = ({ pageContext }) => (
	<>
		<title>{pageContext.title}</title>
	</>
)

export default Layout