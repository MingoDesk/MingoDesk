import {
  IOrgUser,
  IStaff,
  IStaffAdmin,
  ISysAdmin,
  IUser,
  OrgUser,
  Staff,
  StaffAdmin,
  SysAdmin,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '../@types/userPermissions';

export interface Navigation {
  label: string;
  items: string[];
}

export const check = (
  userPerms:
    | IUser['permissions']
    | IOrgUser['permissions']
    | ISysAdmin['permissions']
    | IStaff['permissions']
    | IStaffAdmin['permissions'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any[]
): boolean => ref.every((v) => userPerms.includes(v));

let nav: Navigation[] = [{ label: 'Tickets', items: ['YourTickets', 'ClosedTickets'] }];

export const getNav = (
  permissions?:
    | IUser['permissions']
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
        items: ['Unassigned', 'YourTickets', 'ClosedTickets', 'SnoozedTickets', 'KanbanView'],
      },
    ];
  } else if (check(permissions, OrgUser.permissions)) {
    nav = [
      {
        label: 'Tickets',
        items: ['GroupTickets', 'ClosedTickets', 'YourTickets'],
      },
    ];
  }

  return nav;
};
