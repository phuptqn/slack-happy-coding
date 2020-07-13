export const logRequest = result => {
  result.data = result.data || {
    ok: true
  };
  if (typeof result.data == 'object' && !result.data.ok) {
    result.data.response_metadata = result.data.response_metadata || {};
    console.log('==========================');
    console.log('ERROR:', result.data.response_metadata.messages);
    console.log('==========================');
  } else if (result.data == 'ok' || result.data.ok) {
    console.log('REQUEST SUCCEEDED!');
  }
}

export const logError = error => {
  console.log('==========================');
  console.log('ERROR:', error.message);
  console.log(error.stack);
  console.log('==========================');
}