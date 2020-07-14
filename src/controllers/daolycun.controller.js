import { getRandomInt } from '../services/utils.service.js';
import { request } from '../services/axios.service.js';
import { logError, logRequest } from '../services/log.service.js';
import daolycun from '../data/daolycun.json';
import authors from '../data/authors.json';

export default async (req, res) => {
  res.send('');

  try {
    const body = req.body;
    // console.log(body);

    let daoly;
    let author;
    if (body.text) {
      const patt = /(^.+)(\-\-author=)(.+$)/;
      if (patt.test(body.text)) {
        daoly = body.text.replace(patt, '$1');
        author = body.text.replace(patt, '$3');
      }
    }
    if (!daoly) {
      daoly = daolycun[ getRandomInt(daolycun.length - 1) ].body;
      author = authors[ getRandomInt(authors.length - 1) ];
    }

    const blocks = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `@${body.user_name} đã chia sẻ một *đạo lý cùn*.`
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `\`\`\`${daoly}\n\n* ${author} *\`\`\``
        },
      },
    ];
    
    const requested = await request(body.response_url, {
      response_type: 'in_channel',
      text: '',
      blocks
    });
    logRequest(requested);
  } catch (error) {
    logError(error);
  }
};