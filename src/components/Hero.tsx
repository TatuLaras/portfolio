import { LegacyRef, forwardRef, useRef } from 'react';
import Bonzi from './Bonzi';

const Hero = forwardRef(
    (
        { disableBonzi }: { disableBonzi: boolean },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
        const bonziRef = useRef<HTMLDivElement>(null);

        function onTryCloseWindow() {
            bonziRef.current?.classList.add('show');
        }

        return (
            <div id='main-lander' ref={ref}>
                <div className='left'>
                    <div className='images'>
                        <img
                            draggable='false'
                            src='res/img/globe_rt.gif'
                            width='300'
                            className='pixelated globe'
                        />

                        <img
                            draggable='false'
                            src='res/img/statue_rt.gif'
                            width='200'
                            className='pixelated'
                        />
                    </div>

                    <div className='window disabled info1'>
                        <div className='header'>
                            <div className='start'>
                                <img
                                    draggable='false'
                                    src='res/img/icons/msg_information-2.png'
                                    className='icon pixelated'
                                />
                                <span className='title'>Info</span>
                            </div>
                            <div className='button' onClick={onTryCloseWindow}>
                                X
                            </div>
                        </div>
                        <div className='body'>
                            <div className='text'>
                                <p>
                                    Löytyy n. 6 vuotta kokemusta ohjelmoinnin
                                    saralta, joista noin puolisentoista on
                                    työkokemusta. Kokemusta on kertynyt
                                    enimmäkseen web-kehityksen piiristä, mutta
                                    mielenkiinto on johdattanut monenlaisille
                                    muillekin poluille, kuten esimerkiksi
                                    mobiilikehityksen, VR-kehityksen ja
                                    käyttöjärjestelmäkehityksen pariin.
                                </p>
                                <p>
                                    Teknologioista parhaiten taittuvat
                                    front-endissä
                                    <b> React</b>-pohjaiset ratkaisut ja myös
                                    kaikenlainen Vanilla-vääntäminen. Back-endin
                                    puolella kokemusta on karttunut eniten{' '}
                                    <b>Node.js</b> (ja <b>Express</b>)
                                    -ympäristöstä, sekä klassikko-<b>PHP</b>:n
                                    kanssa on tultu työskenneltyä työn
                                    puolestakin paljon.
                                    <b> SQL</b>-relaatiotietokannat (
                                    <b>MariaDB/MySQL</b>, <b>SQL Server</b>)
                                    tunnen kuin omat taskuni .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='window info2'>
                        <div className='header'>
                            <div className='start'>
                                <img
                                    draggable='false'
                                    src='res/img/icons/utopia_smiley.png'
                                    className='icon pixelated'
                                />
                                <span className='title'>Hmm...</span>
                            </div>
                            <div className='button' onClick={onTryCloseWindow}>
                                X
                            </div>
                        </div>
                        <div className='body'>
                            <div className='text'>Lue lisää alhaalta!</div>
                            <a className='ok' href='#technologies'>
                                <span className='button-text'>OK</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h1>
                        タトゥ・ララス
                        <br />
                        TATU LARAS
                    </h1>
                </div>
                {!disableBonzi && (
                    <Bonzi
                        title='Hei!'
                        type='explaining2'
                        hideSpeechbubble={false}
                        ref={bonziRef}
                    >
                        Älä sitä sulje.
                    </Bonzi>
                )}
            </div>
        );
    },
);

export default Hero;
