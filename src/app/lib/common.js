export const capitalizeFirstLetter = (string) => {
    if (!string || string === "") {
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const validateEmailWithoutSpecial = (email) => {
    if (!email || email === "") {
        return ""
    }
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

export const validatePassword = (password) => {
    if (!password || password === "") {
        return ""
    }
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;
    return re.test(password);
}

export const convertUTCTimeToLocalTime = (UTCDateString) => {
    var convertdLocalTime = new Date(UTCDateString);

    var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;

    convertdLocalTime.setHours(convertdLocalTime.getHours() + hourOffset);

    return convertdLocalTime;
}

export const formatMoney = (num) => {
    if (!num || num === "") return "0"
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formatMoneyCoin = (num, fixed) => {
    if (!num || num === "") return "0"
    let idx = num.toString().indexOf(".")
    let str = num.toString().substring(0, idx).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let sub_str = num.toString().substring(idx + 1, num.toString().length)
    let sum = 0
    for (let item of sub_str) {
        sum = sum + parseInt(item)
    }
    if (fixed === 0) {
        return str
    } else {
        if (sum === 0) {
            return str
        } else {
            return str + "." + sub_str
        }
    }
}

export const formatNumberCoin = (num) => {
    if (!num) return 0
    num = parseFloat(num).toFixed(8)
    return parseFloat(num).toLocaleString()
}

export const SECRET_KEY = "pOWI7geiVlbr1aBRbBpbGYA02fsb7O";

export const upperCaseFirstString = (string) => {
    if (!string || string === "") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const blackListInputNumber = (e) => {
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110].includes(e.keyCode)
        // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
        || ((e.keyCode === 65 || e.keyCode === 86 || e.keyCode === 67) && (e.ctrlKey === true || e.metaKey === true))
        // Allow: home, end, left, right, down, up
        || (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
        return true
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        return false
    }
    return true
}

export const blackListInputNumberWithoutDot = (e) => {
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110, 190].includes(e.keyCode)
        // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
        || ((e.keyCode === 65 || e.keyCode === 86 || e.keyCode === 67) && (e.ctrlKey === true || e.metaKey === true))
        // Allow: home, end, left, right, down, up
        || (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
        return true
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        return false
    }
    return true
}

export const apiUploadUrl = `${process.env.REACT_APP_API_URL}/uploads/`

export const convertToSlug = (str) => {
    // Chuy???n h???t sang ch??? th?????ng
    str = str.toLowerCase();

    // x??a d???u
    str = str
        .normalize('NFD') // chuy???n chu???i sang unicode t??? h???p
        .replace(/[\u0300-\u036f]/g, ''); // x??a c??c k?? t??? d???u sau khi t??ch t??? h???p

    // Thay k?? t??? ????
    str = str.replace(/[????]/g, 'd');

    // X??a k?? t??? ?????c bi???t
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // X??a kho???ng tr???ng thay b???ng k?? t??? -
    str = str.replace(/(\s+)/g, '-');

    // X??a k?? t??? - li??n ti???p
    str = str.replace(/-+/g, '-');

    // x??a ph???n d?? - ??? ?????u & cu???i
    str = str.replace(/^-+|-+$/g, '');

    // return
    return str;
}