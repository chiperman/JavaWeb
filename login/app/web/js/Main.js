import Utils from './Utils.js';
export default class Main {
    static styles=false;
    constructor(_list, basePath) {
        //拼接图片的路径
        if (basePath) _list.img = basePath + _list.img;
        this.elem = this.createElem(_list);
    }
    createElem(_list) {
        if(this.elem) return this.elem;
        let div = Utils.createE("div");
        div.className = "goodsContainer";
        //页面结构
        div.innerHTML = `<a class="goodsInfo" href="${_list.href}" target="_blank">
        <img class="goodsImg" src="${_list.img}" title="${_list.title}">
        <span class="goodsTit">${_list.title}</span>
        <span class="goodsDesc">${_list.desc}</span></a>
        <div class="goodsPrice clearfix"><div class="leftCon">
        <div class="priceDesc">${_list.price_desc}</div><div class="priceNow"><span>￥</span>${_list.price_now}</div>
        <del class="pricePre">￥${_list.price_pre}</del></div>
        <div class="rightCon"><p class="sale">已卖<span>${_list.sale}</span>件</p><a class="saleBtn" href="${_list.href}" target="_blank">立即抢购</a></div></div>`;
        //写样式
        Main.setStyles();
        return div;
    }
    appendTo(parent) {
        Utils.appendTo(this.elem, parent);
    }
    static setStyles() {
        if(Main.styles) return;
        Main.styles=true;
        Utils.insertCss("body", {
            background: "#f5f5f5"
        })
        Utils.insertCss("body,div,p", {
            margin: "0px",
            padding: "0px"
        })
        Utils.insertCss(".goodsContainer", {
            width: "290px",
            height: "400px",
            margin: "10px 0px 0px 10px",
            background: "#fff",
            float: "left"
        })
        Utils.insertCss(".goodsInfo", {
            width:"270px",
            paddingLeft:"20px",
            cursor:"pointer",
            textDecoration:"none"
        })
        Utils.insertCss(".goodsImg", {
            width: "200px",
            height: "200px",
            margin: "20px 0px 0px 25px"
        })
        Utils.insertCss(".goodsImg:hover", {
            position:"relative",
            top:"-7px",
        })
        Utils.insertCss(".goodsTit", {
            fontSize: "14px",
            color: "#333333",
            margin: "0px 20px 10px",
            fontWeight: "bold",
            textAlign: "left",
            lineHeight: "20px",
            height: "20px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display:"block"
        })
        Utils.insertCss(".goodsDesc", {
            margin: "0px 0px 10px 20px",
            fontSize: "14px",
            color: "#e01222",
            display:"block"
        })
        Utils.insertCss(".goodsPrice", {
            paddingLeft:"20px",
            paddingTop:"13px",
            borderTop: "1px solid #f3f3f3"
        })
        Utils.insertCss(".leftCon", {
            float: "left"
        })
        Utils.insertCss(".priceDesc", {
            padding: "0 8px",
            height: "16px",
            lineHeight: "16px",
            backgroundColor: "#e6e6e6",
            fontSize: "10px",
            color: "#999",
            borderRadius: "2px",
            position: "relative",
            marginBottom:"10px"
        })
        Utils.insertCss(".priceDesc:after", {
            content: "\".\"",
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-6px",
            margin: "0 auto",
            width: "0",
            height: "0",
            borderWidth: "3px",
            borderStyle: "solid dashed dashed",
            borderColor: "#e6e6e6 transparent transparent",
            pointerEvents: "none",
        })
        Utils.insertCss(".priceNow", {
            fontSize: "24px",
            color: "#e01222",
            marginRight: "2px",
            lineHeight: "1",
            minWidth: "50px",
            marginBottom:"3px"
        })
        Utils.insertCss(".priceNow span", {
            fontSize: "14px"
        })
        Utils.insertCss(".pricePre", {
            lineHeight: "1.2",
            color: "#999",
            fontSize: "18px",
        })
        Utils.insertCss(".rightCon", {
            float: "right"
        })
        Utils.insertCss(".sale", {
            height: "18px",
            fontSize: "12px",
            color: "#999999",
            textAlign: "right",
            paddingRight: "10px",
        })
        Utils.insertCss(".sale span", {
            fontSize: "18px",
            color: "#df0021"
        })
        Utils.insertCss(".saleBtn", {
            marginTop: "15px",
            color: "#fff",
            height: "38px",
            lineHeight: "38px",
            fontSize: "16px",
            display: "block",
            width: "90px",
            textAlign: "center",
            background: "#df0021",
            textDecoration:"none"
        })
        Utils.insertCss(".clearfix::after", {
            content: "\".\"",
            display: "block",
            overflow: "hidden",
            visibility: "hidden",
            height: "0px",
            clear: "both"
        })
    }
}
