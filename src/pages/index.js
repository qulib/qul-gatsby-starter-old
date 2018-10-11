import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
// import Slider from "react-slick";
import "typeface-open-sans";

import "../styles/style.scss";

class Home extends React.Component {
  render() {
    // const data = this.props.data;

    return (
      <div>
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>QUL Gatsby Starter</title>
        </Helmet>
        <p>Hello World</p>
      </div>
    );
  }
}

export default Home;

// export const pageQuery = graphql``;
