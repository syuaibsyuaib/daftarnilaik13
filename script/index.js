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
    analiskd : function (kelas, semester, tema, subtema, matapelajaran, pembelajaran) {
        for (let i = 0; i < pembelajaran.length; i++) {
            if (pembelajaran[i] == id.get('pb')) {
                return true;
            }
        }
        return false;
    },

    isicell : function (mp, i) {
        let run = [Object.keys(mp)[i], mp[Object.keys(mp)[i]], "<input type='number'>"]
        console.log(Object.keys(mp)[i]);
        return run
    },

    rowmaker : function (indexrow, isicell) {
        let newRow = tbl.insertRow(indexrow);
        for (let j = 0; j < 3; j++) {
            newRow.insertCell(j).innerHTML = isicell[j];
        }
    }
}