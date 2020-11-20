import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Post(){
    return(
        <div>
            <div className="page">
                <Header/>
                <div className="main">
                    <div className="nav-category">
                        <div className="container">
                            <a href="#">Trang chủ</a>&nbsp;/&nbsp;
                            <a href="#">Địa điểm</a>&nbsp;
                            <a href="#">Cafe</a>&nbsp;/&nbsp;
                            <a href="#">Trung Thu đi đâu để không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</a>
                        </div>
                    </div>
                    <div className="topstr">
                        <div className="container">
                            <div className="topstr_header">
                                <a className="fist_list_content" href="#" style={{textDecoration: 'none', fontWeight: 700}}>Cafe</a>
                                <h1 style={{fontWeight: 700}}>Trung Thu đi đâu để không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</h1>
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
                                    <div style={{fontSize: '20px'}}>
                                        <b>Chỉ còn vài ngày nữa là đã cận kề đến Trung thu rồi, bạn đã có dự định đi đâu chưa? Nếu chưa thì đừng bỏ lỡ bài viết này nhé. Vì ngay bây giờ,Food.com.vn sẽ giới thiệu đến bạn một địa điểm vô cùng lý tưởng.</b>
                                    </div>
                                    <img style={{paddingTop: '30px'}} src="https://review.food.com.vn/wp-content/uploads/2020/09/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-uong-ngon-2-768x1024.jpg" alt="" />
                                    <div className="trung_thu3-2" style={{paddingTop: '10px'}}><i>Một góc sống ảo tại quán</i></div>
                                    <p style={{fontSize: '20px', paddingTop: '30px'}}>Đây là nơi không quá đông đúc như Hàng Mã, lên hình đẹp lung linh
                                        mà đồ ăn và thức uống cũng rất vừa miệng. Và địa điểm mà Food.com.vn muốn kể đến đó là một quán cà phê mang tên Cafe 1994.</p>
                                    <img style={{paddingTop: '30px'}} src="https://review.food.com.vn/wp-content/uploads/2020/09/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-uong-ngon-8.jpg" alt="" />
                                    <div className="trung_thu3-2" style={{paddingTop: '10px'}}><i>Một góc khác để các bạn check-in</i></div>
                                    <p style={{fontSize: '20px', paddingTop: '30px'}}>Quán này khá dễ tìm, nằm ở tầng 8 tại một tòa nhà ở số 84 Nguyễn
                                        Ngọc Vũ. Điểm đầu tiên gây ấn tượng của quán đó chính là được decor rất đẹp. Quán dành riêng một phòng để bố trí theo phong cách cổ trang, có đèn lồng, hoa đăng và cực nhiều góc sống ảo. Ngoài tầng 8 thì quán còn có một tầng thượng nữa, cho bạn tha hồ chụp ảnh.</p>
                                    <img style={{paddingTop: '30px'}} src="https://review.food.com.vn/wp-content/uploads/2020/09/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-uong-ngon-9-1024x1024.jpg" alt="" />
                                    <div className="trung_thu3-2" style={{paddingTop: '10px'}}><i>Trên tầng thượng cũng không ít góc sống
                                        ảo</i></div>
                                    <p style={{fontSize: '20px', paddingTop: '30px'}}>Điểm đặc biệt của quán chính là có một dàn đồ cổ trang đầy màu
                                        sắc. Bạn có thể chọn thuê một bộ đồ tùy thích để chụp hình. Giá thuê đồ giao động từ khoảng 70-80 ngàn đồng.</p>
                                    <img style={{paddingTop: '30px'}} src="https://review.food.com.vn/wp-content/uploads/2020/09/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-uong-ngon-3-1024x1024.jpg" alt="" />
                                    <div className="trung_thu3-2" style={{paddingTop: '10px'}}><i>Khách mặc đồ cổ trang và chụp ảnh tại
                                        quán</i></div>
                                    <p style={{fontSize: '20px', paddingTop: '30px'}}>Vì là quán cà phê nên đồ uống của các bạn ấy cũng rất đa dạng. Có
                                        nhiều sự lựa chọn cho bạn từ trà hoa quả, đến cà phê, nước ép hay trà sữa. Ở đây còn có thêm sự lựa lựa chọn với bánh ngọt. Giá của các đồ uống và bánh ở mức vừa phải từ 39-58 ngàn đồng.</p>
                                    <img style={{paddingTop: '30px'}} src="https://review.food.com.vn/wp-content/uploads/2020/09/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-uong-ngon-6-1024x1024.jpg" alt="" />
                                    <div className="trung_thu3-2" style={{paddingTop: '10px'}}><i>Đồ uống và bánh ngọt của quán</i></div>
                                    <p style={{fontSize: '20px', paddingTop: '30px'}}>Không có cảnh chen chúc, nhiều góc sống ảo, được mặc đồ đẹp lại
                                        thưởng thức đồ uống ngon và trò chuyện cùng với bạn bè thì quả thực là một trải nghiệm rất tuyệt đúng không nào? Theo dõi thêm nhiều bài mới của Food.com.vn để có thêm nhiều sự lựa chọn cho mùa Trung thu này nha.</p>
                                    <div style={{paddingTop: '30px'}}>
                                        <h4 className="col-md-2"><b>SHARE: </b></h4>
                                        <div>
                                            <button className="btn btn-primary" style={{width: '40px'}}><span className="Khung_1"><i className="fab fa-facebook-f" /></span></button>
                                            <button className="btn btn-success"><span className="Khung_1"><i className="fab fa-twitter" /></span></button>
                                            <button className="btn btn-warning"><span className="Khung_1"><i className="fab fa-instagram" /></span></button>
                                            <button className="btn btn-danger"><span className="Khung_1"><i className="fab fa-linkedin-in" /></span></button>
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
export default Post;