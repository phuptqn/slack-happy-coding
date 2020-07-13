import { isImageUrl, isUrl } from './utils.service.js';

export const createModalContent = body => {
  const action = body.actions[0];
  const actionValue = action.value;

  if (isImageUrl(actionValue)) {
    const imageTitle = actionValue.split('/').pop().replace(/\.[a-zA-Z0-9]+$/, '');

    return {
      modalTitle: 'Image Content',
      modalContent: {
        blocks: [
          {
            'type': 'image',
            'alt_text': imageTitle,
            'title': {
              'type': 'plain_text',
              'text': imageTitle,
              'emoji': true
            },
            'image_url': actionValue
          }
        ]
      }
    };
  } else if (isUrl(actionValue)) {
    return {
      modalTitle: 'Link Content',
      modalContent: {
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `<${actionValue}|${actionValue}>`
            }
          }
        ]
      }
    };
  }

  return {
    modalTitle: 'Text Content',
    modalContent: {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: actionValue
          }
        }
      ]
    }
  };
}