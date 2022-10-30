import fx from 'money';
export const state = () => ({
    currencyList: []
})
export const getters = {
    currencyList: (state) => {
        return state.currencyList
    },
}
export const mutations = {
    SET_LIST: (store, list) => {
        store.currencyList = list;
    },
}
export const actions = {
    async fetchRates() {
        try {
            await this.$axios.$get('api/latest.js')
                .then((data) => {
                    if ( typeof fx !== "undefined" && fx.rates ) {
                        fx.rates = data.rates;
                        fx.base = data.base;
                    } else {
                        const fxSetup = {
                            rates : data.rates,
                            base : data.base
                        }
                    }
                });
        } catch (e) {
            throw e;
        }
    },
    async fetchList({commit}) {
        try {
            let currencyList = await this.$axios.$get('api/daily_json.js');
            if (currencyList) {
                commit('SET_LIST', Object.values(currencyList.Valute));
            }
        } catch (e) {
            throw e;
        }
    },
}
