import { request } from '../services/axios.service.js';
import { logError, logRequest } from '../services/log.service.js';
import { isImageUrl, isUrl } from '../services/utils.service.js';

export default async (req, res) => {
  res.send('');

  try {
    const body = req.body;
    // console.log(body);

    if (!body.text) return;

    let objectText = 'a text';
    if (isImageUrl(body.text)) {
      objectText = 'an image';
    } else if (isUrl(body.text)) {
      objectText = 'a link';
    }
    const blocks = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `@${body.user_name} has share *${objectText}*! Click *Show* to see.`
        },
      },
      {
        'type': 'actions',
        'elements': [
          {
            'type': 'button',
            'text': {
              'type': 'plain_text',
              'emoji': true,
              'text': 'Show'
            },
            'style': 'danger',
            'value': body.text,
            'action_id': 'safe-show'
          },
        ]
      }
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