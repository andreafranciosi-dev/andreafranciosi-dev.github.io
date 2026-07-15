
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,  
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
constructor(private router: Router,
    private route: ActivatedRoute    
  ) { }

  navBarItems: any;

  ngOnInit(): void {
    this.navBarItems = [
      { label: 'Home', icon: 'bi bi-house-door-fill', visible: true, /*route: '/Portfolio/',*/ action: () => this.goToSection('home')},
      { label: 'Timeline', icon: '', visible: true, /*route: '/Timeline/',*/ action: () => this.goToSection('timeline')},
      { label: 'Curriculum', icon: '', visible: true, /*route: '/Curriculum/',*/ action: () => this.goToSection('curriculum')},
      { label: 'Contacts', icon: '', visible: true, /*route: '/Contacts/',*/ action: () => this.goToSection('contacts')}
    ].filter(i => i.visible);    
  }

  goToSection(sectionName: string) {
    const element = document.getElementById(sectionName);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    console.log("Logout")
    this.router.navigate(['login'], {relativeTo: this.route});
  }

  openUserManual() {
    const pdfURL = "assets/ManualeSitoSpedizioni.pdf";
    window.open(pdfURL, '_blank');
  }

  toggleDarkMode(event: Event) {
    const checkbox = event.target as HTMLInputElement;    
    document.body.classList.toggle('dark-mode', checkbox.checked)
  }
}
