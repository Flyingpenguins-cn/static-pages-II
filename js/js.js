/**此为基础js */
$(function(){
    var strarr = ["双龙记之和平契约.png","燕云台.png","和平精英国际冠军赛.png","花木兰.png","哈哈哈哈哈.png","隐秘而伟大.png","硬糖少女303首唱会.png","正直播KPL秋季赛.png","神奇公司在哪里.png"];
        /** banner轮播图效果  开始*/
        function fun1(){
            var index = 0;
            setInterval(function(){
                if(index==9){index=0;}
                var str = strarr[index];
                $(".site_slider_nav_list1 a").css("color","#b2b2b2")/**标题更改字体颜色 */
                $(".site_slider_nav_list2>h1>a").css("color","white")

                $(".site_slider_nav_list1>h1>img").attr("src","image/大家在看.png")/**标题logo更改为高亮 */
                $(".site_slider_nav_list2>h1>img").attr("src","image/fire_light.png")    

                $(".site_slider_nav_list2 li").eq(index).find("a").removeClass("site_slider_nav_list2_uncheacked").addClass("site_slider_nav_list2_cheacked");
                $(".site_slider_nav_list2 li").eq(index).find("p").show();
                $(".site_slider_nav_list2 li").eq(index).siblings().find("a").removeClass("site_slider_nav_list2_cheacked").addClass("site_slider_nav_list2_uncheacked");
                $(".site_slider_nav_list2 li").eq(index).siblings().find("p").hide();

                $(".site_slider_inner>a").css("background-image","url(image/banner/"+str+")");      /**更改banner */
                // alert(index)
                index=index+1;
            },5000)/**延迟5s */
        }
        /** banner轮播图效果  结束*/

    fun1();
})
$(function(){
    // $(".mod_quick div").mouseover(function(){
    //     var index = $(this).index();
    //     $(".mod_quick_float div").eq(index).show().siblings().hide();;

    // });
    // $(".mod_quick_float div").mouseleave(function(){
    //     $(this).hide();
    // });


    //vip显示和隐藏
    $(".mod_quick div").eq(0).mouseover(function(){
        $(".quick_vip_pop").show().siblings().hide();
    });
    $(".quick_vip_pop").mouseleave(function(){
        $(this).hide();
    });
    //history显示和隐藏
    $(".mod_quick div").eq(1).mouseover(function(){
        $(".mod_quick_float div").eq(1).show().siblings().hide();
    });
    $(".mod_quick_float div").eq(1).mouseleave(function(){
        $(this).hide();
    });
    //upload显示和隐藏
    $(".mod_quick div").eq(2).mouseover(function(){
        $(".quick_upload_pop").show().siblings().hide();
    });
    $(".quick_upload_pop").mouseleave(function(){
        $(this).hide();
    });
    //client显示和隐藏
    $(".mod_quick div").eq(3).mouseover(function(){
        $(".quick_client_pop").show().siblings().hide();;
    });
    $(".quick_client_pop").mouseleave(function(){
        $(this).hide();
    });
    //user显示和隐藏
    $(".mod_quick div").eq(4).mouseover(function(){
        $(".quick_user_pop").show().siblings().hide();;
    });
    $(".quick_user_pop").mouseleave(function(){
        $(this).hide();
    });


    
    //quick_history_pop li 下的 a标签
    $(".quick_history_pop li").click(function(){
        var index = $(this).index();
        // alert(index)
        $(this).find("a").addClass("checked");/**自己添加checked类 */
        $(".quick_history_pop div").eq(index+1).show();
        $(this).siblings().find("a").removeClass("checked");/**其他兄弟删除checked类 */
        $(".quick_history_pop div").eq(index+1).siblings().hide();
    })


    //login_win的显示
    //mod_quick 下的  quick_user 单击事件 显示 隐藏登入窗口 login_win
    $(".quick_user").click(function(){
        $(".mask_layer").show();
        $(".login_win").show();
    })
    //quick_user_pop_bd 下button 下的 a标签 单击事件 显示 隐藏登入窗口 login_win
    $(".quick_user_pop_bd_loginbtn a").click(function(){
        $(".mask_layer").show();
        $(".login_win").show();
    })
    //login_win的隐藏
    $(".login_win_tab_close a").click(function(){
        $(".mask_layer").hide();
        $(".login_win").hide();
    })

    // 单击 login_win_tab_list 下不同的 li  使得 自己样式改变且其他li样式改变 ;使得 login_win_cont下的login_win_cont_qq与login_win_cont_wx的显示和隐藏
    $(".login_win_tab_list_li1").click(function(){
        $(this).find("a").removeClass().addClass("login_win_tab_list_li1_checked");
        $(".login_win_tab_list_li2").find("a").removeClass().addClass("login_win_tab_list_li1_unchecked")
        $(".login_win_cont_qq").show();
        $(".login_win_cont_wx").hide();
    })
    $(".login_win_tab_list_li2").click(function(){
        $(this).find("a").removeClass().addClass("login_win_tab_list_li1_checked");
        $(".login_win_tab_list_li1").find("a").removeClass().addClass("login_win_tab_list_li1_unchecked")
        $(".login_win_cont_wx").show();
        $(".login_win_cont_qq").hide();

    })
    //login_win_cont_qq_left2_div1_quickregister  快速安全登入
    $(".login_win_cont_qq_left2_div1_quickregister").click(function(){
        $(".login_win_cont_qq_left1").hide();
        $(".login_win_cont_qq_left2").show();

        $(".login_win_cont_qq_botton1").hide();
        $(".login_win_cont_qq_botton2").show();
    })
    $(".login_win_cont_qq_botton2_passwordregister").click(function(){
        $(".login_win_cont_qq_left2").hide();
        $(".login_win_cont_qq_left1").show();

        $(".login_win_cont_qq_botton2").hide();
        $(".login_win_cont_qq_botton1").show();
    })












    //site_slider_nav_list2
    // /*添加文本的数组*/
    // var strarr = ["双龙记的和平契约","唐嫣回归之作","代言人空降盛典","刘亦菲超飒演绎巾帼女英雄","邓超忽悠黄渤反被坑","李易峰金晨乱世蜕变","20点绝美开唱","TTG对决DYG","杨超越翟潇闻改编主题曲"]
    // $(".site_slider_nav_list2 li").stop().mouseover(function(){
    //     var index = $(this).index();
    //     var msg = $(this)[0].innerHTML;
    //     console.log(msg);
    //     $(this)[0].innerHTML=msg+strarr[index-1];

    // }).stop().mouseleave(function(){
    //     var index = $(this).index();
    //     var msg = $(this)[0].innerHTML;
    //     $(this)[0].innerHTML=msg-strarr[index-1];
    // });




    /*鼠标悬停 更换banner a的背景图片*/
    $(".site_slider_nav_list1").mouseover(function(){
        $(".site_slider_inner a").css("background-image","url(image/banner/site_slider_nav_list1_background.png)");
    });


    /**list1 大家在看 */
    $(".site_slider_nav_list1").mouseover(function(){
        /*当前图片高亮显示 兄弟恢复正常*/
        $(".site_slider_nav_list1>h1>img").attr("src","image/大家在看_light.png")
        $(".site_slider_nav_list2>h1>img").attr("src","image/fire.png")
        /**当前文字高亮显示 兄弟恢复正常*/
        $(".site_slider_nav_list1 a").css("color","white")
        $(".site_slider_nav_list2>h1>a").css("color","#b2b2b2")
        $(".site_slider_nav_list2 li").find("a").removeClass("site_slider_nav_list2_cheacked").addClass("site_slider_nav_list2_uncheacked")
        $(".site_slider_nav_list2 li").find("p").hide()
    })
    /**list2 重磅推荐 */
    $(".site_slider_nav_list2").mouseover(function(){
        /*当前图片高亮显示 兄弟恢复正常*/
        $(".site_slider_nav_list1>h1>img").attr("src","image/大家在看.png")
        $(".site_slider_nav_list2>h1>img").attr("src","image/fire_light.png")    
        /**当前文字高亮显示 兄弟恢复正常*/ 
        $(".site_slider_nav_list1 a").css("color","#b2b2b2")
        $(".site_slider_nav_list2>h1>a").css("color","white")
        // /*当鼠标悬停 list2  默认为第一个li高亮显示*/
        // $(".site_slider_nav_list2 li").eq(0).find("a").removeClass("site_slider_nav_list2_uncheacked").addClass("site_slider_nav_list2_cheacked")
        // $(".site_slider_nav_list2 li").eq(0).find("p").show()
    })

    /** site_slider_nav_list2*/
    /** 给site_slider_nav_list2下的所有li标签设置鼠标悬停 发生 事件 */
    var strarr = ["双龙记之和平契约.png","燕云台.png","和平精英国际冠军赛.png","花木兰.png","哈哈哈哈哈.png","隐秘而伟大.png","硬糖少女303首唱会.png","正直播KPL秋季赛.png","神奇公司在哪里.png"];
    $(".site_slider_nav_list2 li").mouseover(function(){
        var index = $(this).index()-1;
        var str = strarr[index];
        /**标题更改 */
        $(".site_slider_nav_list1 a").css("color","#b2b2b2")
        $(".site_slider_nav_list2>h1>a").css("color","white")

        /*更改bannner a背景图片*/
        $(".site_slider_inner a").css("background-image","url(image/banner/"+str+")");

        $(this).find("p").show();
        $(this).find("a").removeClass("site_slider_nav_list2_uncheacked");
        $(this).find("a").addClass("site_slider_nav_list2_cheacked");
        $(this).siblings().find("p").hide();
        $(this).siblings().find("a").removeClass("site_slider_nav_list2_cheacked");
        $(this).siblings().find("a").addClass("site_slider_nav_list2_uncheacked");
    })

    /** ******************************************************* */
    /**mod_main_nav  */

    /** mod_main_nav0 */
    /**mod_main_nav0_block1 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav0_poparea1 */
    $(".mod_main_nav0_block1 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav0_poparea1").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav0_poparea1").stop().hide()
    })
    $(".mod_main_nav0_poparea1").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })
    /**mod_main_nav0_block2 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav0_poparea2 */
    $(".mod_main_nav0_block2 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav0_poparea2").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav0_poparea2").stop().hide()
    })
    $(".mod_main_nav0_poparea2").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })


    /** mod_main_nav1 */
    /**mod_main_nav1_block1 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav1_poparea1 */
    $(".mod_main_nav1_block1 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav1_poparea1").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav1_poparea1").stop().hide()
    })
    $(".mod_main_nav1_poparea1").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })
    /**mod_main_nav1_block2 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav1_poparea2 */
    $(".mod_main_nav1_block2 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav1_poparea2").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav1_poparea2").stop().hide()
    })
    $(".mod_main_nav1_poparea2").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })

    /** mod_main_nav2 */
    /**mod_main_nav2_block1 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav2_poparea1 */
    $(".mod_main_nav2_block1 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav2_poparea1").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav2_poparea1").stop().hide()
    })
    $(".mod_main_nav2_poparea1").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })
    /**mod_main_nav2_block2 下的 a 标签鼠标悬停弹出隐藏浮层 mod_main_nav2_poparea2 */
    $(".mod_main_nav2_block2 a").eq(0).mouseover(function(){
        /**当前浮层显示 */
        $(".mod_main_nav2_poparea2").stop().show()

    }).mouseleave(function(){
        $(".mod_main_nav2_poparea2").stop().hide()
    })
    $(".mod_main_nav2_poparea2").mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })


        /** mod_main_nav3 */
    /**  mod_main_nav3 下的 a 标签 标签鼠标悬停弹出隐藏浮层*/
    /** mod_main_nav3_div0*/
    $(".mod_main_nav3_div0>a").eq(1).mouseover(function(){
        $(".mod_main_nav3_div0>div").eq(1).show()
    }).mouseleave(function(){
        $(".mod_main_nav3_div0>div").eq(1).hide()
    })
    $(".mod_main_nav3_div0>div").eq(1).mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })

    /** mod_main_nav3_div1*/
    $(".mod_main_nav3_div1>a").eq(0).mouseover(function(){
        $(".mod_main_nav3_div1>div").eq(0).show()
    }).mouseleave(function(){
        $(".mod_main_nav3_div1>div").eq(0).hide()
    })
    $(".mod_main_nav3_div1>div").eq(0).mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })

    $(".mod_main_nav3_div1>a").eq(1).mouseover(function(){
        $(".mod_main_nav3_div1>div").eq(1).show()
    }).mouseleave(function(){
        $(".mod_main_nav3_div1>div").eq(1).hide()
    })
    $(".mod_main_nav3_div1>div").eq(1).mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })





    /**mod_main_feature */
    /** 给mod_main_feature 下的 a标签 下的 第一个img 设置鼠标悬停 发生动画 */
    $(".mod_main_feature_a1_img1").mouseover(function(){
        $(this).animate({marginTop:"0px"},100);
        $(".mod_main_feature_a1_img2").animate({marginTop:"6px"},100);
    }).mouseleave(function(){
        $(this).animate({marginTop:"3px"},100);
        $(".mod_main_feature_a1_img2").animate({marginTop:"3px"},100);
    })

    $(".mod_main_feature_a2_img1").mouseover(function(){
        $(this).animate({marginTop:"0px"},100);
        $(".mod_main_feature_a2_img2").animate({marginTop:"6px"},100);
    }).mouseleave(function(){
        $(this).animate({marginTop:"3px"},100);
        $(".mod_main_feature_a2_img2").animate({marginTop:"3px"},100);
    })



    /** mod_row_box */

    /** mod_row_box1 */
    /** mod_row_box1_hd */
    /**  mod_row_box1_hd_smallpage */
    /** 显示 mod_row_box1_hd_smallpage右边 的page信息*/
    var count = $(".mod_row_box1_hd_smallpage_pagenum").data("count")
    var page = $(".mod_row_box1_hd_smallpage_pagenum").data("page")
    $(".mod_row_box1_hd_smallpage_pagenum").html(page+"/"+count);

    /**mod_row_box1_hd_smallpage_lastbtn 上一个页面按钮 的 单击事件 */
    $(".mod_row_box1_hd_smallpage_lastbtn").click(function(){
        var count = $(".mod_row_box1_hd_smallpage_pagenum").data("count")
        var page = $(".mod_row_box1_hd_smallpage_pagenum").data("page")
        if(page==1){/** 如果page值为最小值1则中断函数 */
            $(this).css("opacity","0.2")
            return 
        }else{
            $(".mod_row_box1_hd_smallpage_nexsdzxtbtn").css("opacity","0.6")
        }
        $(".mod_row_box1_hd_smallpage_pagenum").data("page",page-1)
        page-=1;

        /**设置span的html值 */
        $(".mod_row_box1_hd_smallpage_pagenum").html(page+"/"+count);
        /**页面发生变化 */
        $(".mod_row_box1_bd>div").hide()
        var i = (page-1)*8/** i为起点 */
        var n = page*8-1/** n为终点 */
        console.log(i)
        console.log(n)
        for(i;i<=n;i++){
            $(".mod_row_box1_bd>div").eq(i).show()
        }

    })
    /**mod_row_box1_hd_smallpage_nexsdzxtbtn 下一个页面按钮 的 单击事件 */
    $(".mod_row_box1_hd_smallpage_nexsdzxtbtn").click(function(){
        var count = $(".mod_row_box1_hd_smallpage_pagenum").data("count")
        var page = $(".mod_row_box1_hd_smallpage_pagenum").data("page")
        if(page==4){/** 如果page值为最小值1则中断函数 */
            $(this).css("opacity","0.2")
            return 
        }else{
            $(".mod_row_box1_hd_smallpage_lastbtn").css("opacity","0.6")
        }
        $(".mod_row_box1_hd_smallpage_pagenum").data("page",page+1)
        page+=1;

        /**设置span的html值 */
        $(".mod_row_box1_hd_smallpage_pagenum").html(page+"/"+count);
        /**页面发生变化 */
        $(".mod_row_box1_bd>div").hide()
        var i = (page-1)*8/** i为起点 */
        var n = page*8-1/** n为终点 */
        console.log(i)
        console.log(n)
        for(i;i<=n;i++){
            $(".mod_row_box1_bd>div").eq(i).show()
        }
        
    })


    /** mod_row_box2 */
    /** mod_row_box2_hd */
    /**  mod_row_box2_hd_smallpage */
    /** 显示 mod_row_box2_hd_smallpage右边 的page信息*/
    var count = $(".mod_row_box2_hd_smallpage_pagenum").data("count")
    var page = $(".mod_row_box2_hd_smallpage_pagenum").data("page")
    $(".mod_row_box2_hd_smallpage_pagenum").html(page+"/"+count);

    /**mod_row_box2_hd_smallpage_lastbtn 上一个页面按钮 的 单击事件 */
    $(".mod_row_box2_hd_smallpage_lastbtn").click(function(){
        var count = $(".mod_row_box2_hd_smallpage_pagenum").data("count")
        var page = $(".mod_row_box2_hd_smallpage_pagenum").data("page")
        if(page==1){/** 如果page值为最小值1则中断函数 */
            $(this).css("opacity","0.2")
            return 
        }else{
            $(".mod_row_box2_hd_smallpage_nexsdzxtbtn").css("opacity","0.6")
        }
        $(".mod_row_box2_hd_smallpage_pagenum").data("page",page-1)
        page-=1;

        /**设置span的html值 */
        $(".mod_row_box2_hd_smallpage_pagenum").html(page+"/"+count);
        /**页面发生变化 */
        $(".mod_row_box2_bd>div").hide()
        var i = (page-1)*8/** i为起点 */
        var n = page*8-1/** n为终点 */
        console.log(i)
        console.log(n)
        for(i;i<=n;i++){
            $(".mod_row_box2_bd>div").eq(i).show()
        }

    })
    /**mod_row_box2_hd_smallpage_nexsdzxtbtn 下一个页面按钮 的 单击事件 */
    $(".mod_row_box2_hd_smallpage_nexsdzxtbtn").click(function(){
        var count = $(".mod_row_box2_hd_smallpage_pagenum").data("count")
        var page = $(".mod_row_box2_hd_smallpage_pagenum").data("page")
        if(page==4){/** 如果page值为最小值1则中断函数 */
            $(this).css("opacity","0.2")
            return 
        }else{
            $(".mod_row_box2_hd_smallpage_lastbtn").css("opacity","0.6")
        }
        $(".mod_row_box2_hd_smallpage_pagenum").data("page",page+1)
        page+=1;

        /**设置span的html值 */
        $(".mod_row_box2_hd_smallpage_pagenum").html(page+"/"+count);
        /**页面发生变化 */
        $(".mod_row_box2_bd>div").hide()
        var i = (page-1)*8/** i为起点 */
        var n = page*8-1/** n为终点 */
        console.log(i)
        console.log(n)
        for(i;i<=n;i++){
            $(".mod_row_box2_bd>div").eq(i).show()
        }
        
    })


    /*********************  x_fixed_tool  ****************** */
    /**x_fixed_tool */
    /**鼠标悬停x_fixed_tool下的img 图片 发生 改变 */

    $(".x_fixed_tool img").mouseover(function(){
        var msg = $(this).attr("src")
        var src = msg.substring(0,msg.length-4)

        $(this).attr("src",src+"_light.png")
    }).mouseleave(function(){
        var msg = $(this).attr("src")
        var src = msg.substring(0,msg.length-10)

        $(this).attr("src",src+".png")
    })
































    /************************************     footer    ************************* */
    /** side_footer */

    /**side_footer_contentinfo_channer3 */
    /** 鼠标悬停 side_footer_contentinfo_channer3下 的 img，img的url发生变化（变高亮显示）*/

    $(".side_footer_contentinfo_channer3_ul a").find("img").mouseover(function(){
        var msg = $(this).attr("src")
        var src = msg.substring(0,msg.length-4)
        // console.log(src)
        $(this).attr("src",src+"_light.png")
    }).mouseleave(function(){
        var msg = $(this).attr("src");
        var src = msg.substring(0,msg.length-10)
        $(this).attr("src",src+".png")
    })


})
