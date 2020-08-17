import Head from 'next/head'
import Link from 'next/link'
import {GetStaticProps} from 'next';
import {getSettings} from '../api/posts';
import {SettingsResponse} from '@tryghost/content-api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

type SettingsProps = { settings: SettingsResponse };

export default function Home({ settings }: SettingsProps) {
  return (
    <ParallaxProvider>
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              HResult
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

          <Parallax className="coverDescription" y={[-50, 35]}>
            <h2 className="title is-2 has-text-white">van <i>overleven</i></h2>
            <h3 className="title is-3 has-text-white">naar <b>moeiteloos</b> leven en werken</h3>
          </Parallax>
      </Parallax>
      
      <div className="hero">
        <div className="heroContent">
          <div className="heroRow">
            <img src="adriaan.jpg"></img>
            <div>
              <h2 className="title is-4">Mijn grootste passie is om mensen te helpen meer plezier in hun werk te laten krijgen</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed purus quis enim ultrices congue aliquam non felis. Ut in consectetur dolor. Curabitur in dui et felis tempus aliquam ut ut dolor. Suspendisse lectus leo, consectetur a odio non, congue semper urna. Vivamus laoreet in erat et euismod. Donec dapibus tincidunt luctus. Integer posuere orci nulla, in aliquam urna fermentum ut. Fusce maximus cursus elit, non aliquet dui feugiat vel. Nam in est ut nibh rutrum aliquam in vel tellus. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="chord">
        <img className="chordTop" src={settings.logo} />
        <div className="chordBelow">
          <div className="firstBlock">
            <h2 className="title is-2">Loopbaan- &amp; Starterscoaching</h2>
            <p>
            Etiam ac dui ut elit tincidunt mollis. Aliquam posuere condimentum tortor, id commodo tortor varius in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ultrices ipsum at tempus tristique. Quisque tincidunt eleifend eros, sed elementum mi posuere a. Sed egestas ultricies velit quis accumsan. Phasellus congue mauris justo. Praesent bibendum molestie facilisis. Vivamus eleifend, neque ut fringilla mollis, turpis sem conseq.
            </p>
          </div>
        </div>
      </div>

      <div className="inBetween">
        Het 6 stappenplan bij loopbaancoaching

        “Wordt met het 6-stappenplan de regisseur van je leven en
        carrière!”
        Stap 1. Durf te dromen
        Stap 2. Ontdek jouw kernkwaliteiten en competenties
        Stap 3. Krijg jouw polariteiten in balans; hoe zorg je dat je niet doorschiet in je
        kwaliteiten
        Stap 4. Ga je blokkades overwinnen, welke belemmerende overtuigingen
        houden je tegen?
        Stap 5. Stel je focus scherp op: wie ben ik (en wie ben ik niet), wat kan ik (en
        wat kan ik niet) en wat wil ik (en wat wil ik niet)
        Stap 6. Kom in actie! Tijd om de juiste stappen te zetten
      </div>

      <div className="secondBlock">
        <h2 className="title is-2">Methode</h2>
        <div className="twoColumn">
          <p>
            Proin quis ipsum in arcu finibus molestie. Nulla feugiat quis ex tempor commodo. In rhoncus mattis tellus, nec convallis lorem ullamcorper ac. Proin dapibus augue eu lorem dapibus efficitur. Donec iaculis mi purus, quis congue elit tristique et. Aenean dictum in sapien at eleifend. Pellentesque pretium malesuada tellus non facilisis. Vivamus erat ligula, maximus at ornare consequat, tempus nec elit. Nulla sit amet auctor purus. Nam tincidunt dapibus enim non feugiat. Nulla dignissim blandit nulla, id luctus dui scelerisque id. Etiam eget nibh nec tortor faucibus tincidunt.
          </p>
          <p>
            Ut eu mollis urna, id varius leo. Aenean vehicula commodo magna, eu eleifend metus ultricies efficitur. Vivamus sollicitudin lorem id mauris lacinia vestibulum. Aliquam bibendum non mauris in scelerisque. Maecenas a efficitur urna, vitae viverra ipsum. Nunc ullamcorper elit et lorem mollis consectetur.
          </p>
          <p>
          Nulla quis dapibus dolor. Nunc vestibulum interdum nibh, ac sodales lacus dignissim suscipit. Curabitur convallis viverra tincidunt. Fusce dolor libero, varius vitae ultrices ut, egestas id magna. Nunc eu eros vitae quam finibus pellentesque id non mauris. Sed ante orci, eleifend eget imperdiet sed, molestie in nunc.
          </p>
          <p>
            Proin quis ipsum in arcu finibus molestie. Nulla feugiat quis ex tempor commodo. In rhoncus mattis tellus, nec convallis lorem ullamcorper ac. Proin dapibus augue eu lorem dapibus efficitur. Donec iaculis mi purus, quis congue elit tristique et. Aenean dictum in sapien at eleifend. Pellentesque pretium malesuada tellus non facilisis.
          </p>
        </div>
      </div>

      <div className="thirdBlock">
        <h3 className="title is-3 has-text-white">dit zeggen anderen over mij...</h3>
        <div className="threeColumn">
          <div>
            <h4 className="title is-5 has-text-white">Marianne</h4>
            <p>Lorem ipsum nulla quis dapibus dolor. Nunc vestibulum interdum nibh, ac sodales lacus dignissim suscipit. Curabitur convallis viverra tincidunt.</p>
          </div>
          <div>
            <h4 className="title is-5 has-text-white">Tim</h4>
            <p>Lorem ipsum nulla quis dapibus dolor. Nunc vestibulum interdum nibh, ac sodales lacus dignissim suscipit. Curabitur convallis viverra tincidunt.</p>
          </div>
          <div>
            <h4 className="title is-5 has-text-white">Lisette</h4>
            <p>Lorem ipsum nulla quis dapibus dolor. Nunc vestibulum interdum nibh, ac sodales lacus dignissim suscipit. Curabitur convallis viverra tincidunt.</p>
          </div>
        </div>
      </div>

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


export const getStaticProps: GetStaticProps<SettingsProps> = async ({ params }) => {
  const settings = await getSettings();
  return {
    props: { settings }
  }
}
