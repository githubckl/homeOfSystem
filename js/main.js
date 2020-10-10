

//������ͼƬ
if ($(".lazy").length > 0) {
    $(".lazy").lazyload({
        effect: "show",
        placeholder: "http://static.xitongzhijia.net/theme/2017/images/ui_img/grey.gif",
        threshold: 200
        // failure_limit: 100
    });
};
$(function () {

    // ר�������ڵ����л�
    
    $(window).scroll(function () {
        
        var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

        if (top > 761) {

            $(".art_zt_fl").css({"position":"fixed","top":"20px","left":"50%", "margin-left":"-600px"})
        } else {
            $(".art_zt_fl").css({"position":"static","top":"0","left":"0", "margin-left":"0px"})
        }
    });

    $('.art_zt_fl li').on('click', function () {

        $(this).addClass("cur").siblings().removeClass("cur");
        var $cont = $(this).parent().parent().siblings(".art_zt_fr").children();
        var ztOffset = $cont.eq($(this).index()).offset().top - 100;
        $("html,body").animate({ scrollTop: ztOffset }, 300);

    })
    // ������ʾ
    $(".risk_shut").on('click',function (){
        $(".risk").hide()
    })
    // ��ȡ��
    $("#tiquma .item").on('click',function (){
        $("#tiquma .fixed_bg").show();
        $("html").addClass("w_h_100");
    })
    $(".shut_tiquma").on('click',function (){
        $("#tiquma .fixed_bg").hide();
        $("html").removeClass("w_h_100");
    })
    $(".soft-tiquma").on('click',function (){
        $("#tiquma .fixed_bg").show();
        $("html").addClass("w_h_100");
    })
    
    //����
    $(".J_selectSearch").on("click", function() {
        $(".J_selectToggle").show();
    })
    $('html,body').click(function(e){
        var $tar = $(e.target);
        if(!$tar.is(".J_selectSearch")){
            $(".J_selectToggle").hide();
        }
    });
    $(".J_cate_item").on("click", function() {
        $(".J_selectSearch").html($(this).text());
        $(".J_selectSearch").attr('rel',$(this).attr('rel'));
    })

    $("#search").click(function(){
        baiduSerach();
    })
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){ // �س���
            baiduSerach();
        }
    }

    //���а���꾭��
    $(".rank-toggle .rank-item").on("mouseover",function () {
        $(this).siblings(".rank-item").removeClass("on");
		$(this).addClass("on");
    })

    //�������ҳ���а���꾭��
    $(".soft_side_toggle ").on("mouseover",function () {
        $(this).siblings(".soft_side_toggle ").removeClass("on");
		$(this).addClass("on");
    })

    //ϵͳ����ҳ��꾭��
    $(".art_side_toggle").on("mouseover",function () {
        $(this).siblings(".art_side_toggle").removeClass("on");
		$(this).addClass("on");
    })

    // ���������꾭��
    $(".J_hot_m_game .item").on("mouseover",function () {
        $(this).siblings(".item").removeClass("on");
		$(this).addClass("on");
    })

    //go-top
    $(window).scroll(function(){
        var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (top > 300) {
            $(".J_gotop").fadeIn("slow");
        }else{
            $(".J_gotop").fadeOut("slow");
        }
    });
     //go-top_new
    $(window).scroll(function(){
        var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (top > 300) {
            $(".go_top_new").fadeIn("slow");
        }else{
            $(".go_top_new").fadeOut("slow");
        }
    });
    // ȥ����
    $('.go_top_new .go_dl').on('click', function () {
        var dlOffset = $('.m-art-dl').offset().top;
        $("html,body").animate({ scrollTop: dlOffset }, 300);
    })


    $(".J_gotop").click(function () {
        $("html,body").animate({ scrollTop:0 }, 300);
    });
    var $qrcode = $(".m-sidebar .qrcode");
    var qrcodeTimer = setTimeout(hideQRcode,5000);
    $(".m-sidebar .pub").hover(function () {
        clearTimeout(qrcodeTimer);
        showQRcode();
    },function () {
        hideQRcode();
    })
    function showQRcode() {
        $qrcode.stop().animate({width: "255px", height: "129px", right: "72px", top: "0px" }, 300);
    }
    function hideQRcode() {
        $qrcode.stop().animate({width: "10px", height: "10px", right: "60px", top: "25px" }, 300);
    }


    // var wxTimer = setTimeout(showQRcode,5000);
    // $(".sidebar-wx").hover(function(){
    //     clearTimeout(wxTimer);
    //     showWx();
    // },function(){
    //     showQRcode();
    // });
    // function showQRcode(){
    //     $(".show-wx").stop().animate({width: 0}, 500);
    //     $(".m-sidebar .qrcode").stop().show().animate({width: "110px"}, 500);
    // }

    //����ҳ ����
    // var evalDom = $('.J_eval'),
    //     goodDom = evalDom.find('.eval-good'),
    //     badDom = evalDom.find('.eval-bad'),
    //     goodProg = goodDom.find('.inner'),
    //     badProg = badDom.find('.inner'),
    //     goodCount = goodDom.find('.count'),
    //     badCount = badDom.find('.count');
    // goodProg.css({'width': parseFloat(goodCount.html()) + '%' })
    // badProg.css({'width': parseFloat(badCount.html()) + '%' })

    //��ҳ����ͼ
    $(".J_slide_idx").slide({
        mainCell:".bd",
        titCell:".J_slide_tmb",
        effect:"fold",
        easing:"swing",
        autoPlay:true,
        delayTime:1000
    })
    //��ҳ�����л�
    $('.J_slide_theme').slide({
        mainCell:".J_slide_inner",
        prevCell:".J_prev",
        nextCell:".J_next",
        effect:"left",
        easing:"swing",
        autoPlay:true,
        switchLoad:"data-original",
        delayTime:1000
    })
    // ��������ҳ�ֲ�
    $(".J_slide_theme_art").slide({
        mainCell:".J_slide_inner",
        prevCell:".J_prev",
        nextCell:".J_next",
		effect:"leftLoop",
		easing:"swing",
        vis: 3,
        scroll: 3,
		autoPlay:true,
        autoPage:true,
		delayTime:1000
	})
    //��׿����ҳ ��Ļ��ͼ
    $(".J_slide_az_art").slide({
        mainCell:".J_slide_inner",
        prevCell:".J_prev",
        nextCell:".J_next",
		effect:"leftLoop",
		easing:"swing",
        vis: 4,
        scroll: 1,
		autoPlay:false,
        autoPage:true
    })

    // ͨ���ֲ� �������ư�ť��ָʾ��
    $(".J_g_slide").slide({
        mainCell:".J_slide_inner",
        titCell:".J_slide_tmb",
        prevCell:".J_prev",
        nextCell:".J_next",
        effect:"left",
        autoPlay:true,
		delayTime: 600
    })

    $(".J_slide_mini").slide({
        mainCell:".J_slide_inner",
        prevCell:".J_prev",
        nextCell:".J_next",
        effect:"left",
        autoPlay:false,
		delayTime: 600
    })
    $(".J_slide_soft").slide({
        mainCell:".J_slide_inner",
        titCell:".J_slide_tmb",
        effect:"left",
        autoPlay:true,
		delayTime: 600
    })

    $(".J_zt_recom").slide({
        mainCell:".inner",
        prevCell:".prev",
        nextCell:".next",
        effect:"left",
        autoPlay:true,
		delayTime: 600
    })

    $(".J_slide_course").slide({
        mainCell:".J_slide_inner",
        titCell:".J_slide_tmb",
        effect:"fold",
        autoPlay:true,
        delayTime: 600
    })
    $(".J_slide_ios_game").slide({
        mainCell:".J_slide_inner",
        prevCell:".J_prev",
        nextCell:".J_next",
        effect:"left",
        autoPlay:true,
        delayTime: 600
    })
    // ���������ֲ�
    $(".snpz_slide").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click",delayTime:700});



    // ר�������ֲ�
    $(".sys_zt_art_fr .focusBox").slide({ titCell: ".num ul", mainCell: ".pic ul", effect: "fold", autoPlay: true, autoPage: "<li></li>"});

    // ϵͳ����ҳ������ֲ�
    $(".sys_side_830 .focusBox").slide({ titCell: ".num ul", mainCell: ".pic ul", effect: "fold", autoPlay: true, autoPage: "<li></li>"});
    
    $(".picScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,scroll:1,vis:3,delayTime:400});
    //��׿����ҳ ���ݸ߶ȿ���
    $('.J_toggle_az_cont').on('click', function () {
        $(this).prev().toggleClass('show-all');
        $(this).html() == '+�鿴����' ? $(this).html('-�������') : $(this).html('+�鿴����');
    })

    // ��꾭���л�ѡ��
    mouseoverTabs($('.J_g_mouseover_tab'), '.J_tab', '.J_tab_cont');
    mouseoverTabs($('.J_mouseover_inner_tab'), '.J_inner_tab', '.J_inner_tab_cont');

    // ��׿��ҳ ͷ���л� ��ʾ��һ��ͼ��
    $('.m-hot-tab-row .m-az-recom:first,.m-mg-tab-row .m-az-recom:first').show();

    // ��׿Ӧ���б�ҳ
    $(".J_az_sort_tab .J_tab").on("click",function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        //ajax ����
    });

    // ƻ��Ӧ���б�ҳ
    $(".J_ios_sort_tab .J_tab").on("click",function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        //ajax ����
    });

    // �����ǩ
    $('.J_random_tag .tag').each(function () {
        var fontsize = getRandom(14, 22);
        var color = getRandom(1, 7);

        $(this).addClass('f' + fontsize + ' c-' + color);
    });

    $('.lexicon_list a').each(function () {
        var fontsize = getRandom(1, 3);
        var color = getRandom(1, 5);

        $(this).addClass('ff' + fontsize + ' cc-' + color);
    });

    // �������ҳ ���TAB
    $('.J_soft_art_tab .J_tab').on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        var $cont = $(this).parent().parent().siblings(".J_tab_cont");
        $(this).index() == 0 ? $cont.show() : $cont.hide().eq($(this).index()).show();
    })
    $('.J_soft_exc_tab .J_tab').on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parent().parent().siblings(".J_tab_cont").hide().eq($(this).index()).show();
    })
    $('.J_art_dl_tab .J_tab').on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parent().parent().siblings(".J_tab_cont").find('.J_tab_cont_item').hide().eq($(this).index()).show();
    })

    // �������ҳ������ص����Ƽ�
    $(".m-art-dl .media a.local_download").on("click", function () {
        var time_media= setTimeout(function () {
            $('.J_modal').fadeIn(500);
        }, 1200)    
    });
    $(".J_modal .J_close_modal,.J_modal .J_cover").on("click", function () {
        $('.J_modal').fadeOut(500);
    });



    // �̳���ҳҳ���л�
    $('.J_change_course .item').each(function (index) {
        $(this).on('click', function () {
            $(this).addClass("on").siblings('.item').removeClass("on");
            $(this).parent().siblings(".J_tab_cont").children().hide().eq(index).show();
        })
    })
    $('.J_change_course_btn').on('click', function () {
        var idx = 0;
        var $tabItem = $(this).parent().siblings(".J_tab_cont").children();
        $tabItem.each(function (index) {
            if (!$(this).is(':hidden')) {
                idx = index;
            }
        })
        idx++;
        if (idx >= $tabItem.size()) {
            idx = 0;
        }
        $tabItem.hide().eq(idx).show();
        $(this).parent().siblings(".J_change_course").find('.item').removeClass('on').eq(idx).addClass('on');

    })
    // ��߹����������
    if($('.J_side_fix_top').length > 0){
        //��ȡҪ��λԪ�ؾ�������������ľ���
        var navH = $(".J_side_fix_top").offset().top;
        //�������¼�
        $(window).scroll(function(){
            //��ȡ�������Ļ�������
            var scroH = $(this).scrollTop();
            //�������Ļ���������ڵ��ڶ�λԪ�ؾ�������������ľ��룬�͹̶�����֮�Ͳ��̶�
            if(scroH>=navH){
                $(".J_side_fix_top").css({"position":"fixed","top":0,'z-index':888});
            }else if(scroH<navH){
                $(".J_side_fix_top").css({"position":"static"});
            }
        });
    }

    // ���ר������ҳ ͼƬԤ��
	if (typeof jQuery == "undefined"){
		setTimeout( arguments.callee,200)
	} else {
		jQueryReady(jQuery);// jQuery ���غ�ִ��
	}

    // ����ύ
    $('.J_file_upload').on('click', function () {
        return $(this).prev('input').click();
    })
    $('.J_file_upload_ipt').on('change', function () {
        $(this).next('.J_file_upload').find('.txt').text(extractFilename($(this).val()));
    })

    // $('.J_download').on('click', function () {
    //     var dlOffset = $('.J_dl_area').offset().top;
    //     $("html,body").animate({ scrollTop: dlOffset }, 300);
    // })
    $('.art-detail .btn-dl').on('click', function () {
        var dlOffset = $('.m-art-dl').offset().top;
        $("html,body").animate({ scrollTop: dlOffset }, 300);
    })

    // �°�׿����ҳ
    $('.J_change_soft').on('click', '.J_change_btn', function () {
        $(this).parents('.J_change_soft').find('.J_change_cont').children().toggle();
    })

    // ��׿����ҳ ���ݸ߶ȿ���
    // $('.J_ctrl_az_cont').on('click', function () {
    //     if ($(this).prev().height() > 740) {
    //         $(this).toggleClass('toggle').prev().toggleClass('summary');
    //     }else{
    //         $(this).removeClass('toggle').prev().removeClass('summary');
    //     }

    // })

      //��׿����ҳ ���ݸ߶ȿ��� �޸�
      $('.J_ctrl_az_cont').on('click', function () {
        if ($(this).prev().height() > 740) {
            $(this).html('չ��ȫ��<i></i>')
            $(this).find('i').toggleClass('toggle')
            $(this).toggleClass('toggle').prev().toggleClass('summary');
        }else{
            $(this).html('����<i></i>')
            $(this).find('i').removeClass('toggle')
            $(this).removeClass('toggle').prev().removeClass('summary');
        }

    })

    $('.J_az_art_rank_tab .J_tab').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur')
        $(this).parents('.J_az_art_rank_tab').find('.J_tab_cont').children().hide().eq($(this).index()).show()

    })

    // ��ʼѡ�н��ܣ������غϼ�  
    // $('.J_az_art_rank_tab').hide();
    // $('.J_recom_cont_2').hide();

    // $('.J_az_art_tab .J_click_tab li').on('click', function () {
    //     $(this).addClass('cur').siblings().removeClass('cur');
    //     if ($(this).hasClass('J_content_tab')) {
    //         $('.J_az_art_rank_tab').hide()
    //         $('.J_shot_cont').show()
    //         $('.J_content').show()
    //         $('.J_recom_cont').show();
    //         $('.J_recom_cont_2').hide();
    //     }
    //     if ($(this).hasClass('J_shot_tab')) {
    //         $('.J_shot_cont').show()
    //         $('.J_content').hide()
    //         $('.J_az_art_rank_tab').hide()

    //         $('.J_recom_cont').show();
    //         $('.J_recom_cont_2').hide();
    //     }
    //     if ($(this).hasClass('J_coll_tab')) {
    //         $('.J_content').hide()
    //         $('.J_shot_cont').hide()
    //         $('.J_az_art_rank_tab').show()

    //         $('.J_recom_cont').hide();
    //         $('.J_recom_cont_2').show();
    //     }
    //     if ($(this).hasClass('J_comment_tab')) {
    //         $('.J_az_art_rank_tab').hide()
    //         $('.J_shot_cont').hide()
    //         $('.J_content').hide()
    //         $('.J_comment_cont').show()

    //         $('.J_recom_cont').hide();
    //         $('.J_recom_cont_2').show();
    //     }

    // })

    var length = $('.J_az_art_tab .J_click_tab li').length;
    var tabObj = $('.J_az_art_tab>.J_tab_cont');
    $('.J_az_art_tab .J_click_tab li').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');

        var index = $(this).index()
        switch(index){
            case 0:
                tabObj.show();
                break;
            case 1:
                tabObj.show();
                tabObj.eq(0).hide();
                break;
            case 2:
                tabObj.show();
                for(var i=0;i<3;i++){
                    tabObj.eq(i).hide();
                }
            break;
            case 3:
                tabObj.hide();
                $('.J_tab_comment').show();
            break;
            case 4:
                tabObj.show();
                for(var i=0;i<5;i++){
                    tabObj.eq(i).hide();
                }
                break;
            default:
                break;
        }

    })

    $('.J_download_a').click(function(){
        $('.J_az_art_tab .J_click_tab li').removeClass('cur');
        $('.J_az_art_tab .J_click_tab li').eq(4).addClass('cur');
        tabObj.show();
        for(var i=0;i<5;i++){
            tabObj.eq(i).hide();
        }
    })

    
    // �°�׿����ҳ�޸Ľ��� 
    // IOS��ҳ
    $('.J_ios_app_cate .J_tab .item').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).parents('.J_ios_app_cate').find('.J_tab .item').index(this);
        $(this).parents('.J_ios_app_cate').siblings('.g-title').find('.J_more').attr("href", $(this).attr('rel'))
        $(this).parents('.J_ios_app_cate').find('.J_tab_cont').children().hide().eq(index).show();
    })
    $('.J_ios_app_cate .J_ctrl').children().on('click', function () {
        $(this).parent().siblings('.J_tab').children().hide().eq($(this).index()).show();
    })

    // ����������ҳTAB
    $('.J_dnpz_tabs .item').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.J_dnpz_tab_cont').children().hide().eq($(this).index()).show();
    })
    // ���������б�ҳTAB
    $('.J_dnpz_list_tab .item').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        // �ۺ�������������������
    })
    // �������ò˵�
    $('.J_dnpz_menu .item').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        // �ۺ�������������������
    })
    // ��꾭����ʾ������������
    $('.J_dnpz_spec_sort').hover(function () {
        $(this).find('.drop-menu').show();
    },function () {
        $(this).find('.drop-menu').hide();
    })
    $('.J_dnpz_spec_sort li').on('click', function () {
        $(this).parent().hide();
        $(this).parent().siblings('.text').html($(this).html());
        // �۸�����
    })
    
    // ��Ѷ��ҳ
    $('.J_refresh_news').on('click', function () {
        var idx = 0;
        var $tabItem =  $('.J_refresh_news_cont').children();
        $tabItem.each(function (index) {
            if (!$(this).is(':hidden')) {
                idx = index;
            }
        })
        idx++;
        if (idx >= $tabItem.size()) {
            idx = 0;
        }
        $('.J_refresh_news_cont').children().hide().eq(idx).show();
    })
    // ��Ѷ��ҳ �б��л�
    $('.J_news_list_tab .item').on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        //ajax ������ $('.J_news_list') append ����������
    })
    // ��Ѷ��ҳ �б���ظ���
    $('.J_news_list_more').on('click', function () {
        //ajax ������ $('.J_news_list') append ����������
    })

    // ��������ҳ
    $(".J_soft_recom_tab .J_tab").on("click",function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents('.J_soft_recom_tab').find('.J_tab_cont').children().hide().eq($(this).index()).show()
    });
    // ÿ���Ƽ�
    $(".J_daily_recom_slide").slide({
        mainCell:".J_slide_inner",
        titCell:".J_slide_tmb",
        prevCell:".J_prev",
        nextCell:".J_next",
        effect:"left",
        autoPlay:true,
        autoPage:true,
		delayTime: 600
    })

    // ���Բ����������
    if($('.J_side_float').length > 0){
        HomeScroll(".col-l-w",".col-r-w");
    }

    //ƻ��Ƶ����ҳ
    $('.J_ios_app_tab .J_tab').children().on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents('.J_ios_app_tab').find('.J_more').attr("href", $(this).attr('rel'))
        $(this).parent().siblings(".J_tab_cont").children().hide().eq($(this).index()).show();
    })

	$(".J_ios_app_accordion .item").hover(function() {
		$(this).stop().animate({width:"556px"},300).siblings().stop().animate({width:"151px"},300)
	}, function() {
		$(".J_ios_app_accordion .item").stop().animate({width:"232px"},300)
	});
    //ƻ��ר������ҳ
    $('.J_ios_app_tab .J_tab').children().on('click', function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parent().parent().siblings(".J_tab_cont").children().hide().eq($(this).index()).show();
    })
    function HomeScroll(a, b) {
        function g() {
            var g = $(window).scrollLeft(),
                h = $(window).scrollTop(),
                i = $(document).height(),
                j = $(window).height(),
                k = c.height(),
                l = d.height(),
                m = k > l ? f : e,
                n = k > l ? d : c,
                o = k > l ? c.offset().left + c.outerWidth(!0) - g : d.offset().left - c.outerWidth(!0) - g,
                p = k > l ? l : k,
                q = k > l ? k : l,
                r = parseInt(q - j) - parseInt(p - j);
            $(a + "," + b).removeAttr("style"),
                j > i || p > q || m > h || p - j + m >= h ? n.removeAttr("style") : j > p && h - m >= r || p > j && h - m >= q - j ? n.attr("style", "margin-top:" + r + "px;") : n.attr("style", "_margin-top:" + (h - m) + "px;position:fixed;left:" + o + "px;" + (j > p ? "top" : "bottom") + ":0;")
        }
        if ($(a).length > 0 && $(b).length > 0) {
            var c = $(a),
                d = $(b),
                e = c.offset().top,
                f = d.offset().top;
            $(window).resize(g).scroll(g).trigger("resize")
        }
    }

    function extractFilename(s){
      return (typeof s==='string' && (s=s.match(/[^\\\/]+$/)) && s[0]) || '';
    }
    // ��Χȡ�����
    function getRandom(min, max){
        var r = Math.random() * (max - min);
        var re = Math.round(r + min);
        re = Math.max(Math.min(re, max), min)
        return re;
    }

    // ��꾭��Tab
    function mouseoverTabs(el, tabStr, contStr) {
        el.each(function () {
            var tabItem = $(this).find(tabStr).children(),
                tabCont = $(this).find(contStr).children(),
                extendCont = $(this).find('.J_extend_cont'),
                extraCont = $(this).find('.J_extra_cont');
            tabItem.on('mouseover', function () {
                tabItem.removeClass("cur");
                $(this).addClass("cur");
                tabCont.hide().eq($(this).index()).show();
                if (extendCont.size() !== 0) {
                    extendCont.children().hide().eq($(this).index()).show();
                }
                if (extraCont.size() !== 0) {
                    extraCont.children().hide().eq($(this).index()).show();
                }
            });
        })
    }


    // ������
    /*$(document).bind("contextmenu",function(e){ return false; });
    if (typeof(document.onselectstart) != "undefined") {
        // IE�½�ֹԪ�ر�ѡȡ
        document.onselectstart = new Function("return false");
    } else {
        // firefox�½�ֹԪ�ر�ѡȡ�ı�ͨ�취
        document.onmousedown = new Function("return false");
        document.onmouseup = new Function("return true");
    }*/
    // ����cookie
    function setCookie(name,value)
    {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=/" ;
    }
    // ��ȡcookie
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //����ƥ��
        if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
        }
        else{
        return null;
        }
    }
    // ɾ��cookie
    function delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }
    }
    // setCookie('riskState','guanbi');
    // ����ر�
    
    $(".risk_shut").on('click', function () {
            $(".risk").hide();
            setCookie('riskStateg','guanbia');
        })
    // cookie�ж��Ƿ��һ�ν�����ʾ��ʾ
    var state =getCookie("riskStateg");
    if(!state){
        $(".risk").show()
    }

    if ($('.fullSlide .bd').find('ul li').size() == 0) {
        $('.fullSlide').hide();
    }
    
    if($('.tag-list').find('a.cur').size() == 0) {
        $('.tag-list').find('a').eq(0).addClass('cur');
    }

    if ($('.related-list').find('li').size() == 0) {
        $('.m-soft-else').hide();
    }
})

