import { LegacyRef, forwardRef } from 'react';

const CV = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div id='cv' ref={ref}>
            <img
                draggable='false'
                src='res/img/työkokemus.png'
                className='wordart'
            />
            <div className='list-item job'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='content'>
                    <div className='title'>
                        <div className='company'>
                            Simulaattorisektori, puolustusvoimat
                        </div>
                        <div className='position'>Pääohjelmoija</div>
                    </div>
                    <div className='time-period'>
                        Helmikuu 2023 - Syyskuu 2023 (Varusmiespalvelus)
                    </div>
                    <div className='short-desc'>
                        Suoritin varusmiespalvelukseni VKY:n eli
                        virtuaalikoulutusyksikön valtakunnallisena
                        pääohjelmoijana. Ydintehtäviäni olivat:
                        <ul>
                            <li>
                                Uusien NLAW- ja IZLID-simulaattorien luonti
                                käyttäen C#-kieltä Unity-pelimoottorin kanssa.
                            </li>
                            <li>
                                ITKK 96 -simulaattorin jatkokehitys C++-kieltä
                                ja VBS4-simulaattorin omaa SDK:ta käyttäen.
                            </li>
                            <li>
                                DIS-protokollan tuen luonti Unityyn eri
                                simulaatioiden yhdistämistarkoitukseen.
                            </li>
                            <li>
                                Noin 30 muun ohjelmoijan tekninen tukeminen
                                valtakunnallisesti.
                            </li>
                            <li>
                                Noin 30 uuden ohjelmoijan kouluttaminen
                                palveluksen loppupuolella.
                            </li>
                            <li>
                                VBS-simulaattorin lisäosien luonti käyttäen
                                VBS4:n omia työkaluja (SQF).
                            </li>
                            <li>
                                Vaara-Alueiden Piirto-Ohjelman (VAPOn) kehitys
                                käyttäen C++ -kieltä ja Qt:tä.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='list-item job'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='content'>
                    <div className='title'>
                        <div className='company'>GoGolf Oyj</div>
                        <div className='position'>Verkkokehittäjä</div>
                    </div>
                    <div className='time-period'>
                        Huhtikuu 2022 - Joulukuu 2022 (Määräaikainen sopimus)
                    </div>
                    <div className='short-desc'>
                        Toimin enimmäkseen full-stack -verkkokehittäjän roolissa
                        työstäen erinäisiä ratkaisuja liittyen yrityksen
                        tarpeisiin verkkokaupan, verkkokauppadatan ja
                        asiakkuudenhallinnan saralla. Ydintehtäviäni olivat:
                        <ul>
                            <li>
                                Yrityksen datavirtojen (asiakas-, kenttä-,
                                säätieto-, ecom-data yms.) yhdistämiseen
                                tarkoitetun integraatioalustan luonti. Alusta
                                yhdistää yrityksen hajanaiset datavirrat yhdeksi
                                turvalliseksi REST-rajapinnaksi ja tarjoaa
                                dashboardit datan hallintaan. Alusta on
                                toteutettu PHP:llä ja SQL:llä.
                            </li>
                            <li>
                                Uuden web-teknologioilla (PHP, SQL, JavaScript,
                                HTML/CSS) toteutetun{' '}
                                <a href='https://play.google.com/store/apps/details?id=com.choicely.gogolf'>
                                    GoGolf-mobiiliapplikaation
                                </a> luonti.
                            </li>
                            <li>
                                Erinäisten data-integraatioiden ja -koosteiden
                                luonti tarpeen mukaan.
                            </li>
                        </ul>
                        Integraatioalusta ja appi ovat toteutettu
                        rakenteellisesti selkeässä ja ylläpidettävässä muodossa,
                        MVC-arkkitehtuuria noudattaen. Projekteissa on myös
                        PHPUnit -yksikkötestaus.
                    </div>
                </div>
            </div>
            <div className='list-item job'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='content'>
                    <div className='title'>
                        <div className='company'>
                            IT-Palvelu P Viiliäinen Oy
                        </div>
                        <div className='position'>
                            Ohjelmistokehittäjä, kesätyö
                        </div>
                    </div>
                    <div className='time-period'>
                        Kesäkuu 2020 - Heinäkuu 2020 ja Kesäkuu 2021 - Heinäkuu
                        2021 (Kesätyö)
                    </div>
                    <div className='short-desc'>
                        <ul>
                            <li>Mobiilikehitys Xamarin/C# -teknologioilla.</li>
                            <li>
                                Työpöytäohjelmistokehitys Visual Basic .NET- ja
                                Windows Forms -teknologioilla.
                            </li>
                            <li>
                                Verkkokehitys ASP.NET Core -kehyksen kanssa
                                Razor pages -templateiden kera.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='list-item job'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='content'>
                    <div className='title'>
                        <div className='company'>SGN Group Oy</div>
                        <div className='position'>Verkkokehittäjä, kesätyö</div>
                    </div>
                    <div className='time-period'>
                        Kesäkuu 2019 - Heinäkuu 2019 ja Syyskuu 2018 (Kesätyö ja
                        työharjoittelu)
                    </div>
                    <div className='short-desc'>
                        <ul>
                            <li>Verkkokauppakehitys OpenCart-alustalla.</li>
                            <li>
                                Erinäisten data-integraatioiden ja -koosteiden
                                luonti tarpeen mukaan.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CV;
