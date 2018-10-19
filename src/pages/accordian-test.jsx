import React from 'react'
import Layout from '../components/Layout.jsx'
import Accordian from '../components/Accordian.jsx'
import AccordianGroup from '../components/AccordianGroup.jsx'

export default ({ data }) => {
  return (
    <Layout>
      <h1>Accordian Test</h1>
      <h2>Single</h2>
      <Accordian title="I'm an accordian title">
        Here is the accordian content. This is more content.
      </Accordian>
      <h2>AccordianGroup</h2>
      <AccordianGroup />
    </Layout>
  )
}
