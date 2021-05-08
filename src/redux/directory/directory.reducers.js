const INITIAL_STATE = {
  sections: [
    {
      title: "Great Computer Parts for Great Price",
      imageUrl: "/images/Hero.jpg",
      id: 1,
      linkUrl: "shop",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
