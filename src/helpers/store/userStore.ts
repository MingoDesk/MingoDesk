import { User, UserPermissions } from '../../@types/userPermissions';
import { ref, Ref } from 'vue';
import { IReturn } from '../api/requestGenerator';
import { getNav, Navigation } from '../getNav';

export const isLoggedIn: Ref<boolean> = ref(false);
export const userPermissions: Ref<UserPermissions[]> = ref(User.permissions);
export const user = ref<IReturn | null>(null);
export const nav = ref<Navigation[] | null>(getNav());
