import React from 'react';
import Head from 'next/head';



export default function SEO({
  description = 'sDeFi',
  author = 'Levin',
  meta,
  title = 'levinswap landing',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <script id="mcjs" src="https://chimpstatic.com/mcjs-connected/js/users/e5219fbbe1fee0310f33d838b/c7e828feeb2408f68c99b5ce8.js" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
