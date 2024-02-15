import { LegacyRef, forwardRef } from 'react';

const Technologies = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div id='technologies' ref={ref}>
            <img
                draggable='false'
                src='res/img/wordart.png'
                className='wordart'
            />
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>HTML, CSS, JavaScript, React</div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>PHP, Node.js</div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>SQL-tietokannat, MySQL, SQL Server</div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>C#, .NET, ASP.NET, Unity Game Engine</div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>Visual Basic .NET, Windows Forms</div>
            </div>
            <div className='list-item'>
                <img draggable='false' src='res/img/point_right.gif' />
                <div className='text'>C++, Dear ImGui, Qt</div>
            </div>
        </div>
    );
});

export default Technologies;
