import {Link} from "react-router-dom";
export default function Header() {
        return (
            <div>
                <div>
                    <header className="section header">
                        <div id="header">
                            <div className="container">
                                <div className="header">
                                    <div className="date">
                                        <p>August 18, 2020    8:49 am</p>
                                    </div>
                                    <div className="header_icon">
                                        <ul>
                                            <li className="header_icon_1"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="header_icon_1"><a href="#"><i className="fab fa-instagram" /></a></li>
                                            <li className="header_icon_1"><a href="#"><i className="fab fa-twitter" /></a></li>
                                            <li className="header_icon_1"> <a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <nav>
                        <div className="navbar-default">
                            <div id="nav">
                                <div className="container">
                                    <div className="navbar-header">
                                        <Link to={"/"}  className="navbar-brand"><img className="img_1" src="img/logo-food.png" width={50} /></Link>
                                        <Link to={"/"}  className="navbar-brand nav_1" style={{fontSize: '16px'}}>Trang Chủ
                                        </Link>
                                    </div>
                                    <ul className="nav navbar-nav dropdown" style={{fontSize: '16px'}}>
                                        <li className="li_nav">
                                            <Link to={"/cong-thuc"} className="nav_1">Công thức <i className="fas fa-angle-down" /></Link>
                                            <div className="nav_2">
                                                <Link to={"/cong-thuc/mon-an"}><div className="nav_2-1" style={{width: '70px'}}>Món ăn</div></Link>
                                                <Link to={"/cong-thuc/do-uong"}><div className="nav_2-1" style={{width: '70x'}}>Đồ uống</div></Link>
                                            </div>
                                        </li>
                                        <li className="li_nav">
                                            <Link to={"/suc-khoe"} className="nav_1">Sức khỏe <i className="fas fa-angle-down" /></Link>
                                            <div className="nav_2">
                                                <Link to={"/suc-khoe"}><div className="nav_2-1" style={{width: '70px'}}>Bệnh</div></Link>
                                                <Link to={"/thuoc"}><div className="nav_2-1" style={{width: '70px'}}>Thuốc</div></Link>
                                                <Link to={"/dinh-duong"}><div className="nav_2-1" style={{width: '8 0px'}}>Dinh dưỡng</div></Link>
                                            </div>
                                        </li>
                                        <li><Link to={"/Lam-dep"} className="nav_1">Làm đẹp</Link></li>
                                        <li><Link to={"/kham-pha"} className="nav_1">Khám phá</Link></li>
                                        <li><Link to={"/meo-vat"} className="nav_1">Mẹo vặt</Link></li>
                                        <li><Link to={"/do-gia-dung"} className="nav_1">Đồ gia dụng</Link></li>
                                        <li><Link to={"/video"} className="nav_1">Video</Link></li>
                                        <li>
                                            <a href="#" className="Bar" style={{fontSize: '20px'}}><i className="fas fa-bars" /></a>
                                        </li>
                                    </ul>
                                    <div className="search-box">
                                        <input type="text" placeholder="Type to search.." />
                                        <div className="search-icon">
                                            <i className="fas fa-search" />
                                        </div>
                                        <div className="cancel-icon">
                                            <i className="fas fa-times" />
                                        </div>
                                        <div className="search-data">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    };