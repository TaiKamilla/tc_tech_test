const toJSON = (schema) => {
  schema.options.toJSON = {
    virtuals: true,
    transform: (_doc, ret) => {
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    },
  };
};

export default toJSON;
