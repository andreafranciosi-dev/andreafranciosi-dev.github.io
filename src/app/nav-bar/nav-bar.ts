
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,  
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  navBarItems: any;
  offcanvasOpening = false;

  ngOnInit(): void {
    this.navBarItems = [
      { label: 'Home', icon: 'bi bi-house-door-fill', visible: true, route: '/Home/', action: () => this.goToSection('home')},
      { label: 'Portfolio', icon: '', visible: true, /*route: '/Portfolio/',*/ action: () => this.goToSection('portfolio')},
      { label: 'Timeline', icon: '', visible: true, /*route: '/Timeline/',*/ action: () => this.goToSection('timeline')},
      { label: 'Curriculum', icon: '', visible: true, /*route: '/Curriculum/',*/ action: () => this.goToSection('curriculum')},
      { label: 'Contacts', icon: '', visible: true, /*route: '/Contacts/',*/ action: () => this.goToSection('contacts')}
    ].filter(i => i.visible);    
  }

  goToSection(sectionName: string) {
    if (this.router.url === '/') {
      document.getElementById(sectionName)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(sectionName)?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // piccolo delay per dare tempo al DOM di renderizzare la Home
      });
    }
  }
  
  toggleOffcanvas() {
    if (this.offcanvasOpening) return;
    this.offcanvasOpening = true;
    
    const el = document.getElementById('mobileMenu');
    if (el) {
      Offcanvas.getOrCreateInstance(el).toggle();
    }
    
    setTimeout(() => this.offcanvasOpening = false, 350);
  }

  closeOffcanvas() {
    const el = document.getElementById('mobileMenu');
    if (el)     
      Offcanvas.getOrCreateInstance(el).hide();    
  }
}
