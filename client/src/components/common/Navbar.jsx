import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const logoUrl = '../images/logo.png'
    return (
        <div className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="navbar-logo-wrapper">
                    <a href="/" 
                        className="navbar-logo"
                        title="Trang chủ" >
                            <img src={logo} alt="" />
                    </a>
                </div>

                {/* Login block */}
                <div className="navbar-user">
                    <a href="/login" className="login">Đăng nhập</a>
                    <div className="guest-menu">
                        <div className="icon">
                            {/* <span className="white-point"></span>
                            <span className="white-point"></span>
                            <span className="white-point"></span> */}
                            <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x"/>
                        </div>
                    </div>
                </div>
                
                {/* Navbar main block */}
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
                    <div className="navbar-search block-m">
                        <form action="/tim-kiem" method="get">
                            <input className="search-input" type="text" placeholder="Tối thiểu 2 ký tự" name="keywords"/>
                            <button className="search-submit" type="submit" value={"Tìm kiếm"}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="font-black"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar