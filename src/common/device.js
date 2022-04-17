// 检测手机横竖屏
export function checkWindow() {
    if ( window.orientation == 180 || window.orientation==0 ) { 
        return 'Vertical'; 
    } else if( window.orientation == 90 || window.orientation == -90 ) {
        return 'Transverse'; 
    }
}

// 检测设备
let os = function (){
    var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };	
}();
export function checkMachine() {
    if (os.isAndroid || os.isPhone) {   
        // 手机
        return 'Moblie'
    } else if (os.isTablet) {
        // 平板
        return 'Paid'
    } else if (os.isPc) {
        // pc
        return 'Pc'
    }
}