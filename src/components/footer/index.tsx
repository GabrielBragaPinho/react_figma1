
import "./footer.css"


export const Footer = () => {
    return (
        <div className="footer-c1">
            <div className="footer-c2">
                <h2 className="footer-h2">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className="footer-c2-c1">
                    <input className="footer-input" type="text" placeholder="Enter your E-mail address" />
                    <button className="footer-button">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className="footer-c3">
                <div className="footer-div1">
                    <h3 className="footer-h3">SHOP.CO</h3>
                    <p>We have clothes thet suits your style and which you're proud to wear. From women to men.</p>
                </div>
                <div className="footer-div2">
                    <h4>COMPANY</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Carrer</p>
                </div>
                <div className="footer-div2">
                    <h4>HELP</h4>
                    <p>Customer Support</p>
                    <p>Delivery Detais</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-div2">
                    <h4>FAQ</h4>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div className="footer-div2">
                    <h4>RESOURCES</h4>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
            <div className="footer-c4">
                <p>Shop.co © 2000-2023. All Rights Reserved</p>
            </div>
        </div>
    );
};