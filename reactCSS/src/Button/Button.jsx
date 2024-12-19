

// external css go to index.css
// import css module css

import styles from './Button.module.css'

function Button() {
    
    return(

        <button className={styles.btn}>
            <h4>Click Me</h4>
        </button>
    )
}
export default Button