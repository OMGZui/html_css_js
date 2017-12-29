/*
 * @Author: 小粽子 
 * @Date: 2017-12-01 11:41:41 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-29 13:55:18
 */
// jquery 实现
$(function () {
    $('.insert_content').attr('href', 'http://omgzui.pub/');
    $('.insert_content').append('我是你爸爸JQUERY').append( (() => '沙笔')());
});

// vue 实现
var app = new Vue({
    el: '#app',
    data: {
        href: 'http://omgzui.pub/',
        a: '我是你爸爸VUE',
    }
});
