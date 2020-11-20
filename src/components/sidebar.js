export  default function Sidebar(){
    return(
            <div className="col-md-4">
                <img src="img/banner-quang-cao.png" style={{marginBottom: '40px'}} />
                <div className="Slide">
                    <div className="slide_1">
                        <div className="slide_1-1"><b>Danh mục</b></div>
                        <div className="slide_1-2">
                            <div id="myBtn" className="left_next">
                                <a className="left" href="#myCarousel" data-slide="prev">
                                    <i className="fas fa-angle-left" />
                                </a>
                            </div>
                            <div id="myBtn2" className="right_next">
                                <a className="right" href="#myCarousel" data-slide="next">
                                    <i className="fas fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide_2">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="item_1 text-center">                                 <p className="item_1-1">6+</p>                                 <p className="item_1-2">Khám phá</p>                          </div>
                                    <div className="item_2 text-center">                                 <p className="item_1-1">4+</p>                                 <p className="item_1-2">Kinh nghiệm hay</p>                          </div>
                                    <div className="item_3 text-center">                                 <p className="item_1-1">1+</p>                                 <p className="item_1-2">Làm đẹp</p>                          </div>
                                    <div className="item_4 text-center">                                 <p className="item_1-1">2+</p>                                 <p className="item_1-2">Mẹ và bé</p>                          </div>
                                </div>
                                <div className="item">
                                    <div className="item_1 text-center">                                 <p className="item_1-1">5+</p>                                 <p className="item_1-2">Ăn vặt</p>                          </div>
                                    <div className="item_2 text-center">                                 <p className="item_1-1">2+</p>                                 <p className="item_1-2">Bí quyết</p>                          </div>
                                    <div className="item_3 text-center">                                 <p className="item_1-1">6+</p>                                 <p className="item_1-2">Cafe</p>                          </div>
                                    <div className="item_4 text-center">                                 <p className="item_1-1">1+</p>                                 <p className="item_1-2">Công thức</p>                          </div>
                                </div>
                                <div className="item">
                                    <div className="item_1 text-center">                                 <p className="item_1-1">3+</p>                                 <p className="item_1-2">Dinh dưỡng</p>                          </div>
                                    <div className="item_2 text-center">                                 <p className="item_1-1">7+</p>                                 <p className="item_1-2">Du lịch</p>                          </div>
                                    <div className="item_3 text-center">                                 <p className="item_1-1">2+</p>                                 <p className="item_1-2">Địa điểm</p>                          </div>
                                    <div className="item_4 text-center">                                 <p className="item_1-1">3+</p>                                 <p className="item_1-2">Làm đẹp</p>                          </div>
                                </div>
                                <div className="item">
                                    <div className="item_1 text-center">                                 <p className="item_1-1">2+</p>                                 <p className="item_1-2">Teen star</p>                          </div>
                                    <div className="item_2 text-center">                                 <p className="item_1-1">10+</p>                                 <p className="item_1-2">Tự nhiên</p>                          </div>
                                    <div className="item_3 text-center">                                 <p className="item_1-1">8+</p>                                 <p className="item_1-2">Văn hóa</p>                          </div>
                                    <div className="item_4 text-center">                                 <p className="item_1-1">3+</p>                                 <p className="item_1-2">Video</p>                          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-widget">
                    <div className="social">
                        <ul className="social-list">
                            <li className="social-share-sidebar">
                                <div className="facebook" style={{backgroundColor: '#3B5998', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="twitter" style={{backgroundColor: '#55ACEE', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="youtube" style={{backgroundColor: '#bb0000', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-youtube" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="linkedin" style={{backgroundColor: '#007bb5', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="vimeo" style={{backgroundColor: '#45bbff', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-vimeo" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="pinterst" style={{backgroundColor: '#cb2027', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-pinterest" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="twitch" style={{backgroundColor: '#2c4762', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-twitch" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                            <li className="social-share-sidebar">
                                <div className="instagram" style={{backgroundColor: '#f40083', height: '65px', padding: '5px'}}>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block-widget">
                    <div className="nav-widget">
                        <div className="btn-group btn-group-justified" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default" style={{backgroundColor: '#ff2c54', color: '#FFFFFF', fontWeight: 'bold'}}>MỚI NHẤT</button>
                            </div>
                        </div>
                    </div>
                    <div className="axil-content">
                        <div className="post-block">
                            <a href="#" className="post-block-thuml">
                                <img src="img/meo-vat-voi-ruou-7-3bv00rd7inoommc2nkasqo.png" />
                            </a>
                            <div className="media-body">
                                <div className="post-cat">
                                    <span>Mẹo vặt</span>
                                </div>
                                <div className="axil-post-title">
                                    <a href="#">Mẹo vặt với rượu,các bà nội trợ đã biết chưa?</a>
                                </div>
                                <div className="post-meta">
                                    <ul>
                                        <li>By <a href="#">Kiều Oanh</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-block">
                            <a href="#" className="post-block-thuml">
                                <img src="img/quan-hotdog-co-chu-nguoi-han-quoc-dep-trai-4-3bur1xb7ruiunfp3n7ludc.jpg" />
                            </a>
                            <div className="media-body">
                                <div className="post-cat">
                                    <span>Review</span>
                                </div>
                                <div className="axil-post-title">
                                    <a href="#">Đột kích quán Hotdog có anh chủ là người Hàn Quốc đẹp trai</a>
                                </div>
                                <div className="post-meta">
                                    <ul>
                                        <li>By <a href="#">Kiều Oanh</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-block">
                            <a href="#" className="post-block-thuml">
                                <img src="img/tac-dung-than-ky-cua-nuoc-vo-gao-1-3bscrq3sxalrxdg4gpxkow.jpg" />
                            </a>
                            <div className="media-body">
                                <div className="post-cat">
                                    <span>Mẹo vặt</span>
                                </div>
                                <div className="axil-post-title">
                                    <a href="#">Khám phá công dụng kì diệu của nước vo gạo</a>
                                </div>
                                <div className="post-meta">
                                    <ul>
                                        <li>By <a href="#">Kiều Oanh</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-block">
                            <a href="#" className="post-block-thuml">
                                <img src="img/meo-vat-voi-ruou-7-3bv00rd7inoommc2nkasqo.png" />
                            </a>
                            <div className="media-body">
                                <div className="post-cat">
                                    <span>Bí quyết</span>
                                </div>
                                <div className="axil-post-title">
                                    <a href="#">Lột xác với mật ong chỉ sau một đêm</a>
                                </div>
                                <div className="post-meta">
                                    <ul>
                                        <li>By <a href="#">Kiều Oanh</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/banner-quang-cao.png" />

            </div>
    );
}
