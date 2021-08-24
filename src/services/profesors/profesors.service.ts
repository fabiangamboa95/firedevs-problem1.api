// Initializes the `profesors` service on path `/profesors`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Profesors } from './profesors.class';
import createModel from '../../models/profesors.model';
import hooks from './profesors.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'profesors': Profesors & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/profesors', new Profesors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('profesors');

  service.hooks(hooks);
}
