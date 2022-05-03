import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type IMetaProps = {
  title?: string | 'Dynamic Devs';
  description?: string | 'Software development consultant';
  canonical?: string;
  image?: string;
  imageAlt?: string;
  aditionalMetaTags?: any[];
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        additionalMetaTags={props.aditionalMetaTags}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: 'es',
          site_name: 'Dynamic Devs',
          images: [
            {
              url: props.image || '',
              alt: props.imageAlt,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
