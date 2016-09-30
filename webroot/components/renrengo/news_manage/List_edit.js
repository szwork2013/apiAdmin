import React from 'react'
import API from "../../../conf/API"
import { BreadCrumb, IBoxTool, ICheck } from '../../../common/Birdie'
import {appFirstPath} from "../../../conf/APP"

const EditInfo = React.createClass({
    getInitialState(){
        return {
            newInfo: {
                title: ""
            },
            sorts: []
        }
    },
    ueditor: null,
    componentDidMount(){
        var _this = this;
        var {newID} = this.props;
        var {ueditor} = this.refs;
        console.log(newID);
        $.ajax({
            url: API.news_manage.getNewsInfo,
            data: {
                id: newID
            },
            success: function(data){
                if(data.data){
                    data = data.data;
                    this.setState({
                        newInfo: data.news[0],
                        sorts: data.sort
                    })
                    //自定义图片上传icon
                    this.registerImageUpload();

                    _this.ueditor = UE.getEditor(ueditor);
                    _this.ueditor.ready(function () {
                        var imgUploadIcon = $("#container").find(".uploada")[0];
                        _this.uploadToOSS(_this.ueditor, imgUploadIcon);
                    });
                }
            }.bind(this)
        })
    },
    render(){
        var {newInfo,sorts} = this.state;
        var crumbs = [
            {name: "新闻管理", url:`/${appFirstPath}/news_manage/list`},
            {name: "新闻列表", url: `/${appFirstPath}/news_manage/list`},
            {name: "编辑新闻", url: "#"}
        ];
        return (
            <div className="orderManage_list_edit" >
                <BreadCrumb crumbs={crumbs} title="新闻管理" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h5>编辑新闻</h5>
                            </div>
                            <div className="panel-body">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-md-2 col-sm-2">新闻类型：</label>
                                        <div className="col-md-2 col-sm-3">
                                            <select name="sortid" onChange={this.handleChange} className="form-control" value={newInfo.sortid}>
                                                <option value="">请选择</option>
                                                {
                                                    sorts.map( sort => {
                                                        return <option key={sort.id+"sort"} value={sort.id}>{sort.sortName}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2">是否置顶：</label>
                                        <div className="col-md-10">
                                            <input type="checkbox" />
                                            选中后，新闻将优先在列表顶部显示。
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2">新闻标题：</label>
                                        <div className="col-md-8">
                                            <input type="text" onChange={this.handleChange} name="title" className="form-control" value={newInfo.title} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2">新闻导读：</label>
                                        <div className="col-md-8">
                                            <input type="text" name="review" className="form-control" onChange={this.handleChange}/>
                                        </div>
                                        (可以为空)
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2">新闻内容：</label>
                                        <div className="col-md-8">
                                            <script ref="ueditor" id="container" name="content" type="text/plain">
                                                {newInfo.content}
                                            </script>
                                        </div>
                                    </div>
                                </div>
                                <div className="tc">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>{" "}
                                    <button type="button" onClick={this.updateNew} className="btn btn-primary">保存</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    updateNew(){
        var content = this.ueditor.getContent();
        console.log(content);
    },
    getUploadUrl(){
        return new Promise( (resolve, reject) => {
            $.getJSON('http://files.api.yuncangmall.com/rest/2.0/files/api/check', {
                'accessid': 10001,
                'type': 1
            }, function (data) {
                var url = data.response_data.action;
                var multipart_params = data.response_data.appendForm;
                if(data.response_data){
                    var data = data.response_data;
                    resolve({
                        url: data.action,
                        data: data.appendForm
                    })
                }else{
                    reject(data);
                }
            })
        })
    },
    registerImageUpload(){
        UE.registerUI('simpleupload', function (editor, uiName) {
            //注册按钮执行时的command命令，使用命令默认就会带有回退操作
            editor.registerCommand(uiName, {
                execCommand: function () {
//				uploadFile(editor);
                }
            });
            //创建一个button
            var btn = new UE.ui.Button({
                //按钮的名字
                name: uiName,
                //提示
                title: "上传详情图片",
                //添加额外样式，指定icon图标，这里默认使用一个重复的icon
                //cssRules: 'background-position: -500px 0;',
                className: 'uploada edui-for-simpleupload'
            });
            //当点到编辑内容上时，按钮要做的状态反射
            editor.addListener('selectionchange', function () {
                var state = editor.queryCommandState(uiName);
                if (state == -1) {
                    btn.setDisabled(true);
                    btn.setChecked(false);
                } else {
                    btn.setDisabled(false);
                    btn.setChecked(state);
                }
            });
            //因为你是添加button,所以需要返回这个button
            return btn;
        });
    },
    uploadToOSS(obj, id){
        var _src;
        var uploadera = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: id,
            flash_swf_url: '/apiAdmin/webroot/statics/js/plugins/plupload/Moxie.swf',
            silverlight_xap_url: '/apiAdmin/webroot/statics/js/plugins/plupload/Moxie.xap',
            url: 'http://oss.aliyuncs.com',
            init: {
                PostInit: function () {
                },
                FilesAdded: function (up, files) {
                    $.getJSON('http://files.api.yuncangmall.com/rest/2.0/files/api/check', {
                        'accessid': 10001,
                        'type': 1
                    }, function (data) {
                        up.setOption({
                            'url': data.response_data.action,
                            'multipart_params': data.response_data.appendForm
                        });
                        _src = data.response_data.url;
                        up.start();
                    })
                },
                UploadProgress: function (up, file) {
//                    $upload.html('<span style="font-size:12px">' + file.percent + "%</span>");
                },
                FileUploaded: function (up, file, info) {
                    if (info.status >= 200 || info.status < 200) {
                        var img = "<img src='" + _src + "' />";

                        obj.execCommand('insertHtml', img);
                    } else {
                        alert("上传失败");
                    }
                },

                Error: function (up, err) {
                    alert("上传失败");
                }
            }
        });
        uploadera.init();
    },
    registerSelfUpload(){
        var {ueditor} = this.refs;
        this.getUploadUrl()
        .then(function(uploadObj){
            UE.getEditor(ueditor,{
                imageUploadData: uploadObj.data
            });
            UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
            UE.Editor.prototype.getActionUrl = function(action) {
                if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
                    return uploadObj.url;
                } else {
                    return this._bkGetActionUrl.call(this, action);
                }
            }
        })
    },
    uploadFile(obj, id){
        var _src;
        var uploadera = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: id,
            flash_swf_url: 'plupload/js/Moxie.swf',
            silverlight_xap_url: 'plupload/js/Moxie.xap',
            url: 'http://oss.aliyuncs.com',
            init: {
                FilesAdded: function (up, files) {
                    $.getJSON('http://files.api.yuncangmall.com/rest/2.0/files/api/check', {
                        'accessid': 10001,
                        'type': 1
                    }, function (data) {
                        up.setOption({
                            'url': data.response_data.action,
                            'multipart_params': data.response_data.appendForm
                        });
                        _src = data.response_data.url;
                        up.start();
                    })
                },
                FileUploaded: function (up, file, info) {
                    if (info.status >= 200 || info.status < 200) {
                        var img = "<img src='" + _src + "' />";

                        obj.setContent(img, true);
                    } else {
                        alert("上传失败");
                    }
                },

                Error: function (up, err) {
                    alert("上传失败");
                }
            }
        });
        uploadera.init();
    },
    handleChange(e){
        var name = $(e.currentTarget).attr("name"),
            newObj = {};

        newObj[name] = e.target.value;

        var newInfo = Object.assign({},this.state.newInfo,newObj)
        this.setState({newInfo: newInfo});
    }
})

export default EditInfo;