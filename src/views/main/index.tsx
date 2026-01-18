import React from 'react'

import ColorBends from './ColorBends'

const MainView: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
                <ColorBends
                    colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
                    rotation={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent
                    autoRotate={0}
                />
            </div>
        </div>
    )
}

export default MainView
