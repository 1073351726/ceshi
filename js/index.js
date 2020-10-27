// 游戏全目录
var menuBtn = $(".NIE-topBar-menu-btn");
var menu = $(".NIE-topBar-menu");

menuBtn.mouseenter(function () {
    menu.stop().slideDown()
})
menuBtn.mouseleave(function () {
    menu.stop().slideUp()
})
menu.mousemove(function () {
    menu.stop().attr("style", "display: block")
})
menu.mouseleave(function () {
    menu.stop().slideUp()
})
//点击更多
var more = $(".more");
var more1 = $(".more1");

var t = $(".table_ul li");

var t1 = $(t[1]);

var ul = $(".table_ul1 li");
var li = $(ul[2]);
var li1 = $(ul[3]);
var li2 = $(ul[4]);

more.click(function (event) {
    var _this = event.target;
    if (_this.className === "more") {
        li.stop().animate({
            marginLeft: 140 + "px",
        }, 600)
        more.attr("class", "open")
        more.text("<<")
    } else {
        li.stop().animate({
            marginLeft: 0 + "px",
        }, 600)
        more.attr("class", "more")
        more.text("更多热门端游")
    }

})

more1.click(function (event) {
    var _this = event.target;
    if (_this.className === "more1") {
        t1.stop().animate({
            width: 958 + "px",
            marginLeft: -130 + "px",
        }, 600)
        more1.attr("class", "open")
        more1.text("<<")
        li1.stop().animate({
            marginLeft: -130 + "px",
            zIndex: 3
        }, 600)
        li2.stop().animate({
            width: 797 + "px",
            marginLeft: -130 + "px"
        }, 600)
    } else {
        t1.stop().animate({
            width: 828 + "px",
            marginLeft: 0 + "px",
        }, 600)
        li1.stop().animate({
            marginLeft: 0 + "px",
            zIndex: 1
        }, 600)
        li2.stop().animate({
            width: 667 + "px",
            marginLeft: 0 + "px"
        }, 600)
        more1.attr("class", "more1")
        more1.text("更多热门端游")
    }

})
//导航  
var navItem = $(".nav_item");
var subWrap = $(".subnav_wrap");
var subItem = $(".subnav_item");
var dhIndex = 0;

navItem.mouseenter(function () {
    subWrap.css("display", "block");
    $(this).attr("class", "active nav_item");
})
navItem.mouseleave(function () {
    subWrap.css("display", "none");
    navItem.removeClass("active");
})

navItem.each(function fn(dhIndex) {
    $(this).mouseenter(function () {
        subItem.eq(dhIndex).show().siblings(".subnav_item").hide();
    })
});


//移入二级导航
subWrap.mouseenter(function () {
    subWrap.css("display", "block");
})

subWrap.mouseleave(function () {
    subWrap.css("display", "none");
    navItem.removeClass("active");
})


//导航滚轮
$(document).ready(function () {
    var navtop = $(".nav").offset().top;
    $(document).scroll(function () {
        var scroltop = $(document).scrollTop();
        if (scroltop > navtop) {
            $(".nav").css("position", "fixed");
            $(".sub_nav_down").css("opacity", 1);
            $(".sub_nav_down").css({ "transform": "translate3d(0,0,0)" });
        } else {
            $(".nav").css("position", "absolute");
            $(".sub_nav_down").css("opacity", 0);
            $(".sub_nav_down").css({ "transform": "translate3d(0,-30px,0)" });
        }
    })
})



// 新闻

var newBox = $(".zixun_box");
var newUl = $(".zixun_box  ul");
var newPrev = $(".n_prev_btn");
var newNext = $(".n_next_btn");
var newLi = $(".zixun_box ul li");
var newWidth = $(newLi[0]).width();
var newWidth2 = (newWidth + 20) * 4;
var newIndex = 0;


newNext.click(function () {

    newPrev.css("display", "inline");
    newIndex++;
    if (newIndex >= newLi.length / 4) {
        newIndex = newLi.length / 4 - 1;
    }
    if (newIndex >= newLi.length / 4 - 1) {
        newNext.css("display", "none");
    }
    newUl.stop().animate({
        left: -newIndex * newWidth2 + "px"
    }, 1000)
})

newPrev.click(function () {
    newIndex--;
    if (newIndex === -1) {
        newIndex = 0;
    }
    if (newIndex === 0) {
        newPrev.css("display", "none");
    }
    if (newIndex !== newLi.length / 4) {
        newNext.css("display", "inline");
    }
    newUl.stop().animate({
        left: -newIndex * newWidth2 + "px"
    }, 1000)
})

var newTIme = setTimeout(function () {
    newNext.click();
}, 4000)

$(".news_box").mouseenter(function () {
    clearInterval(newTIme);
})

