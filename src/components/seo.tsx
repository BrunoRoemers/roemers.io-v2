import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';
import normalizeUrl from '../utils/string/normalize-url';

interface Props {
  title?: string,
  description?: string,
  isArticle?: boolean,
  pagePath?: string, // the url of the webpage
  imagePath?: string, // the url of the main image
}

export const SEO = ({
  title,
  description,
  isArticle,
  pagePath,
  imagePath,
}: Props) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title,
          titleTemplate,
          defaultDescription: description,
          rootUrl: url,
        }
      }
    }
  `);

  const {siteMetadata} = site;

  const seo = {
    title: title || siteMetadata.defaultTitle,
    titleTemplate: siteMetadata.titleTemplate,
    description: description || siteMetadata.defaultDescription,
    isArticle: isArticle || false,

  };

  // TODO add twitter, github, ENS...
  // TODO test twitter card, open graph data...
  return (
    <Helmet
      titleTemplate={seo.titleTemplate}
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
    </Helmet>
  )
}

export default SEO;
