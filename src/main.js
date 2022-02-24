// ES6 import
import PLUGIN_INFO from './plugin-info';
import { showInfo } from './module-utils';
// NodeModule import
import dateFormat, { masks } from "dateformat";


logger.setTitle(PLUGIN_INFO.NAME)
lxl.requireVersion(0, 5, 5);

// Write down youe code.


// dateFormat Demo
{
    log('Plugin Template Demo Started')
    showInfo(PLUGIN_INFO);
    const now = new Date();

    // Basic usage
    log(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"));
    // Saturday, June 9th, 2007, 5:46:21 PM

    // You can use one of several named masks
    log(dateFormat(now, "isoDateTime"));
    // 2007-06-09T17:46:21

    // ...Or add your own
    masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
    log(dateFormat(now, "hammerTime"));
    // 17:46! Can't touch this!

    // You can also provide the date as a string
    log(dateFormat("Jun 9 2007", "fullDate"));
    // Saturday, June 9, 2007

    // Note that if you don't include the mask argument,
    // dateFormat.masks.default is used
    log(dateFormat(now));
    // Sat Jun 09 2007 17:46:21

    // And if you don't include the date argument,
    // the current date and time is used
    log(dateFormat());
    // Sat Jun 09 2007 17:46:22

    // You can also skip the date argument (as long as your mask doesn't
    // contain any numbers), in which case the current date/time is used
    log(dateFormat("longTime"));
    // 5:46:22 PM EST

    // And finally, you can convert local time to UTC time. Simply pass in
    // true as an additional argument (no argument skipping allowed in this case):
    log(dateFormat(now, "longTime", true));
    // 10:46:21 PM UTC

    // ...Or add the prefix "UTC:" or "GMT:" to your mask.
    log(dateFormat(now, "UTC:h:MM:ss TT Z"));
    // 10:46:21 PM UTC

    // You can also get the ISO 8601 week of the year:
    log(dateFormat(now, "W"));
    // 42

    // and also get the ISO 8601 numeric representation of the day of the week:
    log(dateFormat(now, "N"));
    // 6
}