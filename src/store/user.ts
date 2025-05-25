import { create } from "zustand";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
};

type UserStoreState = { user: User | null };
type UserStoreActions = {
  setUser: (nextUser: UserStoreState["user"]) => void;
};

const userStore = create<UserStoreState & UserStoreActions>((set) => ({
  user: null,
  setUser: (user: User | null) => set((_) => ({ user })),
}));

export const login = (user: User) => userStore.getState().setUser(user);
export const removeUser = () => userStore.getState().setUser(null);

export default userStore;