$(".news_box").mouseleave(function () {
    setTimeout(function () {
        newNext.click();
    }, 4000)
})







//测试服点击
var csf = $(".button-tycsf");
var csfTxt = $(".btn_tucsfText");

csf.mouseenter(function () {
    csfTxt.css("display", "block");
})
csf.mouseleave(function () {
    csfTxt.css("display", "none");
})



//平安世界
var partxxk = $(".world_tab ul li")
var parlb = $(".pasj");

partxxk.each(function (index) {
    $(this).click(function (e) {
        $(this).addClass("on").siblings().removeClass("on");
        $(".pasj").eq(index).show().siblings(".pasj").hide();
    })
});

//式神录切换
var partqh = $(".toList");
var ss_all = $(".ss_all");
var shishenBigImg = $("#shishenBigImg");
partqh.click(function () {
    ss_all.css("display", "block");
    shishenBigImg.css("display", "none");
})


var shishen_item = $(".shishen_item");
shishen_item.click(function () {
    ss_all.css("display", "none");
    shishenBigImg.css("display", "block");
})



var shishen_tabs = $(".shishen_tabs a");
var shishenlist_container = $(".shishenlist_container");
shishen_tabs.each(function (index) {
    $(this).click(function (e) {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".shishenlist_container").eq(index).show().siblings(".shishenlist_container").hide();
    })
});


//式神列表轮播图
var ss_prev = $(".ss_prev");
var ss_next = $(".ss_next");
var shishen_list = $(".shishen_list ");
var shishen_listul = $(".shishen_list  ul");
var shishenWidth = $(shishen_listul[0]).width();
var shishen_index = 0;
ss_next.click(function () {
    shishen_index++;
    shishen_index = shishen_index >= shishen_listul.length ? 0 : shishen_index;
    shishen_list.stop().animate({
        left: -shishen_index * shishenWidth + "px"
    }, 100)
})
ss_prev.click(function () {
    shishen_index--;
    shishen_index = shishen_index === -1 ? shishen_listul.length - 1 : shishen_index;
    shishen_list.stop().animate({
        left: -shishen_index * shishenWidth + "px"
    }, 100)
})

//式神录轮播图
$(function () {
    var sslrBtn = $(".bigImg_btn_right").eq(0);
    var ssllBtn = $(".bigImg_btn_left").eq(0);
    var sslImg = $(".bigImg_item").eq(0).children();
    var ssln = 0;
    var sslm = 0;
    var sslLeftTxt = $(".shishen_wrap_con .bigImg_wrap .bigImg_btn_left p");
    var sslRightTxt = $(".shishen_wrap_con .bigImg_wrap .bigImg_btn_right p");
    sslrBtn.click(function () {
        ssln++;
        if (ssln === sslImg.length) {
            ssln = 0;
        }
        var xs_left = sslImg.eq(sslm).find("img").eq(0);
        var yc_left = sslImg.eq(sslm).find("img").eq(1);
        var shou_left = sslImg.eq(ssln).find("img").eq(0);
        var shou_right = sslImg.eq(ssln).find("img").eq(1);
        xs_left.stop().animate({
            left: "-290px",
            opacity: 0
        }, 600);

        yc_left.stop().animate({
            right: "-290px",
            opacity: 0
        }, 600, function () {
            sslm = ssln;
            shou_left.stop().animate({
                left: "-140px",
                opacity: 1
            }, 600);
            shou_right.stop().animate({
                right: "-140px",
                opacity: 1
            }, 600);
        });
        sslLeftTxt.eq(ssln).css("display", "block");
        sslLeftTxt.eq(ssln - 1).css("display", "none");
        sslRightTxt.eq(ssln).css("display", "block");
        sslRightTxt.eq(ssln - 1).css("display", "none");
    })
    ssllBtn.click(function () {
        ssln--;
        if (ssln < 0) {
            ssln = zjlImg.length - 1;
        }
        var hide_left = zjlImg.eq(sslm).find("img").eq(0);
        var hide_right = zjlImg.eq(sslm).find("img").eq(1);
        var shou_left = zjlImg.eq(ssln).find("img").eq(0);
        var shou_right = zjlImg.eq(ssln).find("img").eq(1);
        hide_left.stop().animate({
            left: "-290px",
            opacity: 0
        }, 600);
        hide_right.stop().animate({
            right: "-290px",
            opacity: 0
        }, 600, function () {
            sslm = ssln;
            shou_left.stop().animate({
                left: "-140px",
                opacity: 1
            }, 600);
            shou_right.stop().animate({
                right: "-140px",
                opacity: 1
            }, 600);
        });
        sslLeftTxt.eq(ssln).css("display", "block");
        sslLeftTxt.eq(sslm).css("display", "none");
        sslRightTxt.eq(ssln).css("display", "block");
        sslRightTxt.eq(sslm).css("display", "none");
    })
})






