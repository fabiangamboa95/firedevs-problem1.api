import { Application } from '../declarations';
import students from './students/students.service';
import profesors from './profesors/profesors.service';
import cities from './cities/cities.service';
import groups from './groups/groups.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(students);
  app.configure(profesors);
  app.configure(cities);
  app.configure(groups);
}
