import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import './home.css'
import pin1 from"../../assets/pic1.jpg"
import versace from "../../assets/versace.svg"
import zara from "../../assets/zara.svg"
import gucci from "../../assets/gucci.svg"
import prada from "../../assets/prada.svg"
import cklein from "../../assets/cklein.svg"


export const Home = () => {
    return (
        <div className="c1">
            <Header />
            <div className="c2">
                <div className="c2-c1">
                    <div className="c2-c1_1">
                        <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button>Shop Now</button>
                    </div>

                    <div className="c2-c1-c3">
                        <div className="c2-c1-c3-c4">
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className="c2-c1-c3-c4">
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="c2-c1-c3-c4">
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="c2-c2">
                    <img src={pin1} />
                </div>
            </div>
            <div className="c3">
                <img src={versace} className="img2" />
                <img src={zara} className="img2" />
                <img src={gucci} className="img2" />
                <img src={prada} className="img2" />
                <img src={cklein} className="img2" />
            </div>
            <Footer />
        </div>
    )
}