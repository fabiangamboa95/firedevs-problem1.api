import { Application } from '../declarations';
import students from './students/students.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(students);
}
