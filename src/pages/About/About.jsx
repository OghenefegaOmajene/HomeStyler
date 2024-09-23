import './About.css'
// import images from "../../assets/images/pexels-curtis-adams-1694007-4221414.jpg"
// import images2 from "../../assets/images/pexels-falling4utah-2724748.jpg"
// import images3 from "../../assets/images/pexels-fotoaibe-1571460.jpg"
// import images4 from "../../assets/images/pexels-ilya-shakir-1278798-2440471.jpg"
// import profile1 from "../../assets/images/_TZ09521.jpg"
// import profile2 from "../../assets/images/_TZ09522.jpg"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const About = () => {
    AOS.init({
        offset:1,
    });
  return (
    <>
      <header className="main">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </header>

      <main className="container">
        <section className="card" data-aos="fade-right" data-aos-duration="1400">
            <img src={''} alt="" />
            <div data-aos="zoom-in" data-aos-duration="1400">
                <h3>Our Vision:</h3>
                <p>To revolutionize the way people design, furnish, and live in their dream homes, making beautiful and functional spaces accessible to everyone.</p>
            </div>
        </section>

        <section className="card" data-aos="fade-left" data-aos-duration="1400">
            <img src={''} alt="" />
            <div data-aos="zoom-in" data-aos-duration="1400">
                <h3>Our Mission:</h3>
                <p>To provide an innovative platform that inspires creativity, simplifies home decorating, and connects users with top-quality furniture and appliance options, fostering a community of homeowners, designers, and industry experts.</p>
            </div>
        </section>

        <section className="card" data-aos="fade-right" data-aos-duration="1400"> 
            <img src={''} alt="" />
            <div data-aos="zoom-in" data-aos-duration="1400">
                <h3>Our Goals:</h3>
                <p>1. Offer an extensive catalog of stylish and affordable furniture and appliances.</p>
                <p>   2. Provide intuitive design tools and room planning features.</p>
                <p>  3. Foster a community of users, designers, and industry experts for inspiration and collaboration.</p>
                <p>  4. Ensure seamless navigation and user-friendly interface.</p>
                <p>  5. Partner with reputable brands and suppliers for exclusive offerings.</p>
            </div>
        </section>

        <section className="card" data-aos="fade-left" data-aos-duration="1400">
            <img src={''} alt="" />
            <div data-aos="zoom-in" data-aos-duration="1400">
                <h3>Our Aim:</h3>
                <p>To become the go-to destination for home interior solutions, empowering users to create their perfect living spaces with ease, confidence, and style.</p>
            </div>
        </section>
      </main>

      <div className="team">
            <div className="team-header">
                <h2>Meet the Gamma Dev</h2>
                <p>These are the brains behind this work</p>
            </div>

            <div className="profile">
                <div className="single-profile">
                    <div className="profile-img">
                        <img src={''} alt="" />
                    </div>

                    <div className="profile-txt">
                        <div className="profile-name">
                            <h2>Restorer Barisereden</h2>
                            <p>Developer</p>
                        </div>
                        <p>A growing developer and student of APTECH</p>
                    </div>
                </div>

                <div className="single-profile">
                    <div className="profile-img">
                        <img src={''} alt="" />
                    </div>

                    <div className="profile-txt">
                        <div className="profile-name">
                            <h2>Restorer Barisereden</h2>
                            <p>Developer</p>
                        </div>
                        <p>A growing developer and student of APTECH</p>
                    </div>
                </div>

            </div>

                

        </div>

        
    </>
  )
}

export default About;