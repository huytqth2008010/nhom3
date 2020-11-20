import {Link} from "react-router-dom";
import Sidebar from "./sidebar";

export default function Main() {
        return (

            <div className="main">
                <div className="features" id="recent_news_wrapper"><section className="section main">
                    <div className="container">
                        <article className="content">
                            <div className="content-body">
                                <div className="Khung">
                                    <a href="#" className="Khung_1"><b>Cafe</b></a>
                                </div>
                                <div className="HieuUng">
                                    <div className="zoomin noidung">
                                        <Link to={"/trung-thu-di-dau"}><img src="img/1.jpg" height={550} width={660} className="anh_1" /></Link>

                                        </div>
                                    <h1><b><Link to={"/trung-thu-di-dai"} className="content1">Trung Thu đi đâu để không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</Link></b></h1>
                                    <p>By  <a href="#" className="content_1">Kiều Oanh</a> . 23/09/2020<a href="#" className="content_1"> 31 Lượt xem</a></p>
                                </div>
                            </div>
                        </article>
                        <aside className="aside">
                            <div className="HieuUng">
                                <div className="khung3">
                                    <div className="KHUNG_1">
                                        <a href="#" className="KHUNG_1-1"><b>Khám phá</b></a>
                                    </div>
                                    <div className="block subcribe">
                                        <div className="zoomin noidung"><img src="img/2.jpg" height={150} width={150} className="anh_1" /></div>
                                        <div className="block_1">
                                            <h4><b><a href="#" className="block_1-1">Check in ngay đồng cỏ lau đẹp hút hồn trong trung tâm thành phố Hà Nội</a></b>
                                                <p><br />By <a href="#" className="content_1">Kiều Oanh</a></p>
                                            </h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="HieuUng">
                                <div className="khung3">
                                    <div className="KHUNG_1">
                                        <a href="#" className="KHUNG_1-1"><b>Đồ uống</b></a>
                                    </div>
                                    <div className="block subcribe">
                                        <div className="zoomin noidung"><img className="anh_1" src="img/3.jpg" height={150} width={150} /></div>
                                        <div className="block_1">
                                            <h4><b><a href="#" className="block_1-2">Cách làm sinh tố bơ chuối béo ngậy, mát lành cho ngày hè
                                                nóng bức</a></b>
                                                <p><br />By <a href="#" className="content_1">Food Wiki</a></p>
                                            </h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="HieuUng">
                                <div className="khung3">
                                    <div className="KHUNG_1">
                                        <a href="#" className="KHUNG_1-1"><b>Ăn vặt</b></a>
                                    </div>
                                    <div className="block subcribe">
                                        <div className="zoomin noidung"><img className="anh_1" src="img/4.jpg" height={150} width={150} /></div>
                                        <div className="block_1">
                                            <h4><b><a href="#" className="block_1-3">Bật mí cách làm món xoài lắc kết hợp muối tôm chua, cay
                                                ngon đúng điệu</a></b>
                                                <p><br />By <a href="#" className="content_1">Food Wiki</a></p>
                                            </h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="HieuUng">
                                <div className="khung3">
                                    <div className="KHUNG_1">
                                        <a href="#" className="KHUNG_1-1"><b>Dinh Dưỡng</b></a>
                                    </div>
                                    <div className="block subcribe">
                                        <div className="zoomin noidung"><img className="anh_1" src="img/5.jpg" height={150} width={150} /></div>
                                        <div className="block_1">
                                            <h4><b><a href="#" className="block_1-4">Top 5 loại thực phẩm tốt cho gan mà bạn nên sử dụng
                                                thường xuyên</a></b>
                                                <p><br />By <a href="#" className="content_1">Food Simple</a></p>
                                            </h4></div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section></div>
                <div className="topstr">
                    <div className="container">
                        <div className="topstr_header">
                            <p className="topstr_header_content" style={{fontWeight: 'bold'}}>TOP STORY</p>
                        </div>
                        <div className="body_content_topstr">
                            <div className="topstr_content_fist">
                                <div className="zoomin noidung">
                                    <a href="#"><img className="zoomin1" src="img/cong-thuc-1.jpg" alt="" width={730} height={547} /></a>
                                </div>
                                <div className="backgr-text">
                                </div>
                                <div className="move">
                                    <ul className="list_content">
                                        <li className="list_one">
                                            <p><a className="fist_list_content" href="#">Đồ uống</a></p>
                                        </li>
                                        <li className="list_two">
                                            <p><a id="block_1-1" className="big_link" href="#">Cách làm cocktail trái cây giải nhiệt cực đã cho mùa hè này</a></p>
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
                                        <a href="#"><img className="zoomin1" src="img/cong-thuc-2.jpg" alt="" width={350} height={257} /></a>
                                    </div>
                                    <div className="backgr-text2">
                                    </div>
                                    <div className="move2">
                                        <ul className="list_content3">
                                            <li>
                                                <p><a className="fist_list_content" href="#">Đồ Uống</a></p>
                                            </li>
                                            <li>
                                                <p><a id="block_1-2" className="biglink2" href="#">03 cách làm sinh tố giảm cân thơm ngon uống hoài không chán</a></p>
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
                                            <a href="#"><img className="zoomin1" src="img/cong-thuc-3.jpg" alt="" width={350} height={257} /></a>
                                        </div>
                                        <div className="backgr-text2">
                                        </div><div className="move3">
                                        <ul className="list_content3">
                                            <li>
                                                <p><a className="fist_list_content" href="#">Đồ Uống</a></p>
                                            </li>
                                            <li>
                                                <p><a id="block_1-3" className="biglink2" href="#">Cách làm sinh tố bơ xoài thơm ngon, giải nhiệt mùa hè cực đã</a></p>
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
                <div className="trending">
                    <div className="container">
                        <div id="trending"><div className="trendingstr">
                            <div className="body-trendingstr">
                                <div className="trendingstr-header">
                                    <ul className="trendingstr-header-list">
                                        <li className="text-trendingstr" style={{fontWeight: 'bold'}}>TRENDING STORIES
                                        </li>
                                        <li><a className="link-all-trend" href="#" style={{fontWeight: 'bold'}}>ALL TRENDING STORIES</a></li>
                                    </ul>
                                </div>
                                <div className="trendingstr-content">
                                    <div className="trendingstr1">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/trensdingStr1.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li>
                                                    <p className="text-fist-list"><a className="fist-list-trend" href="#">Khám phá</a></p></li>
                                                <li><p><a id="block_1-4" className="big-link-trend" href="#">Những món phải thử khi đi du lịch Huế</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Kiều Oanh</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="trendingstr2">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/trensdingStr4.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li><p className="text-fist-list"><a className="fist-list-trend" href="#">Khám phá</a></p></li>
                                                <li><p><a id="block_1-5" className="big-link-trend" href="#">Thanh xuân này, nhất định phải một lần đi Mù Cang Chải mùa lúa chín</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Kiều Oanh</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="trendingstr1">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/trensdingStr2.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li><p className="text-fist-list"><a className="fist-list-trend" href="#">Khám phá</a></p></li>
                                                <li><p><a id="block_1-6" className="big-link-trend" href="#">Check in ngay đồng cỏ lau đẹp hút hồn trong trung tâm thành phố Hà Nội</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Kiều Oanh</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="trendingstr2">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/topstories1.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li><p className="text-fist-list"><a className="fist-list-trend" href="#">CÔng thức</a></p></li>
                                                <li><p><a id="block_1-7" className="big-link-trend" href="#">Bật mí cách làm món bồ câu hầm thuốc bắc bồi bổ sức khỏe</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Food Wiki</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="trendingstr1">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/trensdingStr3.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li><p className="text-fist-list"><a className="fist-list-trend" href="#">Món ăn</a></p></li>
                                                <li><p><a id="block_1-8" className="big-link-trend" href="#">Cách làm món sườn chua ngọt cả nhà đều khen bạn chưa biết?</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Food Wiki</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="trendingstr2">
                                        <div className="trendingstr1_1">
                                            <div className="zoomin noidung">
                                                <img className="zoomin1" src="img/trensdingStr6.jpg" alt="" width={140} height={140} />
                                            </div>
                                            <ul className="list-content-trending">
                                                <li><p className="text-fist-list"><a className="fist-list-trend" href="#">Dinh dưỡng</a></p></li>
                                                <li><p><a id="block_1-9" className="big-link-trend" href="#">Top 5 loại thực phẩm tốt cho gan mà bạn nên sử dụng thường xuyên</a></p></li>
                                                <li><p className="author2">By <a className="small_link2" href="#">Food Simple</a></p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    </div>
                </div>
                <div className="section-post">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/sinh-to-chuoi.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Đồ uống</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm sinh tố bơ chuối béo ngậy, mát lành cho ngày hè nóng bức</a></h3><br />
                                            <p>Một trong những hương vị sinh tố đang rất được lòng các tín đồ ẩm thực đó chính là sinh tố bơ chuối. Vị béo bùi của bơ, ngọt thanh...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/sua-chua.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Mẹo Vặt</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm sinh tố sữa chua cực thơm ngon, giải nhiệt cho mùa hè oi bức</a></h3><br />
                                            <p>Sữa chua là một trong những “siêu thực phẩm” có hương vị thơm ngon và rất tốt cho sức khỏe. Có đến hàng chục những biến tấu với thành phần...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/bo-cau.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Bật mí cách làm món bồ câu hầm thuốc bắc bồi bổ sức khỏe</a></h3><br />
                                            <p>Bồ câu hầm thuốc bắc là món ăn giàu dinh dưỡng và thường được nấu dành cho những người suy nhược cơ thể. Đây được coi là món ăn cực tuyệt...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/pho-ga.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món phở gà thơm ngon, chuẩn hương vị truyền thống</a></h3><br />
                                            <p>Một trong những món ăn mang linh hồn Việt chắc chắn không thể bỏ qua đó chính là món phở truyền thống. Những người đi xa luôn nhớ về hương...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/ga-sao-xa-ot.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món gà xào xả ớt hao cơm cho mùa thu se lạnh</a></h3><br />
                                            <p>Bạn yêu thích thịt gà nhưng đã quá quen với gà luộc hay các món gà rang, gà hấp,…Vậy thì trong tiết trời se lạnh của mùa thu này, hãy thử...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/kho-qua-nhoi-thit.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món khổ qua nhồi thịt không bị đắng, ngon ngọt, thanh mát</a></h3><br />
                                            <p>Mặc dù có hương vị đắng nhẹ rất đặc trưng nhưng món canh khổ qua nhồi thịt vẫn được rất nhiều người yêu thích. Hương vị thanh mát, giải nhiệt...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-left-1">
                                    <div className="main-left-img">
                                        <a href="#">
                                            <img className="anh-s" src="img/xoai-lac.jpg" height={300} width={300} />
                                        </a>
                                    </div>
                                    <div className="main-left-text">
                                        <div className="text-top">
                                            <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                        </div>
                                        <div className="text-main">
                                            <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Bật mí cách làm món xoài lắc kết hợp muối tôm chua, cay ngon đúng điệu</a></h3><br />
                                            <p>Nhắc đến những món ăn vặt đang cực kì được yêu thích hiện nay chắc chắn không thể bỏ qua hương vị của xoài lắc. Với vị chua chua, mặn...</p>
                                            <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Sidebar/>
                        </div>
                    </div>
                </div>
                <div className="related-post container">
                    <div className="related-post-top">
                        <h2><b>Food &amp; Drink</b></h2>
                        <a href="#"><b>ALL FOOD &amp; DRINK</b></a>
                    </div>
                    <div className="related-post-main">
                        <div className="col-lg-3 col-md-4-1">
                            <div className="related-post-main-img anh-son">
                                <a href="###" className="text-a ">
                                    <img src="img/s4.jpg" style={{width: '100%'}} />
                                    <div className="blackdown" />
                                </a>
                                <div className="related-post-main-text">
                                    <h3 className="hover-line " style={{color: 'white'}}>
                                        <a href="#" className="text-main-a" style={{textDecoration: 'none'}}>
                                            <b>Lột xác với mật ong chỉ sau một đêm</b>
                                        </a>
                                    </h3>
                                    <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4-1 ">
                            <div className="related-post-main-img anh-son">
                                <a href="###" className="text-a">
                                    <img src="img/s5.jpg" style={{width: '100%'}} />
                                    <div className="blackdown" />
                                </a>
                                <div className="related-post-main-text">
                                    <h3 className="hover-line text-main-aa" style={{color: 'white'}}>
                                        <a href="#" className="text-main-aa" style={{textDecoration: 'none'}}>
                                            <b>Mở Spa tại nhà với những cách làm đẹp đơn giản từ Nha đam</b>
                                        </a>
                                    </h3>
                                    <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4-1 ">
                            <div className="related-post-main-img anh-son">
                                <a href="###" className="text-a ">
                                    <img src="img/s7.jpg" style={{width: '100%'}} />
                                    <div className="blackdown" />
                                </a>
                                <div className="related-post-main-text">
                                    <h3 className="hover-line " style={{color: 'white'}}>
                                        <a href="#" className="text-main-a" style={{textDecoration: 'none'}}>
                                            <b>Top 10 thực phẩm càng ăn càng đẹp da</b>
                                        </a>
                                    </h3>
                                    <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4-1 ">
                            <div className="related-post-main-img anh-son">
                                <a href="###" className="text-a ">
                                    <img src="img/s8.jpg" style={{width: '100%'}} />
                                    <div className="blackdown" />
                                </a>
                                <div className="related-post-main-text">
                                    <h3 className="hover-line " style={{color: 'white'}}>
                                        <a href="#" className="text-main-a" style={{textDecoration: 'none'}}>
                                            <b>Ăn ngon, đẹp dáng với phương pháp Eat Clean</b>
                                        </a>
                                    </h3>
                                    <div className="ppp" style={{color: 'white'}}>By <a href="#" className="text-main-a2">Kiều Oanh</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };