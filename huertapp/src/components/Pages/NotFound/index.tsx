import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./PageNoFound.module.scss";

const PageNoFound = () => {
	return (
		<main className={styles.pageNoFound}>
			<h1>404 - Not Found!</h1>
			<Link to="/">Go Home</Link>
		</main>
	)
}

export default PageNoFound