import { useEffect, useRef, useState } from 'react';
import CV from './components/CV';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './portfolio/Portfolio';
import Technologies from './components/Technologies';
import FloatingWindow from './components/FloatingWindow';
import Taskbar from './components/taskbar/Taskbar';

type TStage = 'initial' | 'technologies' | 'cv' | 'portfolio' | 'contact';

export default function App() {
    const [stage, setStage] = useState<TStage>('initial');
    const [floatingWindowText, setFloatingWindowText] = useState('');

    const floatingWindowRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const taskbarRef = useRef<HTMLDivElement>(null);
    const technologiesRef = useRef<HTMLDivElement>(null);
    const cvRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const hasScrolledPast = (elm: HTMLDivElement, offset = 0) => {
        return window.scrollY + offset >= elm.offsetTop + elm.offsetHeight;
    };

    const showTaskbar = () => {
        taskbarRef.current?.classList.remove('hide');
    };

    const hideTaskbar = () => {
        taskbarRef.current?.classList.add('hide');
    };

    useEffect(() => {
        if (stage != 'initial') showTaskbar();
        else hideTaskbar();

        if (!floatingWindowRef.current) return;

        switch (stage) {
            case "technologies":
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p1');
                setFloatingWindowText(
                    'Teknologioiden suhteen olen työskennellyt sekä modernien \
                    työkalujen, että legacyn kanssa, johonkin uuteen \
                    teknologiaan mukautuminen ja perehtyminen ei ole tuottanut minulle ongelmia.',
                );
                break;
            case "cv":
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p2');
                setFloatingWindowText(
                    'Sekä vakaiden tietorakenteiden ja -integraatioiden, että \
                    lähestyttävien käyttöliittymien rakentaminen sujuu kuin \
                    itsestään. Kokemusta löytyy myös muilta ohjelmoinnin osa-alueilta.',
                );
                portfolioRef.current?.classList.remove('current');
                break;

            case "portfolio":
                floatingWindowRef.current.className = 'window';
                portfolioRef.current?.classList.add('current');
                break;

            case "contact":
                portfolioRef.current?.classList.remove('current');
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p1');
                setFloatingWindowText(
                    'Olen tällä hetkellä avoinna kaikenlaisille työmahdollisuuksille, ota rohkeasti yhteyttä!',
                );
                break;

            default:
                floatingWindowRef.current.className = 'window';
                break;
        }
    }, [stage]);

    const checkScroll = () => {
        if (!hasScrolledPast(heroRef.current!)) {
            setStage('initial');
            return;
        }

        if (hasScrolledPast(portfolioRef.current!, 260)) {
            setStage('contact');
            return;
        }

        if (hasScrolledPast(cvRef.current!)) {
            setStage('portfolio');
            return;
        }

        if (hasScrolledPast(technologiesRef.current!, 150)) {
            setStage('cv');
            return;
        }

        setStage('technologies');
    };

    useEffect(() => {
        window.onscroll = checkScroll;
        window.onresize = checkScroll;
    }, []);

    return (
        <>
            <div id='screenspace'>
                <FloatingWindow ref={floatingWindowRef} text={floatingWindowText}/>
                <Taskbar ref={taskbarRef} stage={stage}/>
            </div>

            <div id='wrapper'>
                <div className='bg'></div>
                <Hero ref={heroRef} />

                <div id='showcase-scrollable-region'>
                    <Technologies ref={technologiesRef} />
                    <CV ref={cvRef} />
                    <Portfolio ref={portfolioRef} />
                    <Contact ref={contactRef} />

                    <div className='bonzi'>
                        <div className='bonzi-image'></div>
                    </div>
                </div>
            </div>
        </>
    );
}
