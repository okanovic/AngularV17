import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuList: MenuItem[] = [
    {
      name: "Dasboard",
      icon: "./assets/svg/dashboard.svg",
      route: "dashboard"
    },
    {
      isOpen: false,
      name: "Components",
      icon: "./assets/svg/components.svg",
      subMenus: [
        {
          name: "Forms",
          route: "forms"
        },
        {
          name: "Buttons",
          route: "buttons"
        },
      ]
    },
    {
      isOpen: false,
      name: "Data Tables",
      icon: "./assets/svg/table-list.svg",
      subMenus: [
        {
          name: "List",
          route: "list"
        },
      ]
    },
  ]
}


interface MenuItem {
  name?: string;
  icon?: string;
  route?: string;
  isOpen?: boolean; // İhtiyaca bağlı, eğer dropdown özelliği kullanılacaksa
  subMenus?: MenuItem[]; // İhtiyaca bağlı, alt menüler için
}