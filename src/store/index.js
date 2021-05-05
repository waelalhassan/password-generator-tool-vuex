import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        password: "00000000000000",
        passLength: 1,
        A_Z: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        a_z: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        metaChar: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "/", "\\", "-", "?", "<", ">"]
    },
    getters:{
        getPass(state) {
            return state.password;
        },
        getRangeVal(state) {
            return state.passLength;
        }
    },
    mutations:{
        passGenerate(state) {
            let A_Z = state.A_Z,
                a_z = state.a_z,
                digits = state.digits,
                metaChar = state.metaChar,
                _AZ_ = [],
                _az_ = [],
                _09_ = [],
                _MC_ = [],
                charLength = 5;

            for (let i = 0; i < charLength; i++) {
                const randAZ = Math.floor(Math.random() * A_Z.length);
                const _AZ = A_Z[randAZ];

                const randaz = Math.floor(Math.random() * a_z.length);
                const _az = a_z[randaz];

                const randdigit = Math.floor(Math.random() * digits.length);
                const _09 = digits[randdigit];

                const randmetaChar = Math.floor(Math.random() * metaChar.length);
                const _MC = metaChar[randmetaChar];

                _AZ_.push(_AZ)
                _az_.push(_az)
                _09_.push(_09)
                _MC_.push(_MC)
            };

            const all = [];
            let passLength = state.passLength;

            for (let i = 0; i < passLength; i++) {
                let random_AZ_ = Math.floor(Math.random() * _AZ_.length);
                let resul_AZ_ = _AZ_[random_AZ_];

                let random_az_ = Math.floor(Math.random() * _az_.length);
                let resul_az_ = _az_[random_az_];

                let random_09_ = Math.floor(Math.random() * _09_.length);
                let resul_09_ = _09_[random_09_];

                let random_MC_ = Math.floor(Math.random() * _MC_.length);
                let resul_MC_ = _MC_[random_MC_];

                let result = `${resul_AZ_}${resul_az_}${resul_09_}${resul_MC_}`;

                    all.push(result);
                };
            const passString = all.join("");
            state.password = passString;
        },
        range(state, payload) {
            state.passLength = payload;
        },
        copyPassword(state, payload) {
            const password = payload;
            const range = document.createRange();
            range.selectNodeContents(password);
            const getSelection = window.getSelection();
            getSelection.removeAllRanges();
            getSelection.addRange(range);
            document.execCommand("copy");
        }
    }
})