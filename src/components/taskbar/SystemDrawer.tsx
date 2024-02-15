import { useState } from 'react';
import { useInterval } from '../../hooks';

export function SystemDrawer() {
    const [time, setTime] = useState<string>('');

    useInterval(() => {
        const now = new Date();
        setTime(
            `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`,
        );
    }, 5000);

    return (
        <div className='section system-drawer'>
            <div className='start-border'></div>
            <div className='drawer'>
                <img
                    draggable='false'
                    src='res/img/icons/channels-4.png'
                    className='icon'
                />
                <img
                    draggable='false'
                    src='res/img/icons/loudspeaker_rays-0.png'
                    className='icon'
                />
                <div id='time'>{time}</div>
            </div>
        </div>
    );
}
