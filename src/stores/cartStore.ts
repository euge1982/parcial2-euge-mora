import { defineStore } from 'pinia'
import type { Book, BookInCart } from '@/models/Book'

export const useCartSore = defineStore ('cart', {
    state: () => ({
        data: [] as BookInCart[]
    }),

    getters: {
        totalBooks(state): number {
            return state.data.reduce((total,book) => total + book.qty, 0 )
        },

        totalPrice(state): number {
            return state.data.reduce((total,book) => total + book.price * book.qty, 0)
        }

    },

    actions: {
        addBook(libro:Book): void {
            const exists = this.data.find((book) => book.id === libro.id);
            if (exists) {
                exists.qty++
            }
            else {
                this.data.push({ ...libro, qty:1 })
            }
        },

        removeBook(id:number): void {
            const index: number = this.data.findIndex((book) => book.id === id);
            if (index === -1) {
                alert ('No existe un libro con el id ingresado')
            }
            else if (this.data[index].qty > 1) {
                this.data[index].qty--
            }
            else {
                this.data.splice(index,1)
            }
        },

        clearCart(): void {
            this.data = []
        },
    }
})