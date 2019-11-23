let local = {
    simpan: function (key, params) {
        return localStorage.setItem(key, JSON.stringify(params));
    },
    ambil: function (key) {
        return localStorage.getItem(key);
    },
    hapus: function (key) {
        return localStorage.removeItem(key);
    }
}