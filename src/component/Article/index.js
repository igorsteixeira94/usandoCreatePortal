import React from 'react';
import SEO from '../SEO';

import { Container } from './styles';

function Article({ title, description, children }) {
  return (
    <Container>
      <SEO title={title} description={description} />
      <h1>{title}</h1>
      <span>{description}</span>
      {children} {/** Representa o corpo do nosso artigo */}
    </Container>
  );
}

export default Article;
