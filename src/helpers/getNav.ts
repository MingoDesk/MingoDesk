import { User } from './stores/userStore';
import {
  IOrgUser,
  IStaff,
  IStaffAdmin,
  ISysAdmin,
  IDefaultUserPerms,
  OrgUser,
  Staff,
  StaffAdmin,
  SysAdmin,
} from '../@types/userPermissions';

export interface Navigation {
  label: string;
  items: string[];
}

export const check = (permissions: User['permissions'], ref: any[]): boolean => {
  return ref.every((v) => permissions.includes(v));
};

let nav: Navigation[] = [{ label: 'Tickets', items: ['home', 'closed'] }];

export const getNav = (
  permissions?:
    | IDefaultUserPerms['permissions']
    | IOrgUser['permissions']
    | ISysAdmin['permissions']
    | IStaff['permissions']
    | IStaffAdmin['permissions']
): Navigation[] => {
  if (!permissions) return nav;

  if (
    check(permissions, SysAdmin.permissions) ||
    check(permissions, StaffAdmin.permissions) ||
    check(permissions, Staff.permissions)
  ) {
    nav = [
      {
        label: 'Customer tiers',
        items: ['Unassigned', 'home', 'closed', 'SnoozedTickets', 'KanbanView'],
      },
    ];
  } else if (check(permissions, OrgUser.permissions)) {
    nav = [
      {
        label: 'Tickets',
        items: ['GroupTickets', 'closed', 'home'],
      },
    ];
  }

  return nav;
};
