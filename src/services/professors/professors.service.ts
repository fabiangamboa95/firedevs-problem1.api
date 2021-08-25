// Initializes the `professors` service on path `/professors`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Professors } from './professors.class';
import createModel from '../../models/professors.model';
import hooks from './professors.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'professors': Professors & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/professors', new Professors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('professors');

  service.hooks(hooks);
}
