import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  { path: '', component: UserListComponent }
];

export const routing = RouterModule.forRoot(routes);