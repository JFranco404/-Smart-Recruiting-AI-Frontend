import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../auth/login/login.service';
import { InfoUsuarioService } from '../../shared/services/info-usuario.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private login: LoginService,
    private infoUsuario: InfoUsuarioService
  ) {}

  get usuarioEsReclutador(): boolean {
    return this.infoUsuario.usuarioEsReclutador();
  }

  get nombreUsuario(): string {
    return this.infoUsuario.obtenerInfoUsuario().nombres;
  }

  cerrarSesion() {
    this.login.cerrarSesion();
  }

  redirigirAGestionarVacantes() {
    this.router.navigate(['gestionar-vacantes'], { relativeTo: this.route });
  }
}
