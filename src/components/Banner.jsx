import '../style/Banner.css';
//import Image from "../assets/banner-home.jpg";


function Banner({home}) {
    const bannerImageClass = "banner banner" + (home ? "--home" : "--about");
    const bannerTextClass = "banner__h1" + (home ? "--home" : "--about");
    return (
        <div className={bannerImageClass}>
            {/*<img src={Image} alt='Blabla' className="banner__image" />*/}
            <h1 className={bannerTextClass}>
                <span>Chez vous, </span>
                <span>partout et ailleurs</span>
            </h1>
        </div>
    );
}

export default Banner