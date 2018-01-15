
import {dbData} from './db-data';
import * as _ from 'lodash';

export function lessonsRoute(req, res) {

  console.log(req.query);

  // test error handling by generationg random errors
  const random = Math.ceil(Math.random() * 10);

  // error displayed 1 of 2 times
  if (random % 2 === 1) {
    res.sendStatus(500);
    return;
  }

  const courseId = parseInt(req.query['courseId']) - 1;
  const pageNumber = parseInt(req.query['pageNumber']);
  const pageSize = parseInt(req.query['pageSize']);

  const lessons = dbData[courseId].lessons;

  const start = ( pageNumber - 1 ) * pageSize;
  const end = start + pageSize;

  const lessonsPage = _.slice(lessons, start, end );

  res.status(200).json({payload: lessonsPage.map(buildLessonSummary)});
}

function buildLessonSummary({url, description, duration}, index) {
  return {
    url,
    description,
    seqNo: index,
    duration
  };
}

