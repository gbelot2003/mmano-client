import {Roles} from './roles.model';

export interface Usuarios {
  name: string;
  email: string;
  telefono: string;
  departamento_id: number;
  municipio_id: number;
  calle: string;
  casa: string;
  lat: string;
  long: string;
  departamento: {
    departamento: string
  };
  municipio: {
    municipio: string
  };

  roles: Roles;
}
