import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set: any) => ({
  username: null,
  changeUsername: (newUsername: string) =>
    set((state: any) => {
      state.username = newUsername;
    }),
});

const useStore = create(
  persist(devtools(store), {
    name: 'io-tester',
  })
);

export default useStore;
