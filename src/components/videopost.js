import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Videopost(){
    return(
        <div>
            <div className="page">
                <Header/>
                <div className="main">
                    <div className="nav-category">
                        <div className="container">
                            <a href="#">Trang chủ</a>&nbsp;/&nbsp;
                            <a href="#">Video</a>&nbsp;/&nbsp;
                            <a href="#">Đặc sản ngon khó tìm ăn tuyệt đỉnh</a>
                        </div>
                    </div>
                    <div className="topstr">
                        <div className="container">
                            <div className="topstr_header">
                                <a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Video</a>
                                <h1 style={{fontWeight: 700}}>Đặc sản ngon khó tìm ăn tuyệt đỉnh</h1>
                            </div>
                            <ul className="list-inline">
                                <li><a href="#">Kiều Oanh</a></li>
                                <li><a href="#"><i className="fa fa-eye" /> 53 Lượt xem</a></li>
                                <li><a href="#"><i className="fa fa-calendar" /> Wed 09, 2020 7:58 am</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-post">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <iframe width="100%" height={550} src="https://www.youtube.com/embed/n2icxQPTcBk" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    <ul className="tag">
                                        <li><a href="#" rel="tag">Đặc sản</a></li>
                                        <li><a href="#" rel="tag">Khoai lang thang</a></li>
                                        <li><a href="#" rel="tag">Món ngon</a></li>
                                        <li><a href="#" rel="tag">Review</a></li>
                                    </ul>
                                    <div style={{paddingTop: '30px', paddingBottom: '50px', borderBottom: '1px solid silver'}}>
                                        <h4 className="col-md-2" style={{paddingTop: '2px'}}><b>SHARE: </b></h4>
                                        <div>
                                            <button className="btn btn-primary" style={{width: '100px', fontSize: '18px'}}><span className="Khung_1"><i className="fab fa-facebook-f" /></span></button>
                                            <button className="btn btn-success" style={{width: '100px', fontSize: '18px'}}><span className="Khung_1"><i className="fab fa-twitter" /></span></button>
                                            <button className="btn btn-warning" style={{width: '100px', fontSize: '18px'}}><span className="Khung_1"><i className="fab fa-instagram" /></span></button>
                                            <button className="btn btn-danger" style={{width: '100px', fontSize: '18px'}}><span className="Khung_1"><i className="fab fa-linkedin-in" /></span></button>
                                        </div>
                                    </div>
                                    <h1 style={{padding: '10px 10px', marginBottom: '50px'}}><b>Cùng chuyên mục</b></h1>
                                    <div style={{width: '245px', float: 'left'}}>
                                        <div className="related-post-main-img anh-son">
                                            <a href="###" className="text-a ">
                                                <img src="https://review.food.com.vn/wp-content/uploads/bfi_thumb/lam-mon-pho-mai-3bkqbdqmve5qcu2c6daolc.jpg" style={{width: '100%'}} />
                                                <div className="blackdown" />
                                            </a>
                                            <div className="related-post-main-text">
                                                <h3 className="hover-line " style={{color: 'white'}}>
                                                    <a href="#" className="text-main-a" style={{textDecoration: 'none'}}>
                                                        <b>Cách làm món khoai tây que ăn tuyệt đỉnh</b>
                                                    </a>
                                                </h3>
                                                <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width: '245px', float: 'left', marginLeft: '50px'}}>
                                        <div className="related-post-main-img anh-son">
                                            <a href="###" className="text-a ">
                                                <img src="https://review.food.com.vn/wp-content/uploads/bfi_thumb/khoa-lang-thang-3bkq91t0ry3xwffyvpsohs.jpg" style={{width: '100%'}} />
                                                <div className="blackdown" />
                                            </a>
                                            <div className="related-post-main-text">
                                                <h3 className="hover-line " style={{color: 'white'}}>
                                                    <a href="#" className="text-main-a" style={{textDecoration: 'none'}}>
                                                        <b>Ăn cua biển trên ghe hàng Miền Tây</b>
                                                    </a>
                                                </h3>
                                                <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 style={{padding: '10px 10px', marginTop: '400px'}}><b>Bài đọc nhiều</b></h1>
                                    <div style={{width: '100%', height: '200px'}}>
                                        <img src="img/1.jpg" alt="" width="27%" style={{float: 'left'}} />
                                        <div style={{width: '400px', fontSize: '18px', fontWeight: 700, float: 'left', marginLeft: '50px'}}>
                                            <a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Cafe</a>
                                            <a href="#" style={{float: 'left', color: '#585858', marginTop: '10px', marginBottom: '10px'}}>Trung Thu đi đâu để
                                                không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</a>
                                            <p style={{fontSize: '14px', color: 'silver', fontWeight: 200}}>By <a style={{color: 'silver'}} href="#">Kiều Oanh</a></p>
                                        </div>
                                    </div>
                                    <div style={{width: '100%', height: '200px', marginTop: '50px'}}>
                                        <img src="https://review.food.com.vn/wp-content/uploads/bfi_thumb/ca0696842f0dd053891c-3brnnhe6nwvf90yz8zvbpc.jpg" alt="" width="27%" style={{float: 'left'}} />
                                        <div style={{width: '400px', fontSize: '18px', fontWeight: 700, float: 'left', marginLeft: '50px'}}>
                                            <a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Teen Star</a>
                                            <a href="#" style={{float: 'left', color: '#585858', marginTop: '10px', marginBottom: '10px'}}>Bật mí về cuộc sống của cô nàng hot-girl Bắc Ninh: Dù công việc bận rộn nhưng vẫn đam mê nấu ăn và làm tình nguyện</a>
                                            <p style={{fontSize: '14px', color: 'silver', fontWeight: 200}}>By <a style={{color: 'silver'}} href="#">Kiều Oanh</a></p>
                                        </div>
                                    </div>
                                    <div style={{width: '100%', height: '200px', marginTop: '50px'}}>
                                        <img src="https://review.food.com.vn/wp-content/uploads/bfi_thumb/thuc-pham-protein-3bka4yn8423u03zsvq677k.jpg" alt="" width="27%" style={{float: 'left'}} />
                                        <div style={{width: '400px', fontSize: '18px', fontWeight: 700, float: 'left', marginLeft: '50px'}}>
                                            <a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Bí quyết</a>
                                            <a href="#" style={{float: 'left', color: '#585858', marginTop: '10px', marginBottom: '10px'}}>Thực phẩm tăng cân cho người gầy và cách sử dụng hiệu quả nhất</a>
                                            <p style={{fontSize: '14px', color: 'silver', fontWeight: 200}}>By <a style={{color: 'silver'}} href="#">Kiều Oanh</a></p>
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
export default Videopost;