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

    const daolyRand = getRandomInt(daolycun.length - 1);
    const authorsRand = getRandomInt(authors.length - 1);

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
          text: `\`\`\`${daolycun[daolyRand].body}\n\n* ${authors[authorsRand]} *\`\`\``
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