import React, { useState } from 'react';

//CSS File
import './styles.css';

const HarleyDavidson = () => {

    const [isDriveButtonClick, setIsDriveButtonClick] = useState(false);

    const [isReverseButtonClick, setIsReverseButtonClick] = useState(false);

    const [isBreakButtonClick, setIsBreakButtonClick] = useState(false);

    const [isTransformedButtonClick, setIsTransformedButtonClick] = useState(false);

    const [isWindowButtonClick, setIsWindowButtonClick] = useState(false);

    const [isGasCapButtonClick, setIsGasCapButtonClick] = useState(false);

    const [isDoorLockButtonClick, setIsDoorLockButtonClick] = useState(false);

    const [isAboutMeEntranceButtonClick, setIsAboutMeEntranceButtonClick] = useState(false);

    const [isEntranceOfAboutMeCleared, setIsEntranceOfAboutMeCleared] = useState(false);

    const [isIndicatorButtonClick, setIsIndicatorButtonClick] = useState(false);

    const handleDriveButtonClick = () => {
        setIsDriveButtonClick(true);
        setIsBreakButtonClick(false);
    }

    const handleReverseButtonClick = () => {
        setIsReverseButtonClick(true);
        setIsDriveButtonClick(true);
        setIsBreakButtonClick(false);
    };

    const handleBreakButtonClick = () => {
        setIsBreakButtonClick(true);
        setIsReverseButtonClick(false);
        setIsDriveButtonClick(false);
    };

    const handleTransformedButtonClick = () => setIsTransformedButtonClick(prevState => !prevState);

    const handleWindowButtonClick = () => setIsWindowButtonClick(prevState => !prevState);

    const handleGasCapButtonClick = () => setIsGasCapButtonClick(prevState => !prevState);

    // const handleDoorLockButtonClick = () => setIsAboutMeEntranceButtonClick(prevState => !prevState);

    const handleIndicatorButtonClick = () => setIsIndicatorButtonClick(prevState => !prevState);

    return (

        <>

            <div className='remotes'>

                <div className='remote' onClick={handleDriveButtonClick}>

                    <div className='remote-indicator' />

                    <div className='remote-button'>
                        <button type='button'>DRIVE</button>
                    </div>

                </div>

                <div className='remote' onClick={handleReverseButtonClick}>

                    <div className='remote-indicator' />

                    <div className='remote-button'>
                        <button type='button'>COME BACK</button>
                    </div>

                </div>

                <div className='remote' onClick={handleBreakButtonClick}>

                    <div className='remote-indicator' />

                    <div className='remote-button'>
                        <button type='button'>BREAK</button>
                    </div>

                </div>

                <div className='remote' onClick={handleTransformedButtonClick}>

                    <div className='remote-indicator' />

                    <div className='remote-button'>
                        <button type='button'>TRANSFORM</button>
                    </div>

                </div>

            </div>

            <div className="my-assistant-room">

                <div className=
                    {`
                        ${isTransformedButtonClick ?
                            "my-robot" :
                            "my-car"}
                        ${isDriveButtonClick ? 'my-car drive' : ''}
                        ${isReverseButtonClick ? 'my-car reverse' : ''}
                    `}
                >

                    <div className=
                        {isTransformedButtonClick ?
                            "my-robot-body" :
                            "my-car-body"}
                    >

                        <div
                            className={
                                `
                                    ${isTransformedButtonClick ?
                                    'my-robot-power' :
                                    (isIndicatorButtonClick ?
                                        'my-car-front-light light-opened' :
                                        'my-car-front-light')
                                }
                                `
                            }
                            onClick={!isTransformedButtonClick &&
                                handleIndicatorButtonClick}
                        />

                        <div
                            className={!isTransformedButtonClick && isDriveButtonClick ? 'my-car-front-indicator indicator-on' : 'my-car-front-indicator'}
                        />


                        <div
                            className={isTransformedButtonClick ?
                                "my-robot-face" :
                                "my-car-tires"}
                        >

                            <div
                                className={isTransformedButtonClick ?
                                    "my-robot-eyes" :
                                    "my-car-inside-rims"}
                            >

                                <div
                                    className=
                                    {`
                                        ${isTransformedButtonClick ?
                                            "my-robot-eye" :
                                            "my-car-inside-rim"}
                                        ${!isTransformedButtonClick && isDriveButtonClick ? 'my-car-inside-rim start' : ''}
                                        ${!isTransformedButtonClick && isBreakButtonClick ? 'my-car-inside-rim stop' : ''}
                                    `}
                                />

                                <div
                                    className=
                                    {`
                                        ${isTransformedButtonClick ?
                                            "my-robot-eye" :
                                            "my-car-inside-rim"}
                                        ${!isTransformedButtonClick && isDriveButtonClick ? 'my-car-inside-rim start' : ''}
                                        ${!isTransformedButtonClick && isBreakButtonClick ? 'my-car-inside-rim stop' : ''}
                                    `}
                                />

                            </div>

                            <div
                                className=
                                {isTransformedButtonClick ?
                                    "my-robot-ears" :
                                    "my-car-outside-rims"}
                            >

                                <div
                                    className=
                                    {`
                                        ${isTransformedButtonClick ?
                                            "my-robot-ear" :
                                            "my-car-outside-rim"}
                                        ${!isTransformedButtonClick && isDriveButtonClick ? 'my-car-outside-rim run' : ''}
                                        ${!isTransformedButtonClick && isBreakButtonClick ? 'my-car-outside-rim rest' : ''}
                                    `}
                                />

                                <div
                                    className=
                                    {`
                                        ${isTransformedButtonClick ?
                                            "my-robot-ear" :
                                            "my-car-outside-rim"}
                                        ${!isTransformedButtonClick && isDriveButtonClick ? 'my-car-outside-rim run' : ''}
                                        ${!isTransformedButtonClick && isBreakButtonClick ? 'my-car-outside-rim rest' : ''}
                                    `}
                                />

                            </div>

                        </div>

                        <div
                            className={isTransformedButtonClick ?
                                "my-robot-hands" :
                                "my-car-interior"}
                        >

                            <div
                                className={
                                    `
                                       ${isTransformedButtonClick ?
                                        'my-robot-legs' :
                                        (isDoorLockButtonClick ?
                                            "my-car-door open-the-left-door open-the-right-door" :
                                            "my-car-door")
                                    }
                                    `
                                }
                            >

                                <div className={!isTransformedButtonClick && 'my-car-door-handle'} />

                                <div
                                    className={!isTransformedButtonClick &&
                                        `
                                            my-car-door-window 
                                                ${isDoorLockButtonClick ?
                                            'left-window-opened right-window-opened' :
                                            ''
                                        }

                                                ${isWindowButtonClick ?
                                            'window-opened' :
                                            ''
                                        }
                                        `
                                    }

                                >

                                    <div
                                        className={!isTransformedButtonClick &&
                                            `
                                            window-lines
                                                        
                                            ${isWindowButtonClick ?
                                                'window-lines-collapsed' :
                                                'window-lines-expand'
                                            }

                                            ${isDoorLockButtonClick ?
                                                'window-lines-collapsed' :
                                                'window-lines-expand'
                                            }
                                        `
                                        }
                                    />

                                    <div
                                        className={
                                            isTransformedButtonClick ?
                                                'my-robot-middle-of-hand' :
                                                'my-car-window-lock'
                                        }
                                        onClick={handleWindowButtonClick}
                                    />

                                </div>

                            </div>

                        </div>

                        <div
                            className={
                                `
                                    ${isTransformedButtonClick ?
                                    'my-robot-shoes-heel' :
                                    (isGasCapButtonClick ? "my-car-gas-cap cap-opened" : "my-car-gas-cap")
                                }
                                `
                            }
                            onClick={handleGasCapButtonClick}
                        />

                        <div
                            className={!isTransformedButtonClick && "my-car-silencer-1"}
                        />

                        <div
                            className={!isTransformedButtonClick && "my-car-silencer-2"}
                        />

                    </div>

                </div>

            </div>

        </>

    )

}

export default HarleyDavidson;