// not using `export default` because the config module can't read it that way
module.exports = {
    "client": {
        "environment": "production",
        "port":        process.env.PORT,
    },
};
