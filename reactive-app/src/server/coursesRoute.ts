import {dbData} from './db-data';
import * as _ from 'lodash';

export function coursesRoute(req, res) {

  console.log('getting courses ', req.query);

  const courses = dbData;

  res.status(200).json({payload: courses.map(buildCourseSummary)});
}

function buildCourseSummary({id, url, description, longDescription, iconUrl}, index) {
  return {
    id,
    url,
    description,
    longDescription,
    iconUrl
  };
}
