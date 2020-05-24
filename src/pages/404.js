import React from 'react'
import Layout from  "../components/layout";

/* for gatsby develop, this won't show up. But on public/production, it will display */
export default function error() {
    return (
        <Layout>
            <h1>this is our error page</h1>
        </Layout>
    )
}
