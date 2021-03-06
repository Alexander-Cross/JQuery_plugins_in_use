$(document).ready(() => {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.888231 19.3612L18.6887 0.67097C19.1004 0.23834 19.65 0 20.236 0C20.8221 0 21.3716 0.23834 21.7833 0.67097L23.0942 2.04706C23.9472 2.94373 23.9472 4.40109 23.0942 5.2964L8.14671 20.9913L23.1108 36.7036C23.5225 37.1362 23.7498 37.713 23.7498 38.3279C23.7498 38.9436 23.5225 39.5203 23.1108 39.9533L21.7999 41.329C21.3879 41.7617 20.8386 42 20.2526 42C19.6666 42 19.117 41.7617 18.7053 41.329L0.888231 22.6218C0.475552 22.1878 0.248888 21.6083 0.250189 20.9923C0.248888 20.3739 0.475552 19.7948 0.888231 19.3612Z" fill="#BD8D99"/>\n' +
            '</svg>',
        nextArrow: '<svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M23.1117 19.3612L5.31122 0.67097C4.89951 0.23834 4.34993 0 3.76391 0C3.1779 0 2.62831 0.23834 2.21661 0.67097L0.905727 2.04706C0.0527256 2.94373 0.0527256 4.40109 0.905727 5.2964L15.8532 20.9913L0.889141 36.7036C0.477437 37.1362 0.250122 37.713 0.250122 38.3279C0.250122 38.9436 0.477437 39.5203 0.889141 39.9533L2.20002 41.329C2.61205 41.7617 3.16132 42 3.74733 42C4.33334 42 4.88293 41.7617 5.29463 41.329L23.1117 22.6218C23.5244 22.1878 23.7511 21.6083 23.7498 20.9923C23.7511 20.3739 23.5244 19.7948 23.1117 19.3612Z" fill="#BD8D99"/>\n' +
            '</svg>'
    });
    $( "#tabs" ).tabs({
        collapsible: true
    });
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        icons: { header: "iconClosed", activeHeader: "iconOpen" }
    });
});