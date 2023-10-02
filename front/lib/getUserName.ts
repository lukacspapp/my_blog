export function getUserName(userObject) {
  const { name, full_name } = userObject;

  if (name) {
    if (name.split(' ').length > 1) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  }

  if (full_name) {
    if (full_name.split(' ').length > 1) {
      return full_name.split(' ')[0];
    } else {
      return full_name;
    }
  }

  return null

}