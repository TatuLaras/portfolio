import { TPortfolioItem } from './types';

export const floatingWindowContent = (stage: string) => {
    return (
        {
            contact: (
                <>
                    Olen tällä hetkellä avoinna kaikenlaisille
                    työmahdollisuuksille!
                </>
            ),
            cv: (
                <>
                    Vakaiden tietorakenteiden ja -integraatioiden rakentaminen
                    sujuu kuin itsestään. Myös lähestyttävien käyttöliittymien
                    suunnittelu ja toteutus sytyttää.
                </>
            ),
            technologies: (
                <>
                    Teknologioiden suhteen olen työskennellyt sekä modernien
                    työkalujen, että legacyn kanssa, johonkin uuteen
                    teknologiaan mukautuminen ja perehtyminen ei ole tuottanut
                    minulle ongelmia.
                </>
            ),
        }[stage] ?? null
    );
};

export const portfolioItems: TPortfolioItem[] = [
    {
        title: 'Merge Your Music',
        icon: 'res/img/icons/mixer_keyboard_musical-0.png',
        content: (
            <>
                <img src='res/img/portfolio/mym.png' />
                <div className="tech">React, Vite, TypeScript, Node.js, Express, Websockets, REST API</div>
                <q>
                    <p>
                        Merge your music taste with someone else's! Login with
                        Spotify and send a link to your friend to start
                        generating playlists from music you both enjoy.
                    </p>
                </q>
                <p>
                    Spotify:n API-avaimeni kohtalo on vielä käsitteillä,
                    tarkoittaen että vain ennalta määritetyt "betatestaajat"
                    pystyvät kirjautua applikaatioon. Tämä muuttuu mikäli
                    Spotify hyväksyy hakemukseni, jonka käsittelyyn pitäisi
                    kulua noin 1,5 kk. Mikäli haluat betatestaajaksi, laitathan
                    minulle meiliä!
                </p>
                <p>
                    <a href='http://mergeyourmusic.laras.cc/' target='_blank'>
                        Merge Your Music
                    </a>
                </p>
            </>
        ),
    },
    {
        title: 'MediaManager',
        icon: 'res/img/icons/multimedia-3.png',
        content: (
            <>
                <img src='res/img/portfolio/mediamanager.png' />
                <div className="tech">C++, Dear ImGui, REST API</div>
                <q>
                    <p>
                        A cross-platform entertainment hub for managing your
                        local collection of movies and TV shows.
                    </p>
                </q>
                <p>
                    <a
                        href='https://github.com/TatuLaras/MediaManager'
                        target='_blank'
                    >
                        MediaManager GitHubissa
                    </a>
                </p>
            </>
        ),
    },
    {
        title: 'Submerge (web)',
        icon: 'res/img/icons/world_address_book-0.png',
        content: (
            <>
                <img src='res/img/portfolio/submergeold.jpg' />
                <div className="tech">JavaScript, Node.js, Express, MySQL, EJS, REST API, Bootstrap</div>
                <q>
                    <p>
                        Language immersion aka. consuming content that's in a
                        foreign language for language learning purposes is{' '}
                        <b>by far</b> the most effective language learning
                        method according to current research.{' '}
                    </p>
                    <p>
                        <b>Submerge Immersion Tracker</b> is a tracker of your
                        immersion: the time you spend immersing, what kind of
                        immersion you do (reading, listening, active, passive),
                        and the content you choose to do it with. This app gives
                        you an intuitive interface to add that data to the
                        current day or edit previous days. Afterward, you can
                        look at aggregate data graphs and statistics of that
                        data or get a more detailed view of it in a
                        spreadsheet-like form. The app also includes some social
                        features, letting you add friends and see their recent
                        immersion data.
                    </p>
                </q>
                <p>
                    Projekti ei ole tällä hetkellä hostattuna missään koska
                    uudempi työpöytäpohjainen offline-versio on tekeillä. Vanhan
                    etusivun löydät{' '}
                    <a
                        href='https://tatularas.github.io/submerge-landing/'
                        target='_blank'
                    >
                        täältä
                    </a>
                    .
                </p>
                <p>Esittelyvideo:</p>
                <iframe
                    className='video-embed'
                    src='https://www.youtube.com/embed/Ggv0v3yDv28'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </>
        ),
    },
    {
        title: 'Muut projektit',
        icon: 'res/img/icons/globe_map-2.png',
        content: (
            <>
                <p>
                    Muut pienemmät projektit löydät{' '}
                    <a href='https://github.com/TatuLaras/' target='_blank'>
                        GitHubistani
                    </a>
                    .
                </p>
                <ul>
                    <li>
                        <a
                            href='https://tatularas.github.io/win98clone/'
                            target='_blank'
                        >
                            Windows 98 -klooni
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://tatularas.github.io/Sand-simulation-on-the-web/'
                            target='_blank'
                        >
                            Hiekkasimulaatio
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://github.com/TatuLaras/nes-platformer/tree/master'
                            target='_blank'
                        >
                            NES-projekti
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
];
