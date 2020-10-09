import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__bounceIn animate__slow">
            <img src={url} alt={title} className='card-img' />
            <div className="card-body">
                <p>{title}</p>
            </div>

        </div>
    )
}
