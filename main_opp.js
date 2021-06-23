function getEle(id) {
    return document.getElementById(id);
}

function hienThiThongTin() {
    //Lấy thông tin từ người dùng nhập vào
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _loaiSV = getEle("loaiSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemVan = getEle("txtDiemVan").value;

    var sinhVien = {
        //key: value
        maSV: _maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        diemToan: _diemToan,
        diemVan: _diemVan,

        tinhDTB: function () {
            var dtb =
                (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
            return dtb;
        },

        xepLoai: function (dtb) {
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
        },
    };

    var dtb = sinhVien.tinhDTB();

    getEle("spanTenSV").innerHTML = sinhVien.tenSV;
    getEle("spanMaSV").innerHTML = sinhVien.maSV;
    getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    getEle("spanDTB").innerHTML = dtb;
    getEle("spanXepLoai").innerHTML = sinhVien.xepLoai(dtb);
}
