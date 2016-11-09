import React from 'react'
import {BreadCrumb} from "../../../../common/Birdie"

const InNet_Securegroup = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "内网配置", url: "#"},
        {name: "安全组", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="panel panel-info">
                    <div className="panel-heading">icons all</div>
                    <div className="panel-body">
                        <div className="icons-box">
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angellist"></i> fa-angellist</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href="../icon/area-chart"><i className="fa fa-area-chart"></i> fa-area-chart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-at"></i> fa-at</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bell-slash"></i> fa-bell-slash</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bell-slash-o"></i> fa-bell-slash-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bicycle"></i> fa-bicycle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-binoculars"></i> fa-binoculars</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-birthday-cake"></i> fa-birthday-cake</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bus"></i> fa-bus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-calculator"></i> fa-calculator</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc"></i> fa-cc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-amex"></i> fa-cc-amex</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-discover"></i> fa-cc-discover</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-mastercard"></i> fa-cc-mastercard</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-paypal"></i> fa-cc-paypal</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-stripe"></i> fa-cc-stripe</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cc-visa"></i> fa-cc-visa</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-copyright"></i> fa-copyright</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eyedropper"></i> fa-eyedropper</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-futbol-o"></i> fa-futbol-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-google-wallet"></i> fa-google-wallet</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ils"></i> fa-ils</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ioxhost"></i> fa-ioxhost</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-lastfm"></i> fa-lastfm</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-lastfm-square"></i> fa-lastfm-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-line-chart"></i> fa-line-chart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-meanpath"></i> fa-meanpath</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-newspaper-o"></i> fa-newspaper-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paint-brush"></i> fa-paint-brush</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paypal"></i> fa-paypal</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pie-chart"></i> fa-pie-chart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plug"></i> fa-plug</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-shekel"></i> fa-shekel <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sheqel"></i> fa-sheqel <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-slideshare"></i> fa-slideshare</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-soccer-ball-o"></i> fa-soccer-ball-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-off"></i> fa-toggle-off</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-on"></i> fa-toggle-on</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-trash"></i> fa-trash</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tty"></i> fa-tty</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-twitch"></i> fa-twitch</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wifi"></i> fa-wifi</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-yelp"></i> fa-yelp</a></div>

                            <div className="clearfix"></div>
                        </div>

                        <div className="icons-box">
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rub"></i> fa-rub</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rouble"></i> fa-rouble <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pagelines"></i> fa-pagelines</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stack-exchange"></i> fa-stack-exchange</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-vimeo-square"></i> fa-vimeo-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-try"></i> fa-try</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-turkish-lira"></i> fa-turkish-lira <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>


                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-automobile"></i> fa-automobile <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bank"></i> fa-bank <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-behance"></i> fa-behance</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-behance-square"></i> fa-behance-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bomb"></i> fa-bomb</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-building"></i> fa-building</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cab"></i> fa-cab <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-car"></i> fa-car</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-child"></i> fa-child</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle-o-notch"></i> fa-circle-o-notch</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle-thin"></i> fa-circle-thin</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-codepen"></i> fa-codepen</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cube"></i> fa-cube</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cubes"></i> fa-cubes</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-database"></i> fa-database</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-delicious"></i> fa-delicious</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-deviantart"></i> fa-deviantart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-digg"></i> fa-digg</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-drupal"></i> fa-drupal</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-empire"></i> fa-empire</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-envelope-square"></i> fa-envelope-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fax"></i> fa-fax</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-archive-o"></i> fa-file-archive-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-audio-o"></i> fa-file-audio-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-code-o"></i> fa-file-code-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-excel-o"></i> fa-file-excel-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-image-o"></i> fa-file-image-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-pdf-o"></i> fa-file-pdf-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-video-o"></i> fa-file-video-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-word-o"></i> fa-file-word-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ge"></i> fa-ge <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-git"></i> fa-git</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-git-square"></i> fa-git-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-google"></i> fa-google</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-graduation-cap"></i> fa-graduation-cap</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hacker-news"></i> fa-hacker-news</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-header"></i> fa-header</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-history"></i> fa-history</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-institution"></i> fa-institution <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-joomla"></i> fa-joomla</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-jsfiddle"></i> fa-jsfiddle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-language"></i> fa-language</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-life-bouy"></i> fa-life-bouy <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-life-ring"></i> fa-life-ring</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-life-saver"></i> fa-life-saver <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mortar-board"></i> fa-mortar-board <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-openid"></i> fa-openid</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paper-plane"></i> fa-paper-plane</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paper-plane-o"></i> fa-paper-plane-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paragraph"></i> fa-paragraph</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paw"></i> fa-paw</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pied-piper"></i> fa-pied-piper</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pied-piper-alt"></i> fa-pied-piper-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pied-piper-square"></i> fa-pied-piper-square <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-qq"></i> fa-qq</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ra"></i> fa-ra <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rebel"></i> fa-rebel</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-recycle"></i> fa-recycle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-reddit"></i> fa-reddit</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-reddit-square"></i> fa-reddit-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-send"></i> fa-send <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-send-o"></i> fa-send-o <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-share-alt"></i> fa-share-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-share-alt-square"></i> fa-share-alt-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-slack"></i> fa-slack</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sliders"></i> fa-sliders</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-soundcloud"></i> fa-soundcloud</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-space-shuttle"></i> fa-space-shuttle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-spoon"></i> fa-spoon</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-spotify"></i> fa-spotify</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-steam"></i> fa-steam</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-steam-square"></i> fa-steam-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stumbleupon"></i> fa-stumbleupon</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stumbleupon-circle"></i> fa-stumbleupon-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-support"></i> fa-support <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-taxi"></i> fa-taxi</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tencent-weibo"></i> fa-tencent-weibo</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tree"></i> fa-tree</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-university"></i> fa-university</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-vine"></i> fa-vine</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wechat"></i> fa-wechat <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-weixin"></i> fa-weixin</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wordpress"></i> fa-wordpress</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-yahoo"></i> fa-yahoo</a></div>

                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">
                            <h3>Web Application Icons</h3>

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-adjust"></i> fa-adjust</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-anchor"></i> fa-anchor</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-archive"></i> fa-archive</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows"></i> fa-arrows</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-h"></i> fa-arrows-h</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-v"></i> fa-arrows-v</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-asterisk"></i> fa-asterisk</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ban"></i> fa-ban</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bar-chart-o"></i> fa-bar-chart-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-barcode"></i> fa-barcode</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bars"></i> fa-bars</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-beer"></i> fa-beer</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bell"></i> fa-bell</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bell-o"></i> fa-bell-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bolt"></i> fa-bolt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-book"></i> fa-book</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bookmark"></i> fa-bookmark</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bookmark-o"></i> fa-bookmark-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-briefcase"></i> fa-briefcase</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bug"></i> fa-bug</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-building-o"></i> fa-building-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bullhorn"></i> fa-bullhorn</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bullseye"></i> fa-bullseye</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-calendar"></i> fa-calendar</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-calendar-o"></i> fa-calendar-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-camera"></i> fa-camera</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-camera-retro"></i> fa-camera-retro</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-certificate"></i> fa-certificate</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check"></i> fa-check</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-circle"></i> fa-check-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-circle-o"></i> fa-check-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-square"></i> fa-check-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-square-o"></i> fa-check-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle"></i> fa-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle-o"></i> fa-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-clock-o"></i> fa-clock-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cloud"></i> fa-cloud</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cloud-download"></i> fa-cloud-download</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cloud-upload"></i> fa-cloud-upload</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-code"></i> fa-code</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-code-fork"></i> fa-code-fork</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-coffee"></i> fa-coffee</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cog"></i> fa-cog</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cogs"></i> fa-cogs</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-comment"></i> fa-comment</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-comment-o"></i> fa-comment-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-comments"></i> fa-comments</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-comments-o"></i> fa-comments-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-compass"></i> fa-compass</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-credit-card"></i> fa-credit-card</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-crop"></i> fa-crop</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-crosshairs"></i> fa-crosshairs</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cutlery"></i> fa-cutlery</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dashboard"></i> fa-dashboard <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-desktop"></i> fa-desktop</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-download"></i> fa-download</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-edit"></i> fa-edit <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ellipsis-h"></i> fa-ellipsis-h</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ellipsis-v"></i> fa-ellipsis-v</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-envelope"></i> fa-envelope</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-envelope-o"></i> fa-envelope-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eraser"></i> fa-eraser</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-exchange"></i> fa-exchange</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-exclamation"></i> fa-exclamation</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-exclamation-circle"></i> fa-exclamation-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-exclamation-triangle"></i> fa-exclamation-triangle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-external-link"></i> fa-external-link</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-external-link-square"></i> fa-external-link-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eye"></i> fa-eye</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eye-slash"></i> fa-eye-slash</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-female"></i> fa-female</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fighter-jet"></i> fa-fighter-jet</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-film"></i> fa-film</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-filter"></i> fa-filter</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fire"></i> fa-fire</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fire-extinguisher"></i> fa-fire-extinguisher</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flag"></i> fa-flag</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flag-checkered"></i> fa-flag-checkered</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flag-o"></i> fa-flag-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flash"></i> fa-flash <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flask"></i> fa-flask</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-folder"></i> fa-folder</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-folder-o"></i> fa-folder-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-folder-open"></i> fa-folder-open</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-folder-open-o"></i> fa-folder-open-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-frown-o"></i> fa-frown-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gamepad"></i> fa-gamepad</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gavel"></i> fa-gavel</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gear"></i> fa-gear <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gears"></i> fa-gears <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gift"></i> fa-gift</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-glass"></i> fa-glass</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-globe"></i> fa-globe</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-group"></i> fa-group <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hdd-o"></i> fa-hdd-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-headphones"></i> fa-headphones</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-heart"></i> fa-heart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-heart-o"></i> fa-heart-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-home"></i> fa-home</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-inbox"></i> fa-inbox</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-info"></i> fa-info</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-info-circle"></i> fa-info-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-key"></i> fa-key</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-keyboard-o"></i> fa-keyboard-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-laptop"></i> fa-laptop</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-leaf"></i> fa-leaf</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-legal"></i> fa-legal <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-lemon-o"></i> fa-lemon-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-level-down"></i> fa-level-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-level-up"></i> fa-level-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-lightbulb-o"></i> fa-lightbulb-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-location-arrow"></i> fa-location-arrow</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-lock"></i> fa-lock</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-magic"></i> fa-magic</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-magnet"></i> fa-magnet</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mail-forward"></i> fa-mail-forward <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mail-reply"></i> fa-mail-reply <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mail-reply-all"></i> fa-mail-reply-all</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-male"></i> fa-male</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-map-marker"></i> fa-map-marker</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-meh-o"></i> fa-meh-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-microphone"></i> fa-microphone</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-microphone-slash"></i> fa-microphone-slash</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus"></i> fa-minus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus-circle"></i> fa-minus-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus-square"></i> fa-minus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus-square-o"></i> fa-minus-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mobile"></i> fa-mobile</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-mobile-phone"></i> fa-mobile-phone <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-money"></i> fa-money</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-moon-o"></i> fa-moon-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-music"></i> fa-music</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pencil"></i> fa-pencil</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pencil-square"></i> fa-pencil-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pencil-square-o"></i> fa-pencil-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-phone"></i> fa-phone</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-phone-square"></i> fa-phone-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-picture-o"></i> fa-picture-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plane"></i> fa-plane</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus"></i> fa-plus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-circle"></i> fa-plus-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square"></i> fa-plus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-power-off"></i> fa-power-off</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-print"></i> fa-print</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-puzzle-piece"></i> fa-puzzle-piece</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-qrcode"></i> fa-qrcode</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-question"></i> fa-question</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-question-circle"></i> fa-question-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-quote-left"></i> fa-quote-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-quote-right"></i> fa-quote-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-random"></i> fa-random</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-refresh"></i> fa-refresh</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-reply"></i> fa-reply</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-reply-all"></i> fa-reply-all</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-retweet"></i> fa-retweet</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-road"></i> fa-road</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rocket"></i> fa-rocket</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rss"></i> fa-rss</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rss-square"></i> fa-rss-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-search"></i> fa-search</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-search-minus"></i> fa-search-minus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-search-plus"></i> fa-search-plus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-share"></i> fa-share</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-share-square"></i> fa-share-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-share-square-o"></i> fa-share-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-shield"></i> fa-shield</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-shopping-cart"></i> fa-shopping-cart</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sign-in"></i> fa-sign-in</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sign-out"></i> fa-sign-out</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-signal"></i> fa-signal</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sitemap"></i> fa-sitemap</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-smile-o"></i> fa-smile-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort"></i> fa-sort</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-amount-asc"></i> fa-sort-amount-asc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-amount-desc"></i> fa-sort-amount-desc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-asc"></i> fa-sort-asc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-desc"></i> fa-sort-desc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-down"></i> fa-sort-down <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sort-up"></i> fa-sort-up <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-spinner"></i> fa-spinner</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-square"></i> fa-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-square-o"></i> fa-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star"></i> fa-star</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star-half"></i> fa-star-half</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star-half-empty"></i> fa-star-half-empty <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star-half-full"></i> fa-star-half-full <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star-half-o"></i> fa-star-half-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-star-o"></i> fa-star-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-subscript"></i> fa-subscript</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-suitcase"></i> fa-suitcase</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-sun-o"></i> fa-sun-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-superscript"></i> fa-superscript</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tablet"></i> fa-tablet</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tachometer"></i> fa-tachometer</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tag"></i> fa-tag</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tags"></i> fa-tags</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tasks"></i> fa-tasks</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-terminal"></i> fa-terminal</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-thumb-tack"></i> fa-thumb-tack</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-thumbs-down"></i> fa-thumbs-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-thumbs-o-down"></i> fa-thumbs-o-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-thumbs-up"></i> fa-thumbs-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ticket"></i> fa-ticket</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-times"></i> fa-times</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-times-circle"></i> fa-times-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-times-circle-o"></i> fa-times-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tint"></i> fa-tint</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-trash-o"></i> fa-trash-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-trophy"></i> fa-trophy</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-truck"></i> fa-truck</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-umbrella"></i> fa-umbrella</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-unlock"></i> fa-unlock</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-unlock-alt"></i> fa-unlock-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-unsorted"></i> fa-unsorted <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-upload"></i> fa-upload</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-user"></i> fa-user</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-users"></i> fa-users</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-video-camera"></i> fa-video-camera</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-volume-down"></i> fa-volume-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-volume-off"></i> fa-volume-off</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-volume-up"></i> fa-volume-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-warning"></i> fa-warning <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wrench"></i> fa-wrench</a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-square"></i> fa-check-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-check-square-o"></i> fa-check-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle"></i> fa-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-circle-o"></i> fa-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus-square"></i> fa-minus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-minus-square-o"></i> fa-minus-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square"></i> fa-plus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-square"></i> fa-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-square-o"></i> fa-square-o</a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">
                            <h3>Currency Icons</h3>

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-btc"></i> fa-btc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cny"></i> fa-cny <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dollar"></i> fa-dollar <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eur"></i> fa-eur</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-euro"></i> fa-euro <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gbp"></i> fa-gbp</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-inr"></i> fa-inr</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-jpy"></i> fa-jpy</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-krw"></i> fa-krw</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-money"></i> fa-money</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rmb"></i> fa-rmb <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rouble"></i> fa-rouble <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rub"></i> fa-rub</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rupee"></i> fa-rupee <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-try"></i> fa-try</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-turkish-lira"></i> fa-turkish-lira <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-usd"></i> fa-usd</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-won"></i> fa-won <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-yen"></i> fa-yen <span className="text-muted">(alias)</span></a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-align-center"></i> fa-align-center</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-align-justify"></i> fa-align-justify</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-align-left"></i> fa-align-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-align-right"></i> fa-align-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bold"></i> fa-bold</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chain"></i> fa-chain <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chain-broken"></i> fa-chain-broken</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-clipboard"></i> fa-clipboard</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-columns"></i> fa-columns</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-copy"></i> fa-copy <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-cut"></i> fa-cut <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dedent"></i> fa-dedent <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eraser"></i> fa-eraser</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file"></i> fa-file</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-o"></i> fa-file-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-text"></i> fa-file-text</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-file-text-o"></i> fa-file-text-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-files-o"></i> fa-files-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-floppy-o"></i> fa-floppy-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-font"></i> fa-font</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-indent"></i> fa-indent</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-italic"></i> fa-italic</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-link"></i> fa-link</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-list"></i> fa-list</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-list-alt"></i> fa-list-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-list-ol"></i> fa-list-ol</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-list-ul"></i> fa-list-ul</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-outdent"></i> fa-outdent</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paperclip"></i> fa-paperclip</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-paste"></i> fa-paste <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-repeat"></i> fa-repeat</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rotate-left"></i> fa-rotate-left <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-rotate-right"></i> fa-rotate-right <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-save"></i> fa-save <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-scissors"></i> fa-scissors</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-strikethrough"></i> fa-strikethrough</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-table"></i> fa-table</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-text-height"></i> fa-text-height</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-text-width"></i> fa-text-width</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-th"></i> fa-th</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href="index.html"><i className="fa fa-th-large"></i> fa-th-large</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-th-list"></i> fa-th-list</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-underline"></i> fa-underline</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-undo"></i> fa-undo</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-unlink"></i> fa-unlink <span className="text-muted">(alias)</span></a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-double-down"></i> fa-angle-double-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-double-left"></i> fa-angle-double-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-double-right"></i> fa-angle-double-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-double-up"></i> fa-angle-double-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-down"></i> fa-angle-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-left"></i> fa-angle-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-right"></i> fa-angle-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-angle-up"></i> fa-angle-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-down"></i> fa-arrow-circle-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-left"></i> fa-arrow-circle-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-right"></i> fa-arrow-circle-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-circle-up"></i> fa-arrow-circle-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-down"></i> fa-arrow-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-left"></i> fa-arrow-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-right"></i> fa-arrow-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrow-up"></i> fa-arrow-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows"></i> fa-arrows</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-alt"></i> fa-arrows-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-h"></i> fa-arrows-h</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-v"></i> fa-arrows-v</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-down"></i> fa-caret-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-left"></i> fa-caret-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-right"></i> fa-caret-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-caret-up"></i> fa-caret-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-circle-down"></i> fa-chevron-circle-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-circle-left"></i> fa-chevron-circle-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-circle-right"></i> fa-chevron-circle-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-circle-up"></i> fa-chevron-circle-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-down"></i> fa-chevron-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-left"></i> fa-chevron-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-right"></i> fa-chevron-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-chevron-up"></i> fa-chevron-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hand-o-down"></i> fa-hand-o-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hand-o-left"></i> fa-hand-o-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hand-o-right"></i> fa-hand-o-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hand-o-up"></i> fa-hand-o-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-long-arrow-down"></i> fa-long-arrow-down</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-long-arrow-left"></i> fa-long-arrow-left</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-long-arrow-right"></i> fa-long-arrow-right</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-long-arrow-up"></i> fa-long-arrow-up</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span></a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">
                            <h3>Video Player Icons</h3>

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-arrows-alt"></i> fa-arrows-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-backward"></i> fa-backward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-compress"></i> fa-compress</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-eject"></i> fa-eject</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-expand"></i> fa-expand</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fast-backward"></i> fa-fast-backward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-fast-forward"></i> fa-fast-forward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-forward"></i> fa-forward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pause"></i> fa-pause</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-play"></i> fa-play</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-play-circle"></i> fa-play-circle</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-play-circle-o"></i> fa-play-circle-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-step-backward"></i> fa-step-backward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-step-forward"></i> fa-step-forward</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stop"></i> fa-stop</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-youtube-play"></i> fa-youtube-play</a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">

                            <div className="alert alert-success">
                                <ul className="margin-bottom-none padding-left-lg">
                                    <li>All brand icons are trademarks of their respective owners.</li>
                                    <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.</li>
                                </ul>
                            </div>

                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-adn"></i> fa-adn</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-android"></i> fa-android</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-apple"></i> fa-apple</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bitbucket"></i> fa-bitbucket</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bitbucket-square"></i> fa-bitbucket-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span></a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-btc"></i> fa-btc</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-css3"></i> fa-css3</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dribbble"></i> fa-dribbble</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-dropbox"></i> fa-dropbox</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-facebook"></i> fa-facebook</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-facebook-square"></i> fa-facebook-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-flickr"></i> fa-flickr</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-foursquare"></i> fa-foursquare</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-github"></i> fa-github</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-github-alt"></i> fa-github-alt</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-github-square"></i> fa-github-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-gittip"></i> fa-gittip</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-google-plus"></i> fa-google-plus</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-google-plus-square"></i> fa-google-plus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-html5"></i> fa-html5</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-instagram"></i> fa-instagram</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-linkedin"></i> fa-linkedin</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-linkedin-square"></i> fa-linkedin-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-linux"></i> fa-linux</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-maxcdn"></i> fa-maxcdn</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pagelines"></i> fa-pagelines</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pinterest"></i> fa-pinterest</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-pinterest-square"></i> fa-pinterest-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-renren"></i> fa-renren</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-skype"></i> fa-skype</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stack-exchange"></i> fa-stack-exchange</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stack-overflow"></i> fa-stack-overflow</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-trello"></i> fa-trello</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tumblr"></i> fa-tumblr</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-tumblr-square"></i> fa-tumblr-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-twitter"></i> fa-twitter</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-twitter-square"></i> fa-twitter-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-vimeo-square"></i> fa-vimeo-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-vk"></i> fa-vk</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-weibo"></i> fa-weibo</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-windows"></i> fa-windows</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-xing"></i> fa-xing</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-xing-square"></i> fa-xing-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-youtube"></i> fa-youtube</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-youtube-play"></i> fa-youtube-play</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-youtube-square"></i> fa-youtube-square</a></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="icons-box">
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-ambulance"></i> fa-ambulance</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-h-square"></i> fa-h-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-hospital-o"></i> fa-hospital-o</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-medkit"></i> fa-medkit</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-plus-square"></i> fa-plus-square</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-stethoscope"></i> fa-stethoscope</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-user-md"></i> fa-user-md</a></div>
                            <div className="infont col-md-3 col-sm-4"><a href=""><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InNet_Securegroup;