import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const logoUrl = '../images/logo.png'
    return (
        <div className="navbar">
            <div className="container">
                {/* Logo part */}
                <div className="navbar-logo-wrapper">
                    <a href="/" 
                        className="navbar-logo"
                        title="Trang chủ" >
                            <img src={logo} alt="" />
                    </a>
                </div>
                
                {/*  */}
                <div className="navbar-main">
                    <ul className="navbar-menu">
                        <li>
                            <a href="/" className="navbar-menu__item">
                                <span>Sáng tác</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navbar-menu__item">
                                <span>Dịch thuật</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="navbar-menu__item">
                                <span>Xuất bản</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="navbar-menu__item">
                                <span>Thảo luận</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="navbar-menu__item">
                                <span>Danh sách</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="navbar-menu__item">
                                <span>Hướng dẫn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar