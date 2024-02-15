export default function Taskmanager({ stage }: { stage: string }) {
    return (
        <div className='section taskmanager'>
            <div className='start-border'></div>
            <div className='dimple'></div>
            <div className='items'>
                <a
                    className={`item ${stage === 'technologies' && 'selected'}`}
                    href='#technologies'
                >
                    <img
                        draggable='false'
                        src='res/img/icons/application_hammer_grouppol-1.png'
                        className='icon'
                    />
                    <span className='text'>Kielet ja teknologiat</span>
                </a>
                <a
                    className={`item ${stage === 'cv' && 'selected'}`}
                    href='#cv'
                >
                    <img
                        draggable='false'
                        src='res/img/icons/file_eye.png'
                        className='icon'
                    />
                    <span className='text'>Työkokemus</span>
                </a>
                <a
                    className={`item ${stage === 'portfolio' && 'selected'}`}
                    href='#portfolio'
                >
                    <img
                        draggable='false'
                        src='res/img/icons/directory_explorer-2.png'
                        className='icon'
                    />
                    <span className='text'>Portfolio</span>
                </a>
                <a
                    className={`item ${stage === 'contact' && 'selected'}`}
                    href='#contact'
                >
                    <img
                        draggable='false'
                        src='res/img/icons/fax_machine-1.png'
                        className='icon'
                    />
                    <span className='text'>Yhteystiedot</span>
                </a>
            </div>
        </div>
    );
}
