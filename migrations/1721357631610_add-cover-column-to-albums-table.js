exports.up = (pgm) => {
  pgm.addColumn('albums', {
    cover: {
      type: 'text',
      default: null,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('albums', 'cover_url');
};
