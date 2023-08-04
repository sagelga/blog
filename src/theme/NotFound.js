import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import OptimizedImage from '../components/OptimizedImage';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className='col col--3 col--offset-1'>
              <OptimizedImage src="be58f1b09dcb9f4303aa7f87dcf3327e_g8rsne" />
            </div>
            <div className="col col--6 ">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  404 Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  Oops! It seems like you've wandered into the digital wilderness. The path to the page you seek is hidden, lost in the realm of 404 errors. Fear not, for we'll guide you back to the online trailblazing soon!
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  "Sometimes, you find yourself in the middle of nowhere, and sometimes, in the middle of nowhere, you find yourself." — Unknown
                </Translate>
              </p>
              <a href='https://blog.sagelga.com'>
                <Translate id="theme.NotFound.button" >
                  Go back
                </Translate>
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
