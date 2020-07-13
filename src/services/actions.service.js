import config from '../config.js';
import { request } from './axios.service.js';
import { createModalContent } from './message.service.js';

export default {
  'safe-show': async body => {
    const modal = createModalContent(body);
    const view = {
      type: 'modal',
      callback_id: 'modal',
      title: {
        type: 'plain_text',
        text: modal.modalTitle
      },
      ...modal.modalContent
    };
  
    return request(config.api.router.viewsOpen, {
      trigger_id: body.trigger_id,
      view
    });
  }
};