import image1 from "../../../assets/images/about_us/person.jpg"
import image2 from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex flex-col md:flex-row  gap-8  bg-base-100 mx-16 mt-20 mb-40">
            <div className="flex-1 relative">
                <img className=" md:w-[40vw] h-[70vh] rounded-lg" src={image1} alt="person" />
                <img className="absolute h-[40vh] md:w-[25vw] -bottom-20 -right-10 border-white border-[15px] rounded-lg" src={image2} alt="" />
            </div>
            <div className="flex-1 ml-10 pt-10">
                <h3 className="text-[#FF3811] font-bold text-xl mb-4">About Us</h3>
                <h2 className="text-4xl font-bold w-[20vw] mb-6">We are qualified & of experience in this field</h2>
                <p className="text-[#737373] mb-2 w-[30vw] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>

                <p className="text-[#737373] mb-10 w-[30vw]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="mt-30">
                    <button className="btn btn-secondary bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;