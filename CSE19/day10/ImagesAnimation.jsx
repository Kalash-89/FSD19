import React, { useEffect, useState } from 'react'

const ImagesAnimation = () => {
    const [index, setIndex] = useState(0)
    const [position, setPosition] = useState(0)

    const images = [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
    ]

    useEffect(() => {
        const interval = setInterval(() => {

            // Center → Left
            setPosition(-300)

            setTimeout(() => {
                // Left → Center
                setPosition(0)

                setTimeout(() => {
                    // Center → Right
                    setPosition(300)

                    setTimeout(() => {
                        // Right → Center
                        setPosition(0)

                        // Next image
                        setIndex((prevIndex) => (prevIndex + 1) % images.length)

                    }, 1000)

                }, 1000)

            }, 1000)

        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Image Animation</h1>

            <img
                src={images[index]}
                alt="slider"
                style={{
                    height: "300px",
                    width: "500px",
                    objectFit: "cover",
                    transform: `translateX(${position}px)`,
                    transition: "transform 0.5s ease-in-out"
                }}
            />
        </div>
    )
}

export default ImagesAnimation 