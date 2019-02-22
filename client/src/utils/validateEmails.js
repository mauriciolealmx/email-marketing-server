const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isInvalidEmail = email => !RE.test(email);

export default emails => {
  const trimmedEmails = emails.split(',').map(email => {
    return email.trim();
  });
  // FIXME: Add error for traling commas.
  const invalidEmails = trimmedEmails.filter(isInvalidEmail);
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};
