import { LegacyRef, forwardRef } from 'react';
import { SystemDrawer } from './SystemDrawer';
import Taskmanager from './Taskmanager';

const Taskbar = forwardRef(
    ({ stage }: { stage: string }, ref: LegacyRef<HTMLDivElement>) => {
        return (
            <div id='taskbar' className='hide' ref={ref}>
                <div
                    id='start-button'
                    className='border'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    <img
                        draggable='false'
                        src='res/img/icons/windows-0.png'
                        className='icon'
                    />
                    <span className='text'>Start</span>
                </div>
                <div className='section divider'>
                    <div className='start-border'></div>
                    <div className='dimple'></div>
                </div>
                <Taskmanager stage={stage} />
                <SystemDrawer />
            </div>
        );
    },
);

export default Taskbar;
