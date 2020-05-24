import React from 'react'
import Layout from  "../components/layout";
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}> 
                <h1>Blog Page</h1> 
                <p className={styles.text}>Some blog text here</p>                
            </div>

        </Layout>
    )
}

/* css modules approach to styling 
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}> 
                <h1>Blog Page</h1> 
                <p className={styles.text}>Some blog text here</p>                
            </div>

        </Layout>
    )
}*/
export default blog;
