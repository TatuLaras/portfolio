import { LegacyRef, forwardRef } from 'react';

const Contact = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div id='contact' ref={ref}>
            <img
                draggable='false'
                src='res/img/yhteystiedot.png'
                className='wordart'
            />
            <div className='list-item'>
                <img
                    draggable='false'
                    src='res/img/icons/mailbox_world-0.png'
                />
                <div className='text'>
                    <a href='mailto:tatu.laras@gmail.com'>
                        tatu.laras@gmail.com
                    </a>
                </div>
            </div>
            <div className='list-item'>
                <img
                    draggable='false'
                    src='res/img/icons/write_card_phone.png'
                />
                <div className='text'>
                    <a href='phone:+358451787499'>+358 45 1787499</a>
                </div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/icons/url1-0.png' />
                <div className='text'>
                    <a href='http://www.linkedin.com/in/tatularas'>LinkedIn</a>
                </div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/icons/url1-0.png' />
                <div className='text'>
                    <a href='https://github.com/TatuLaras/'>Github</a>
                </div>
            </div>
        </div>
    );
});

export default Contact;
