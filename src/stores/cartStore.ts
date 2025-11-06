import type {Book} from '../model/Book'
import  from ''

export const useCartSore = defineStore ('cartSore', {
    state: () => ({
        data: [] as BookInCart[]
    }),

    getters: {

    },

    actions: {
        agregarLibro(libro:Book) {
            
        }
    }
}
)