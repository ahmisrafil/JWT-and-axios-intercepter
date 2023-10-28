import image1 from "../../../assets/images/homeCarousel/1.jpg"
import image2 from "../../../assets/images/homeCarousel/2.jpg"
import image3 from "../../../assets/images/homeCarousel/3.jpg"
import image4 from "../../../assets/images/homeCarousel/4.jpg"

const Banner = () => {
    const bannerText = <>
        <div className="absolute flex flex-col gap-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[100%] w-[100%] pt-20 pl-24">
            <h3 className="text-white text-xl lg:text-5xl  font-bold w-[25%] h ">Affordable Price For Car Servicing</h3>
            <p className="text-[#FFF]  text-lg w-[30vw]" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-4">
                <button className="btn btn-secondary bg-[#FF3811] text-white">Discover More</button>
                <button className="btn btn-ghost text-white border-white">Latest Project</button>
            </div>
        </div>
    </>
    return (
        <div className="carousel w-[90vw] mx-16  md:h-[80vh] ">
            <div id="slide1" className="carousel-item relative w-[90vw]">
                <img src={image1} className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-[90vw]">
                <img src={image2} className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-[90vw]">
                <img src={image3} className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-[90vw]">
                <img src={image4} className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;