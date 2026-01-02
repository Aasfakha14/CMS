// local
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "cms",
    dialect: "mysql",
    pool: {
       max: 5,
       min:0,
    acquire:30000, 
        idle:10000,
    },
};
// online
// module.exports = {
//     HOST: "mysql.railway.internal",
//     USER: "root",
//     PASSWORD: "phlHGYMIiDnByUADNJRUOwQymJivtHvk",
//     DB: "railway",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min:0,
//         acquire:30000, 
//         idle:10000,
//     },
// };