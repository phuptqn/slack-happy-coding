import actions from '../services/actions.service.js';
import { logError, logRequest } from '../services/log.service.js';

export default async (req, res) => {
  res.send('');

  try {
    const body = req.body;
    console.log(body);

    const requested = await actions[body.actions[0].action_id](body);
    logRequest(requested);
  } catch (error) {
    logError(error);
  }
};