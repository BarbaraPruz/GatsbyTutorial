import React from "react"

import Layout from  "../components/layout";
import { ExampleButton } from  "../components/button";

export default () => (
    <Layout>       
        <h1>Hello people!</h1>
        <p><a href="https://www.gatsbyjs.org">Gatsby JS</a></p>
        <ExampleButton>click me</ExampleButton>
    </Layout>
)