//主角录
$(function () {
    var zjlrBtn = $(".bigImg_btn_right").eq(1);
    var zjllBtn = $(".bigImg_btn_left").eq(1);
    var zjlImg = $(".bigImg_item").eq(1).children();
    var zjln = 0;
    var zjlm = 0;
    //左右文字
    var leftTxt = $(".yys_wrap .bigImg_wrap .bigImg_btn_left p");
    var rightTxt = $(".yys_wrap .bigImg_wrap .bigImg_btn_right p");
    zjlrBtn.click(function () {
        zjln++;
        if (zjln === zjlImg.length) {
            zjln = 0;
        }
        var hide_left = zjlImg.eq(zjlm).find("img").eq(0);
        var hide_right = zjlImg.eq(zjlm).find("img").eq(1);


        var shou_left = zjlImg.eq(zjln).find("img").eq(0);
        var shou_right = zjlImg.eq(zjln).find("img").eq(1);

        hide_left.stop().animate({
            left: "-290px",
            opacity: 0
        }, 600);

        hide_right.stop().animate({
            right: "-290px",
            opacity: 0
        }, 600, function () {
            zjlm = zjln;
            shou_left.stop().animate({
                left: "-140px",
                opacity: 1
            }, 600);
            shou_right.stop().animate({
                right: "-140px",
                opacity: 1
            }, 600);
        });
        leftTxt.eq(zjln).css("display", "block");
        leftTxt.eq(zjln - 1).css("display", "none");
        rightTxt.eq(zjln).css("display", "block");
        rightTxt.eq(zjln - 1).css("display", "none");
        zhujue_tabs.removeClass("on");
        zhujue_tabs.eq(zjln).addClass("on");
    })
    zjllBtn.click(function () {
        zjln--;
        if (zjln < 0) {
            zjln = zjlImg.length - 1;
        }
        var hide_left = zjlImg.eq(zjlm).find("img").eq(0);
        var hide_right = zjlImg.eq(zjlm).find("img").eq(1);
        var shou_left = zjlImg.eq(zjln).find("img").eq(0);
        var shou_right = zjlImg.eq(zjln).find("img").eq(1);
        hide_left.stop().animate({
            left: "-290px",
            opacity: 0
        }, 600);
        hide_right.stop().animate({
            right: "-290px",
            opacity: 0
        }, 600, function () {
            zjlm = zjln;
            shou_left.stop().animate({
                left: "-140px",
                opacity: 1
            }, 600);
            shou_right.stop().animate({
                right: "-140px",
                opacity: 1
            }, 600);
        });
        leftTxt.eq(zjln).css("display", "block");
        leftTxt.eq(zjlm).css("display", "none");
        rightTxt.eq(zjln).css("display", "block");
        rightTxt.eq(zjlm).css("display", "none");
        zhujue_tabs.removeClass("on");
        zhujue_tabs.eq(zjln).addClass("on");
    })
    var zhujue_tabs = $(".zhujue_tabs a");
    // zhujue_tabs.click(function () {
    //     zhujue_tabs.removeClass("on");
    //     zhujue_tabs.eq(zjln).addClass("on");

    // })
})



//声优阵
$(function () {
    var yd = $(".yd");
    var ydl = $("#ydl");
    var ydr = $("#ydr");
    var suoyin = 0;
    ydr.click(function () {
        suoyin++;
        if (suoyin === 2) {
            suoyin = 1;
        }
        yd.css({ "transform": "translate3d(-212.444px,0,0)" });
        ydr.addClass("on").siblings().removeClass("on");;
    })
    ydl.click(function () {
        suoyin++;
        if (suoyin === -1) {
            suoyin = 0;
        }
        yd.css({ "transform": "translate3d(0,0,0)" });
        ydl.addClass("on").siblings().removeClass("on");;
    })
}
)



//游戏攻略
var yxLi = $(".stategy_tab ul li");
var yxStat = $(".stategy_con");



yxLi.each(function (index) {
    $(this).mouseenter(function (e) {
        $(this).addClass("on").siblings().removeClass("on");
        $(".stategy_con").eq(index).show(100).siblings(".stategy_con").hide();
    })
});





// 同人手帐  左边
var spanList = $(".ban_num_con span");
var aList = $(".tr_ban_img a");
var index = 0;

function tr(index) {
    spanList.removeClass();
    $(spanList[index]).addClass("on");
    aList.stop().fadeOut(1000);
    $(aList[index]).stop().fadeIn(1000);
}

spanList.click(function () {
    index = $(this).index();
    tr(index);
})

var time = setTimeout(function () {
    index++;
    index = index >= aList.length ? 0 : index;
    tr(index);
}, 4000)

$(".tr_ban_box").mouseenter(function () {
    clearInterval(time);
})

