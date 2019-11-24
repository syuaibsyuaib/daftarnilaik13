let local = {
    simpan: function (key, params) {
        return localStorage.setItem(key, JSON.stringify(params));
    },
    ambil: function (key) {
        return localStorage.getItem(key);
    },
    hapus: function (key) {
        return localStorage.removeItem(key);
    },
    isiinp: function (key) {
        for (let i = 0; i < key.length; i++) {
            if (key[i].value == "") {
                alert(key[i].placeholder + ' tidak boleh kosong');
                return false;
            }
        }
        return true;
    }
}