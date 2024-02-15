import { LegacyRef, forwardRef } from 'react';

const Hero = forwardRef((_props, ref:LegacyRef<HTMLDivElement>) => {
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
                        <div className='button'>X</div>
                    </div>
                    <div className='body'>
                        <div className='text'>
                            <p>
                                Löytyy n. 6 vuotta kokemusta ohjelmoinnin
                                saralta, joista n. 1.5 on työkokemusta.
                                Kokemusta on kertynyt enimmäkseen web-kehityksen
                                piiristä, mutta mukaan on mahtunut myös
                                mobiilikehitystä, pelinkehitystä ja
                                VR-kehitystä. Parhaiten hallussa olevat
                                ohjelmointikielet ovat
                                <b>JavaScript</b>, <b>PHP</b>, <b>SQL</b>,
                                <b>C#</b> ja <b>C++</b>.
                            </p>
                            <p>
                                Teknologioita, joita olen käyttänyt
                                työympäristössä ovat mm. <b>Xamarin</b>,
                                <b>ASP.NET</b>, <b>C#</b>,
                                <b>Visual Basic .NET</b>, <b>C++</b>,
                                <b>SQL-tietokannat</b>, <b>PHP</b> sekä
                                <b>JavaScript</b>. Omalla ajalla kokemusta on
                                kertynyt näiden lisäksi myös teknologioista{' '}
                                <b>Node.js (ja Express)</b>,<b>React</b>,{' '}
                                <b>websockets</b>, <b>C</b> ja
                                <b>Python</b>.
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
                        <div className='button'>X</div>
                    </div>
                    <div className='body'>
                        <div className='text'>Lue alhaalta lisää!</div>
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
        </div>
    );
});

export default Hero;
