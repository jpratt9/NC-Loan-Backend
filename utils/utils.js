function hasIt(body, field) {
  return body.hasOwnProperty(field) && !(!body[field]);
}
