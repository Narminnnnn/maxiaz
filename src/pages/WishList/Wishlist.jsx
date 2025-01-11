import React from 'react'
import "./wishlist.css"

const Wishlist = () => {
    return (
        <section className="Wishlist">
            <h1>Wishlist Page</h1>
            <div className="containerWish">
                <div className="boxes">
                <div className="image">
                    <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                </div>
                <div className="spanlar">
                    <span className='yenilik'>YENILIK</span>
                    <span className='movcudluq'>MOVCUDLUGU DEQIQLESDIRIN</span>
                </div>
                <h4>Dondurucu kamera KRAFT BD (W)- 135QX</h4>
                <h2>395.89 azn</h2>
                </div>

            </div>
        </section>
    )
}

export default Wishlist