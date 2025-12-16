import { create } from "zustand";

// 👇 add a log so we know this file actually loads
console.log("[authStore] module loaded");

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: ({ user, token }) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;
