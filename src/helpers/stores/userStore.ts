import { UserPermissions } from '../../@types/userPermissions';
import { getNav, Navigation } from '../getNav';
import { defineStore } from 'pinia';

export type User = {
  permissions: UserPermissions[];
  providerId: string;
  email: string;
  isVerified: boolean;
  locale: string;
  name: string;
  picture: string;
};

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as User,
    nav: [] as Navigation[],
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
      this.nav = getNav(user.permissions);
    },
  },
});