//preview softimg
function jQueryReady($){
    $(function(){
        var $preview = $('<div id="image-preview" class="image-preview"></div>').appendTo('body').hide(),
	    imgLoaded = {}, // ����ͼƬ��ַ
	    last = '', //��������Ƴ���ȡ��ͼƬ��ʾ�¼�
	    mouse, // ������������¼�����
	    showImg = function(img){
		position(img);
		$preview.empty().append(img.elem).show();
	    },
	    // ����Ͷ�λ
	    position = function(img){
		// ��ʾ����Ӧ���� winWidth �� clinetX ����������� pageX�����ڿ�ȿ���С�� ��ҳ���
		var e = mouse,
			$img = $(img.elem),
			imgWidth = img.w,
			imgHeight = img.h,
			imgRate = imgWidth/imgHeight,

			winWidth = $(window).width(),
			winHeight = $(window).height(),
			spaceX = 20,
			spaceY = 17,
			padding = 7, // ����
			clientX = e.clientX,
			clientY = e.clientY,
			pageX = e.pageX,
			pageY = e.pageY,

			MINWIDTH = 300,
			// �жϴ��ڿ���ʾ��������ֵ����������
			maxWidth = Math.max(clientX -spaceX - padding*2, winWidth-clientX-spaceX - padding*2),

			// ���ź�ĳߴ�
			zoomWidth = imgWidth,
			zoomHeight = imgHeight;

		maxWidth = Math.min(maxWidth,600);

		// ����ͼƬ
		if(imgWidth > maxWidth || imgHeight > winHeight){
			if( imgRate > maxWidth / winHeight) {
				zoomWidth = maxWidth;
				zoomHeight = zoomWidth / imgRate;
			} else {
				zoomHeight = winHeight;
				zoomWidth = zoomHeight * imgRate;
			}

		}

		// ���ź�С����С��������µ���
		if(imgWidth > MINWIDTH  && zoomWidth < MINWIDTH){
			zoomWidth = MINWIDTH;
			zoomHeight = zoomWidth / imgRate;
		}

		//@return ������������
		//@do �ȼ������ȼ�Ĺ�ϵ������״ֵ̬���ٸ���״̬ת����ʾλ�á�
		var pos = function(){
			// Ϊ����ʾ�ϵ�ͳһ�ԣ�ֻ����������ʾ����
			var xMode = clientX > winWidth / 2 ?  "left" : "right",
			    yMode;
			if(winHeight - clientY - spaceY > zoomHeight ) yMode = "base"; //��ʾ������·�
			else if ( winHeight >= zoomHeight ) yMode = "bottom"; // ���봰�ڵײ�
			else yMode = "top" // ���봰�ڶ���

			var x = {
				right : pageX + spaceX ,
				left: pageX - spaceX - zoomWidth - padding
			}, y = {
				base : pageY+ spaceY,
				top : 0 ,
				bottom : pageY - clientY + winHeight - zoomHeight - padding - 7
			};
			return {
				x : x[xMode],
				y : y[yMode],
				w : zoomWidth,
				h : zoomHeight
			}
		}()

		// Ӧ����ʽ
		$img.css({
			width : pos.w,
			height: pos.h
		});
		$preview.css({
			left : pos.x,
			top : pos.y
		});
          };

          $.fn.bigShow = function(rel){
		rel = rel || "preview"; // �����ͼ��ַ������

		this.hover(function(e){
			var $this = $(this),
				src = $this.attr(rel),
				img = imgLoaded[src];

			mouse = e;
			last = src;

			if(img){
				showImg(img);
			} else {
				$("<img>").load(function(){

					imgLoaded[src] = { elem : this , w: this.width, h : this.height };
					if(last == src ) showImg(imgLoaded[src]);
				}).attr("src",src);
			}

		}, function(){
			last = "";
			$preview.hide();
		}).mousemove(function(e){
			mouse = e;
			var $this = $(this),
			src = $this.attr(rel),
			img = imgLoaded[src];

			img && position(img);
                });
          }

          // ע����ʾ��ͼ�¼�
          $("a[preview]").bigShow();
    }); // end
}

