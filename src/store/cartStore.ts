// src/store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/lib/interfaces'
import { toast } from 'react-hot-toast'

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItem = get().items.find((i) => i._id === item._id);
        if (existingItem) {
          toast.success(`${item.name} sudah ada di keranjang, jumlah ditambah.`);
          get().increaseQuantity(item._id);
        } else {
          set((state) => ({ items: [...state.items, { ...item, quantity: 1 }] }));
          toast.success(`${item.name} berhasil ditambahkan ke keranjang!`);
        }
      },
      removeItem: (itemId) => {
        set((state) => ({ items: state.items.filter((i) => i._id !== itemId) }));
        toast.error("Item dihapus dari keranjang.");
      },
      increaseQuantity: (itemId) => {
        set((state) => ({
          items: state.items.map((i) =>
            i._id === itemId ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }));
      },
      decreaseQuantity: (itemId) => {
        const existingItem = get().items.find((i) => i._id === itemId);
        if (existingItem && existingItem.quantity > 1) {
          set((state) => ({
            items: state.items.map((i) =>
              i._id === itemId ? { ...i, quantity: i.quantity - 1 } : i
            ),
          }));
        } else {
          get().removeItem(itemId);
        }
      },
    }),
    {
      name: 'animal-friends-cart', // Nama untuk penyimpanan di localStorage
    }
  )
);