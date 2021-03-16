import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const NeuWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 1rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 1rem 1rem 3rem hsla(0, 0%, 100%, 0.2), -1rem -1rem 3rem #ffffff;
`
const PageHeader = styled.h1`
  text-align: center;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="The Core"
        description="A Gatsby site to be proud of."
        image="/logo.svg"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img
          className={style.headerImage}
          fluid={data.headerImage.childImageSharp.fluid}
          alt="Core"
        />
        <PageHeader className={style.heading}>
          Welcome to InfoCore
        </PageHeader>
        <NeuWrapper>
          <p>This site will be used for internal comms and data for our department.</p>
          
        </NeuWrapper>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "core.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`