//�б�ҳ����ҳ����ת
function gotoPage(){
    var gotopage = $('#gotopage').val();
    var urlRule = $('#urlrule').val();
    var totalpage = $('#totalpage').val();

    if(!isNaN(gotopage)){
        gotopage = Math.ceil(gotopage);
        totalpage = parseInt(totalpage);

        if(gotopage>0 && gotopage<=totalpage){
            
            var targetUrl = urlRule.replace('{page}',gotopage);
            window.location.href = targetUrl;
            
        }else{
            return false;
        }
    }else{
        return false;
    }
}

//��̬�б�ҳ����ǩ�б�ҳ������ҳ����ת
function gotoPageDM(){
    var gotopage = $('#gotopage').val();
    var urlRule = $('#urlrule').val();
    var totalpage = $('#totalpage').val();

    if(!isNaN(gotopage)){
        gotopage = Math.ceil(gotopage);
        totalpage = parseInt(totalpage);

        if(gotopage>0 && gotopage<=totalpage){
            
            var targetUrl = urlRule+'/'+gotopage;
            window.location.href = targetUrl;
            
        }else{
            return false;
        }
    }else{
        return false;
    }
}

//��ת�ٶ�����
function baiduSerach(){
    var sV = $("#searchV").val();
    var nsid = $("#J_selectSearch").attr('rel');

    if(sV==''){alert('�����������ʣ�');return false;}
    if(sV=='������'){alert('û���ҵ������Ϣ��');return false;}
    var forpath='http://serach.xitongzhijia.net/cse/search?s=8474727115075543611';
    
    forpath+="&q="+encodeURIComponent(sV)+"&nsid="+nsid;
    
    window.open(forpath)
}

