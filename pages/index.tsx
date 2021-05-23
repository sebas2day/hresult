import Head from 'next/head'
import Link from 'next/link'
import {GetStaticProps} from 'next';
import {getPage, getSettings} from '../api/posts';
import {PostOrPage, SettingsResponse} from '@tryghost/content-api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { CSSProperties } from 'react';
import { getSectionColumnsInfo, getSectionInfo, getSections, getSectionWitImageInfo } from '../lib/sections';

type HomeProps = { 
  settings: SettingsResponse,
  page: PostOrPage
};

export default function Home({ settings, page }: HomeProps) {

  const sections = getSections(page.html);
  const intro = Array.from(sections[0].childNodes).map(node => node.toString());
  const hero = sections[1] ? getSectionWitImageInfo(sections[1]) : null;
  const chord = sections[1] ? getSectionInfo(sections[2]) : null;
  const block1 = sections[1] ? getSectionInfo(sections[3]) : null;
  const block2 = sections[1] ? getSectionInfo(sections[4]) : null;
  const block3 = sections[1] ? getSectionColumnsInfo(sections[5]) : null;

  return (
    <ParallaxProvider>
    <div className="page">
      <Head>
        <title>{settings.title} | {settings.description}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              {settings.title}
            </a>
            <a id="burger" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-end">
              {settings.navigation.map(item => (
                <Link prefetch href={item.url}>
                  <a className="navbar-item">{item.label}</a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="qualityMarks">
          <img src="noloc.jpg" />
        </div>
      </header>
      <Parallax className="cover" y={[-50, 25]}>
          <img src={settings.cover_image}></img>

          <Parallax className="coverDescription" y={[50, -35]}>
            {intro.map((line, i) => i % 2 === 0 ? (
              <h2 className="title is-2 has-text-white" dangerouslySetInnerHTML={{__html: line}} />
            ) : (
              <h3 className="title is-3 has-text-white" dangerouslySetInnerHTML={{__html: line}} />
            ))}
          </Parallax>
      </Parallax>
      
      {hero ?
      <div className="hero">
        <div className="hero__content">
          <div className="hero__row">
            {hero.image ? <img src={hero.image} /> : null}
            <div>
              <h2 className="title is-4">{hero.title}</h2>
              <div dangerouslySetInnerHTML={{__html: hero.content}} />
            </div>
          </div>
        </div>
      </div>
      : null }

      {chord ?
      <div className="chord">
        <img className="chord__top" src={settings.logo} />
        <div className="chord__below">
          <div className="chord__block">
            <h2 className="title is-2">{chord.title}</h2>
            <div dangerouslySetInnerHTML={{__html: chord.content}} />
          </div>
        </div>
      </div>
      : null }

      {block1 ?
      <div className="block-card box">
        <h4 className="title is-4 has-text-white">{block1.title}</h4>
        <div dangerouslySetInnerHTML={{__html: block1.content}} />
      </div>
      : null }

      {block2 ?
      <div className="block-column">
        <h2 className="title is-2">{block2.title}</h2>
        <div className="block-column__content" dangerouslySetInnerHTML={{__html: block2.content}} />
      </div>
      : null }

      {block3 ?
      <div className="block-column--grid block-column--alternate">
        <h3 className="title is-3 has-text-white">{block3.title}</h3>
        <div className="block-column__content" style={{'--columns': block3.columns.length} as CSSProperties}>
          {block3.columns.map(column => (
            <div>
              <h4 className="title is-5 has-text-white">{column.subtitle}</h4>
              <div dangerouslySetInnerHTML={{__html: column.content}} />
            </div>
          ))}
        </div>
      </div>
      : null }

      <div className="fourthBlock">
        <button className="button is-large is-primary">neem contact op voor een gesprek</button>
      </div>

      <main className="main">
        <h1 className="title">
          
          Welcome to {settings.title} <a href="https://nextjs.org">Next!</a>
        </h1>
        <p>
          {settings.description}
        </p>
        <Link href="/posts">
          <a>Open posts</a>
        </Link>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>  
    </ParallaxProvider>)
}


export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }) => {
  const settings = await getSettings();
  const page = await getPage('home')
  return {
    props: { settings, page }
  }
}
