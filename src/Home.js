import React from 'react'
import Header from './Header'
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Content from './Content';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Header />

            <div role="main" className="main">
                <Banner />
                <BannerBottom />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Home