$(".tr_ban_box").mouseleave(function () {
    setTimeout(function () {
        index++;
        index = index >= aList.length ? 0 : index;
        tr(index);
    }, 4000)
})

// 右边
var ulList = $(".rm_box .refresh");
var aList2 = $(".rm_zp ul");
var index1 = 0;
ulList.click(function () {
    index1++;
    index1 = index1 >= aList2.length ? 0 : index1;
    play1(index1);
})
setInterval(function () {
    ++index1;
    index1 = index1 >= aList2.length ? 0 : index1;
    play1(index1);
}, 4000)
function play1(index1) {
    aList2.stop(false, true).fadeOut(1000);
    $(aList2[index1]).stop(false, true).fadeIn(1000);
}

// 大触
var yzrBox = $(".yrz_box");
var yzrBox2 = $(".yrz_box2");
var yrzXcx = $(".yrz_xcx");
var yrzXcx2 = $(".yrz_xcx2");

yzrBox.mouseenter(function () {
    yrzXcx.css("display", "block");
})
yzrBox.mouseleave(function () {
    yrzXcx.css("display", "none");
})
yzrBox2.mouseenter(function () {
    yrzXcx2.css("display", "block");
})
yzrBox2.mouseleave(function () {
    yrzXcx2.css("display", "none");
})

var ulList2 = $(".ruzhu_box .refresh");
var aList3 = $(".ruzhu_zp ul");
var index2 = 0;
ulList2.click(function () {
    index2++;
    index2 = index2 >= aList3.length ? 0 : index2;
    play2(index2);
})
function play2(index2) {
    aList3.stop(false, true).fadeOut(1000);
    $(aList3[index2]).stop(false, true).fadeIn(1000);
}

//泛娱乐
var funUl = $(".fun_con  ul");
var btnLeft = $(".fun_btn_left");
var btnRight = $(".fun_btn_right");
var funLi = $(".fun_con ul li");
var funWidth = $(funLi[0]).width();
var funWidth2 = funWidth + 20;
var Index1 = 0;
btnRight.click(function () {
    btnLeft.css("display", "block");
    Index1++;
    if (Index1 >= funLi.length - 3) {
        Index1 = funLi.length - 4;
    }
    funUl.stop().animate({
        left: -Index1 * funWidth2 + "px"
    }, 1000)

    if (Index1 >= funLi.length - 4) {
        btnRight.css("display", "none");
    }
})
btnLeft.click(function () {
    Index1--;
    if (Index1 === -1) {
        Index1 = 0;
    }

    funUl.stop().animate({
        left: -Index1 * funWidth2 + "px"
    }, 1000)
    if (Index1 === 0) {
        btnLeft.css("display", "none");
    }
    if (Index1 !== funLi.length - 3) {
        btnRight.css("display", "block")
    }
})


//  京都商业街 

var ascrail = document.getElementById("ascrail2000-hr");
var tuoDong = document.querySelector(".nicescroll-cursors");
var syjul = document.getElementsByClassName("jingdu_box")[0].getElementsByTagName("ul");
var maxRight = ascrail.clientWidth - tuoDong.clientWidth - 2;

tuoDong.onmousedown = function (event) {
    event = event || ascrail.event;
    var x = event.clientX - tuoDong.offsetLeft;
    document.onmousemove = function (event) {
        var X = event.clientX - x;
        X = X < 0 ? 0 : X;
        X = X > maxRight ? maxRight : X;
        tuoDong.style.left = X + "px";
        // ul[0].style.marginLeft = -7.643865363735071 * X + "px";
        var c = -7.643865363735071 * X;
        syjul[0].style.transform = "translate3d(" + c + "px, 0px, 0px)";
    }
}
document.onmouseup = function () {
    this.onmousemove = null;
}


// 动漫人物
var part_ewm = $(".part_ewm ");
var role_wrap = $(".role-wrap");
var word_item = $(".word-item");

part_ewm.mousemove(function (e) {
    if (e.pageX < 860) {
        role_wrap.css("background-position", "0 0")
    }
    if (e.pageX >= 860) {
        role_wrap.css("background-position", "-203px 0")
    }
    if (e.pageX >= 930) {
        role_wrap.css("background-position", "-406px 0")
    }
    if (e.pageX > 980) {
        role_wrap.css("background-position", "-609px 0")
    }
    if (e.pageX >= 1050) {
        role_wrap.css("background-position", "-812px 0")
    }
})






$(function () {
    var isClick = true;
    $(".role-wrap").click(function () {
        if (isClick) {
            isClick = false;
            var index = Math.floor(Math.random() * 5.99);
            $(word_item[index]).animate({
                opacity: 1,
            }, 100)
            $(word_item[index]).delay(3000).animate({
                opacity: 0,
            }, 100)
            setTimeout(function () {
                isClick = true;
            }, 3000);
        }
    });
})
