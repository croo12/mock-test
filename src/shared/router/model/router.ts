import { create } from "zustand";

type FakeHistory = {
  push: (path: string) => void;
};

export const useRouter = create<{ path: string } & { history: FakeHistory }>(
  (set) => ({
    path: "/",
    history: {
      push: (path: string) => {
        history.pushState(null, "", path);
        set({ path });
      }
    }
  })
);