import '../style/Banner.css';

function Banner({home}) {
    const bannerImageClass = "banner banner" + (home ? "--home" : "--about");
    const bannerTextClass = "banner__h1" + (home ? "--home" : "--about");
    return (
        <div className={bannerImageClass}>
            <h1 className={bannerTextClass}>
                <span>Chez vous, </span>
                <span>partout et ailleurs</span>
            </h1>
        </div>
    );
}

export default Banner