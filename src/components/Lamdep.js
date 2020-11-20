import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Lamdep(){
    return(
        <div>
            <div className="page">
                <Header/>
                <div className="main">
                    <div className="nav-category">
                        <div className="container">
                            <a href="#">Trang chủ</a>
                            &nbsp;/&nbsp;
                            <a href="#">Làm đẹp</a>
                        </div>
                    </div>
                    <div className="topstr">
                        <div className="container">
                            <div className="topstr_header">
                                <p className="topstr_header_content" style={{fontWeight: 700}}>Làm đẹp</p>
                            </div>
                            <div className="body_content_topstr">
                                <div className="topstr_content_fist">
                                    <div className="zoomin noidung">
                                        <a href="#"><img className="zoomin1" src="img/lam-dep-1.jpg" alt="" width={730} height={547} /></a>
                                    </div>
                                    <div className="backgr-text">
                                    </div>
                                    <div className="move">
                                        <ul className="list_content">
                                            <li className="list_one">
                                                <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Làm đẹp</a></p>
                                            </li>
                                            <li className="list_two">
                                                <p className="hover-line"><a className="big_link" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Review dầu gội đầu Romano dành cho nam giới</a></p>
                                            </li>
                                        </ul>
                                        <ul className="list_content2">
                                            <li>
                                                <span>By <a className="small_link" href="#">Kiều Oanh</a>.</span>
                                            </li>
                                            <li> 17/10/20</li>
                                            <li>
                                                <a className="small_link" href="#"> 180 lượt xem</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topstr_content_second">
                                    <div className="topstr_content_second1">
                                        <div className="zoomin noidung">
                                            <a href="#"><img className="zoomin1" src="img/lam-dep-2.jpg" alt="" width={350} height={257} /></a>
                                        </div>
                                        <div className="backgr-text2">
                                        </div>
                                        <div className="move2">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Làm đẹp</a></p>
                                                </li>
                                                <li>
                                                    <p className="hover-line"><a className="biglink2" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Top 10 thực phẩm đẹp da, càng ăn càng đẹp</a></p>
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
                                                <a href="#"><img className="zoomin1" src="img/lam-dep-3.jpg" alt="" width={350} height={257} /></a>
                                            </div>
                                            <div className="backgr-text2">
                                            </div><div className="move3">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Làm đẹp</a></p>
                                                </li>
                                                <li>
                                                    <p className="hover-line"><a className="biglink2" href="#" style={{textDecoration: 'none', color: 'white', fontWeight: 700}}>Ăn khoai tây luộc có béo không? Giải đáp chi tiết thắc mắc cho bạn</a></p>
                                                </li>
                                                <li>
                                                    <p className="author">By Hoàng Sơn</p>
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
                                                <img className="anh-s" src="img/lam-dep-4.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Đánh giá tẩy da chết Rosette: Giá rẻ nhưng chất lượng có “rẻ”?</a></h3><br />
                                                <p>Tẩy da chết là bước quan trọng không thể thiếu trong quy trình chăm sóc da. Hôm nay Truefood sẽ review cho bạn một sản phẩm tẩy da chết giá...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-5.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Review kem dưỡng ẩm Neutrogena</a></h3><br />
                                                <p>Kem dưỡng ẩm là loại mỹ phẩm cần thiết mà bất kỳ chị em nào cũng nên có. Không chỉ sử dụng vào mùa hanh khô mà kem dưỡng ẩm...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-6.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Nên dùng sữa dưỡng thể Nivea hay sữa dưỡng thể Vaseline?</a></h3><br />
                                                <p>Sữa dưỡng thể Nivea và sữa dưỡng thể Vaseline là hai dòng sữa dưỡng thể xuất hiện nhiều nhất trên thị trường. Nhiều chị em khi lựa chọn sữa dưỡng...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-7.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>
                                                    Làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Sở hữu làn da không tuổi nhờ cách làm đẹp từ hạt chia</a></h3><br />
                                                <p>Hạt chia thường được biết đến là nguyên liệu chế xuất ra các loại nước uống, thực phẩm hỗ trợ ăn kiêng,… Bên cạnh đó, hạt chia còn là một...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-8.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Đồ gia dụng</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Giảm cân hiệu quả với nước ép cần tây</a></h3><br />
                                                <p>Cần tây không chỉ là thực phẩm có thể chế biến nhiều món ăn ngon lành, bổ dưỡng mà bên cạnh đó cần tây còn giúp giảm cân hiệu quả....</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-9.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>5 loại nguyên liệu biến da khô nẻ trở nên mịn màng</a></h3><br />
                                                <p>Mùa đông đến rồi làn da trở nên khô nẻ, bong tróc làm mất đi sự tự tin của bạn. Chỉ với các nguyên liệu rất thân quen trong căn...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-10.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Chống lão hóa da hiệu quả từ thực phẩm thiên nhiên</a></h3><br />
                                                <p>Lão hoa da là nỗi lo của rất nhiều chị em phụ nữ. Qua tuổi 25 làn da bắt đầu xuất hiện những dấu hiệu của lão hóa như: Nếp...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/lam-dep-11.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>làm đẹp</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Những thực phẩm nào giúp mái tóc của bạn luôn chắc khỏe?</a></h3><br />
                                                <p>“Mái tóc là vóc con người” đây là câu nói thể hiện sự quan trọng của mái tóc đối với vẻ đẹp thẩm mỹ của con người. Một số người...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Hoàng Sơn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-2">
                                        <ul style={{listStyleType: 'none'}}>
                                            <li className="hover-slide"><a href="#"><i className="fas fa-angle-left" style={{color: '#797272'}} /></a></li>
                                            <li style={{backgroundColor: '#FF2C54'}}><a href="#" style={{color: 'white'}}>1</a></li>
                                            <li className="hover-slide"><a href="#">2</a></li>
                                            <li className="hover-slide"><a href="#"><i className="fas fa-angle-right" style={{color: '#797272'}} /></a></li>
                                        </ul>
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
export default Lamdep;