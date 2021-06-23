function getEle(id) {
    return document.getElementById(id);
}

function addUser() {
    console.log("Đây là addUser của dbTrung");
}

function hienThiThongTin() {
    /**
     * Lấy thông tin từ người dùng nhập vào thông qua 5 input
     */
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemVan = getEle("txtDiemVan").value;

    /**
     * Xử lý: tính điểm trung bình; xếp loại
     * Tách hàm: viết 1 hàm tính điểm trung bình, viết 1 hàm xếp loại
     *
     * Xếp loại
     *  - 8 < dtb <= 10 => Gioi
     *  - 6 < dtb <=8 => Kha
     *  - 5 <= dtb <= 6 => TB
     *  => Yếu
     */
    var dtb = tinhDTB(diemToan, diemVan);

    /**
     * Xuất thông tin ra ngoài UI
     */
    getEle("spanTenSV").innerHTML = tenSV;
    getEle("spanMaSV").innerHTML = maSV;
    getEle("spanLoaiSV").innerHTML = loaiSV;
    getEle("spanDTB").innerHTML = dtb;
    getEle("spanXepLoai").innerHTML = xepLoai(dtb);
}

function tinhDTB(diemToan, diemVan) {
    var dtb = (parseFloat(diemToan) + parseFloat(diemVan)) / 2;
    return dtb;
}

function xepLoai(dtb) {
    if (8 < dtb && dtb <= 10) {
        return "Gioi";
    }

    if (6 < dtb && dtb <= 8) {
        return "Kha";
    }

    if (5 <= dtb && dtb <= 6) {
        return "TB";
    }

    if (5 > dtb) {
        return "Yeu";
    }
}
