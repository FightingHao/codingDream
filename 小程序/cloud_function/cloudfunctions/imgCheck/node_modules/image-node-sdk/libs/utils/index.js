const request = require('request');
const crypto = require('crypto');

/**
 * 加密算法
 * @see https://cloud.tencent.com/document/product/641/12409
 * @param {String} str 需要加密的字符串
 * @param {String} secretKey 私有密钥
 */
exports.sign = (str, secretKey) => {
    let data = Buffer.from(str, 'utf8');
    let res = crypto.createHmac('sha1', secretKey).update(data).digest();
    let bin = Buffer.concat([res, data]);
    let sign = bin.toString('base64');
    return sign;
};

/**
 * promise api for request
 * @param {Object} options
 */
exports.rp = options =>
    new Promise((resolve, reject) => {
        // if (config.Proxy) {
        //     options.proxy = config.Proxy;
        // }
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve(response);
        });
    });
