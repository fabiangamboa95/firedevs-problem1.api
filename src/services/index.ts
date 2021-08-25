import { Application } from "../declarations";
import students from "./students/students.service";
import cities from "./cities/cities.service";
import groups from "./groups/groups.service";
import professors from './professors/professors.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(students);
  app.configure(cities);
  app.configure(groups);
  app.configure(professors);
}
