import {dbData} from './db-data';

export function courseRoute(req, res) {

    // tslint:disable-next-line:radix
    const courseId = parseInt(req.params['id']) - 1;
    console.log('getting course details ' + courseId);
    const course = dbData[courseId];

    res.status(200).json({
        'id': course.id,
        'url': course.url,
        'description': course.description,
        'longDescription': course.longDescription,
        'lessons': course.lessons,
        'iconUrl': course.iconUrl
    });
}
