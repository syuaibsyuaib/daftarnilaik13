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
    },
    analiskd : function (pembelajaran) {
        let ambilParam = window.location.search;
        let id = new URLSearchParams(ambilParam);
        for (let i = 0; i < pembelajaran.length; i++) {
            if (pembelajaran[i] == id.get('pb')) {
                return true;
            }
        }
        return false;
    },

    isicell : function (mp, i) {
        let run = [Object.keys(mp)[i], mp[Object.keys(mp)[i]], "<input type='number'>"]
        return run
    },

    rowmaker : function (indexrow, isicell) {
        let newRow = tbl.insertRow(indexrow);
        for (let j = 0; j < 3; j++) {
            newRow.insertCell(j).innerHTML = isicell[j];
        }
    }
}