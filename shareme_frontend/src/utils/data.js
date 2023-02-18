export const userQuery = () => {
  const query = `*[_type == "user" && userName == "Fadlooovich"]`;
  return query;
};
