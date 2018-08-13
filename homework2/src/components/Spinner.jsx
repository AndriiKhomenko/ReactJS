import React from 'react';
import styles from './Spinner.css'

const Spinner = () => (
<div className={styles.cssload_thecube}>
	<div className={[styles.cssload_cube, styles.cssload_c1].join(' ')}></div>
	<div className={[styles.cssload_cube, styles.cssload_c2].join(' ')}></div>
	<div className={[styles.cssload_cube, styles.cssload_c4].join(' ')}></div>
	<div className={[styles.cssload_cube, styles.cssload_c3].join(' ')}></div>
</div>
);

export default Spinner;