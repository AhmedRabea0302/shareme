export const userQuery = () => {
  const query = `*[_type == "user" && userName == "Fadlooovich"]`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || about match '${searchTerm}*' || category match '${searchTerm}*']{
    image {
      asset -> { 
        url
      }
    }, 
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt asc) {
image {
      asset -> { url }
    }, 
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
}`;
