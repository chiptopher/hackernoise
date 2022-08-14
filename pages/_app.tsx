import React from 'react';

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import Script from 'next/script';
import styled from 'styled-components';

const DESCRIPTION = 'Hacker News but none of the context and all the comments.';
const TITLE = 'Hacker Noise';

function MyApp({ Component, pageProps }: AppProps) {
    const trackingId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    return (
        <Container>
            <NextHead>
                <title>{TITLE}</title>
                <link
                    href="/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/site.webmanifest" rel="manifest" />
                <meta content={DESCRIPTION} name="description" />

                <meta content="https://hackernoise.com/" property="og:url" />
                <meta content="website" property="og:type" />
                <meta content={TITLE} property="og:title" />
                <meta content={DESCRIPTION} property="og:description" />

                <meta content="hackernoise.com" property="twitter:domain" />
                <meta
                    content="https://hackernoise.com/"
                    property="twitter:url"
                />
                <meta content={TITLE} name="twitter:title" />
                <meta content={DESCRIPTION} name="twitter:description" />
            </NextHead>
            {trackingId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
                    </Script>
                </>
            )}
            <Component {...pageProps} />;
        </Container>
    );
}

const Container = styled.div`
    background-color: #f3f3f3;
`;

export default MyApp;
