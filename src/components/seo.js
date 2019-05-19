import React from 'react'
import { Helmet } from "react-helmet"
import favicon from '../images/favicon-32x32.png'

const SEO = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Ekologia the Game</title>
    <meta name="author" content="Adam Siekierski" />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
  </Helmet>
)

export default SEO
