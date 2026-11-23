import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import PinkCta from './components/PinkCta/PinkCta.jsx';
import Split from './components/Split/Split.jsx';
import PurpleCta from './components/PurpleCta/PurpleCta.jsx';
import Article from './components/Article/Article.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import pen800 from './assets/pen-800.webp';
import pen1231 from './assets/pen-1231.webp';
import watch450 from './assets/watch-450.webp';
import watch900 from './assets/watch-900.webp';

const LEAD =
  'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const SMALL =
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PinkCta />
        <Split
          id="about"
          heading="A heading is what you need here"
          lead={LEAD}
          text={SMALL}
          image={{
            src: pen1231,
            srcSet: `${pen800} 800w, ${pen1231} 1231w`,
            width: 1231,
            height: 821,
            alt: 'A hand in a knitted sleeve writing with a blue pen next to a cup of coffee',
          }}
        />
        <PurpleCta />
        <Article />
        <Split
          reverse
          heading="A heading is what you need here"
          lead={LEAD}
          text={SMALL}
          image={{
            src: watch900,
            srcSet: `${watch450} 450w, ${watch900} 900w`,
            width: 900,
            height: 600,
            alt: 'A wrist with a smart watch resting on a weathered wooden table',
          }}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
