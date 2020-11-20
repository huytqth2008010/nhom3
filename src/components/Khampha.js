import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Khampha(){
    return(
        <div>
            <div className="page">
                <Header/>
                <div className="main">
                    <div className="nav-category">
                        <div className="container">
                            <a href="#">Trang chủ</a>
                            &nbsp;/&nbsp;
                            <a href="#">Khám phá</a>
                        </div>
                    </div>
                    <div className="topstr">
                        <div className="container">
                            <div className="topstr_header">
                                <p className="topstr_header_content" style={{fontWeight: 700}}>Khám phá</p>
                            </div>
                            <div className="body_content_topstr">
                                <div className="topstr_content_fist">
                                    <div className="zoomin noidung">
                                        <a href="#"><img className="zoomin1" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/mu-cang-chai-mua-lua-chin-8-3brpum8o1ntxt8icr3f0n4.jpg" alt="" width={730} height={547} /></a>
                                    </div>
                                    <div className="backgr-text">
                                    </div>
                                    <div className="move">
                                        <ul className="list_content">
                                            <li className="list_one">
                                                <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            </li>
                                            <li className="list_two">
                                                <p className="hover-line"><a className="big_link" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Thanh xuân này, nhất định phải một lần đi Mù Cang Chải mùa lúa chín</a></p>
                                            </li>
                                        </ul>
                                        <ul className="list_content2">
                                            <li>
                                                <span>By <a className="small_link" href="#">Food Wiki </a>.</span>
                                            </li>
                                            <li> 20/10/20</li>
                                            <li>
                                                <a className="small_link" href="#"> 18 lượt xem</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topstr_content_second">
                                    <div className="topstr_content_second1">
                                        <div className="zoomin noidung">
                                            <a href="#"><img className="zoomin1" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/banh-hoi-chao-long-binh-dinh-7-3bxral29la6jthx96r708w.jpg" alt="" width={350} height={257} /></a>
                                        </div>
                                        <div className="backgr-text2">
                                        </div>
                                        <div className="move2">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                                </li>
                                                <li>
                                                    <p className="hover-line"><a className="biglink2" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Đến Bình Định, nhất định phải thử món bánh hỏi cháo lòng.</a></p>
                                                </li>
                                                <li>
                                                    <p className="author">By Amachea Jajah</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="topstr_content_second2">
                                        <div className="topstr_content_third">
                                            <div className="zoomin noidung">
                                                <a href="#"><img className="zoomin1" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/du-lich-hue-thi-an-gi-6-3brwvee07r0drl9gaakmbk.jpg" alt="" width={350} height={257} /></a>
                                            </div>
                                            <div className="backgr-text2">
                                            </div><div className="move3">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                                </li>
                                                <li>
                                                    <p className="hover-line"><a className="biglink2" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Những món ăn ngon phải thử khi đi du lịch Huế</a></p>
                                                </li>
                                                <li>
                                                    <p className="author">By Amachea Jajah</p>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-post">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/nem-nuong-nha-trang-9-3bz4cawll7ij043qo6641s.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Đặc sản nem nướng Nha Trang</a></h3><br />
                                                <p>Nha Trang là vùng đất biển nổi tiếng với nhiều món ăn ngon. Thế nhưng, kì lạ là đặc sản ở đây không phải là hải sản hay được làm...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/am-thuc-duong-pho-sai-gon-3-3bz47ylit8g9rrj7ik6fi8.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Trải nghiệm ẩm thực đường phố Sài Gòn</a></h3><br />
                                                <p>Đến với thành phố lớn và phát triển như Sài Gòn, bạn sẽ bất ngờ vì thấy cảnh những hàng bán vỉa hè ở khắp mọi nơi. Món ăn được...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/banh-mi-cau-truong-tien-10-3bz3yt9rcdfpom46z4luyo.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Bánh mì cầu Trường Tiền và nét đẹp trong văn hóa ẩm thực Huế</a></h3><br />
                                                <p>Huế là địa danh nổi tiếng với nền ẩm thực vô cùng phong phú. Nơi đây được biết đến với nhiều món ăn không chỉ ngon mà còn rẻ. Trong...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/am-thuc-hai-phong-8-3bz3ub6luxusm17k3o40lc.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Khám phá ẩm thực Hải Phòng</a></h3><br />
                                                <p>Hải Phòng nổi tiếng là mảnh đất có rất nhiều đồ ăn ngon. Nếu bạn là người đam mê ăn uống thì nhất định không thể bỏ qua địa điểm...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/mu-cang-chai-mua-lua-chin-8-3brpum8nbkoq2fr2ogsvsw.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Thanh xuân này, nhất định phải một lần đi Mù Cang Chải mùa lúa chín</a></h3><br />
                                                <p>Mù Cang Chải (MCC) là địa điểm nổi tiếng với những thửa ruộng bậc thang trải dài. Tháng 9 và tháng 10 hằng năm được xem là thời điểm lúa...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="https://truefood.com.vn/wp-content/uploads/bfi_thumb/banh-hoi-chao-long-binh-dinh-7-3bxral29hh069u9qrudtds.jpg " height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Khám phá</a></p>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Đến Bình Định, nhất định phải thử món bánh hỏi cháo lòng.</a></h3><br />
                                                <p>Mỗi vùng miền đều có một đặc sản riêng. Nói đến đặc sản của tỉnh Bình Định, chúng ta có thể kể ra rất nhiều món ăn. Tuy nhiên, không...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Sidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Khampha;