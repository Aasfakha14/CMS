module.exports = (sequelize, DataType) => {
    const Blog = sequelize.define("blog", {
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        subTitle: {
            type: DataType.STRING,
        },
        description: {
            type: DataType.TEXT,
        },
    });
    return Blog;

};