$(function() { 
    (function($) {
        $.fn.Slide = function(options) {
            var defaults = {
                item: "slide-item",
                nav: "slide-nav",
                nowClass: "on",
                loading: "slide-loading"
            },
            options = options || {};
            options = $.extend(defaults, options);
            var cont = $(this),
            item = cont.find("." + options.item),
            nav = cont.find("." + options.nav),
            curr = options.nowClass,
            len = item.length,
            width = item.width(),
            html = "",
            index = order = 0,
            timer = null,
            lw = "-" + width + "px",
            rw = width + "px",
            newtimer,
            ld = cont.find("." + options.loading);
            item.each(function(i) {
                $(this).css({
                    left: i === index ? 0 : (i > index ? width + 'px': '-' + width + 'px')
                });
                html += '<i>' + (i + 1) + '</i>';
            });
            nav.html(html);
            var navitem = nav.find("i");
            navitem.eq(index).addClass(curr);
            function anim(index, dir) {
                loading();
                if (order === len - 1 && dir === 'next') {
                    item.eq(order).stop(true, false).animate({
                        left: lw
                    });
                    item.eq(index).css({
                        left: rw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else if (order === 0 && dir === 'prev') {
                    item.eq(0).stop(true, false).animate({
                        left: rw
                    });
                    item.eq(index).css({
                        left: lw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else {
                    item.eq(order).stop(true, false).animate({
                        left: index > order ? lw: rw
                    });
                    item.eq(index).stop(true, false).css({
                        left: index > order ? rw: lw
                    }).animate({
                        left: 0
                    });
                }
                order = index;
                navitem.removeClass(curr).eq(index).addClass(curr);
            }
            function next() {
                index = order >= len - 1 ? 0 : order + 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                0);
                anim(index, 'next');
                timer = setInterval(next, 5000);
            }
            function prev() {
                index = order <= 0 ? len - 1 : order - 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                0);
                anim(index, 'prev');
                timer = setInterval(next, 5000);
            }
            function auto() {
                loading();
                timer = setInterval(next, 5000);
            }
            function _stop() {
                clearInterval(timer);
            }
            function loading() {
                ld.css({
                    "height": "0",
                    "height": "5px",
                    "position": "absolute",
                    "left": "0",
                    "bottom": "0",
                    "background": "#ffe825",
                    "z-index": "10"
                });
                ld.animate({
                    "width": "100%"
                },
                5000).animate({
                    "width": 0
                },
                0);
            }
            return this.each(function() {
                auto();
                navitem.hover(function() {
                    _stop();
                    var i = navitem.index(this);
                    if (/on/.test($(this).attr('class'))) {

                        return false;
                    }
                    if (newtimer) clearTimeout(newtimer);
                    newtimer = setTimeout(function() {
                        _stop();
                        ld.stop(true, true).animate({
                            "width": 0
                        },
                        0);
                        anim(i, this);
                    },
                    250);
                },
                auto);
            });
        };
    })(jQuery);
    $("#slide").Slide();
});

//�Ҳ�����
window.onload = function(){
    var uLeft =  $('.J_fixed').offset().left
    var uTop =  $('.J_fixed').offset().top - 40
    var uRHeight =  $('.J_fixed').outerHeight()  //�ұ߹̶����߶�
    var uHHeight =  0  //ͷ��ͨ���߶� 
    var uFHeight =  315  //�ײ�ͨ���߶�
    var dHeight  = $(window).height();  //���������ڸ߶�

    var computeHeight = dHeight - uRHeight - uHHeight - uFHeight 
    
    var maxScrollHeight= $(document.body).outerHeight(true) - dHeight + computeHeight   //�ĵ��ܸ߶�-�������߶�-�ײ�ͨ���߶�

    $(window).on('scroll',function(e){

        if($(window).scrollTop() < uTop ){
            $('.J_fixed').css("position","static");
        }
            
        if( $(window).scrollTop() >= uTop ){

            uLeft = uLeft + 'px'
        
            $('.J_fixed').css({
                "position":"fixed",
                "left":uLeft,
                "top":"40px",
                "z-index":"1",
                "width":"360px"
            })
            
            var s = (maxScrollHeight-$(window).scrollTop()) + 40;
            var top = s+'px'
            console.log(s,top,maxScrollHeight,computeHeight)
            if(computeHeight<0){
                if( $(window).scrollTop() > maxScrollHeight){
                    $('.J_fixed').css("top",top);
                }
            }
            
        }
    })
}
