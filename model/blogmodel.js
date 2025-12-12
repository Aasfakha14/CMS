module.exports = (sequelize, DataType) => {
    const Blog = sequelize.define("blog", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subTitle: {
            type: DataType.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
    });
    return Blog;

};