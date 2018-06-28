import NebPay from '../utils/nebpay';
import config from '../config';
import { Neb, HttpRequest } from 'nebulas';

const nebPay = new NebPay();
const env = process.env.env;

const neb = new Neb();
neb.setRequest(new HttpRequest(config[env]['contact_host']))
const cry = "n1zgzRFoweYNkvhmEY7vcWJuYDjVYXVcwro";
const CryptoJS = require("crypto-js");


const cvtArrangement = (arrangement) => {
    const {
        title,
        nick,
        sex,
        age,
        address,
        profession,
        pic1,
        pic2,
        pic3,
        description,
        price,
        createTime,
        paidCount,
        orderedCount,
        status,
        arrangementId,
    } = arrangement;
    return {
        title,
        nick,
        sex,
        age,
        // tel: CryptoJS.AES.decrypt(tel, cry).toString(CryptoJS.enc.Utf8),
        // wechat: CryptoJS.AES.decrypt(wechat, cry).toString(CryptoJS.enc.Utf8),
        address,
        profession,
        pic1,
        pic2,
        pic3,
        description,
        price,
        createTime,
        paidCount,
        orderedCount,
        status,
        arrangementId,
    };
}

const cvtOrder = (order) => {
    const {
        arrangementId,
        orderId,
        user,
        createTime,
        price,
        title,
        contract,
        description,
        status,
        operation,
    } = order;
    return {
        arrangementId,
        orderId,
        user,
        createTime,
        price,
        title,
        contract,
        description,
        status,
        operation,
    };
}

export const postArrangement = (title,
                          nick,
                          sex,
                          age,
                          address,
                          profession,
                          pic1,
                          pic2,
                          pic3,
                          description,
                          price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'saveArrangement',
            JSON.stringify([
                title,
                nick,
                sex,
                age,
                // CryptoJS.AES.encrypt(tel, cry).toString(),
                // CryptoJS.AES.encrypt(wechat, cry).toString(),
                address,
                profession,
                pic1,
                pic2,
                pic3,
                description,
                price,
                null]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const applyArrangement = (arrangementId, contract, description, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], price, 'applyArrangement',
            JSON.stringify([arrangementId, contract, description]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const getArrangement = (arrangementId) => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getArrangement',
            JSON.stringify([arrangementId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    resolve({
                        arrangement: cvtArrangement(JSON.parse(res.result)),
                    });
                }
        });
    });
}

export const getArrangementList = (curPage = 1) => {
    const perPage = 100;

    return new Promise((resolve) => {
        neb.api.call({
            from: config[env]['contract_address'],
            to: config[env]['contract_address'],
            value: 0,
            contract: {
                function: 'getArrangementList',
                args: JSON.stringify([perPage, (curPage - 1) * perPage]),
            },
            gasPrice: 1000000,
            gasLimit: 2000000,
        })
            .then(res => {
                return resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtArrangement(item)
                    )),
                });
            })
    });
}

export const getOrderList = (status) => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getUserOrderList',
            JSON.stringify([status]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    resolve({
                        list: JSON.parse(res.result).map(item => (
                            cvtOrder(item)
                        )),
                    });
                }
            });
    });
}

export const promulgatorComfirm = (orderId) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'promulgatorComfirm',
            JSON.stringify([orderId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const promulgatorCancel = (orderId) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'promulgatorCancel',
            JSON.stringify([orderId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const userComfirm = (orderId) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'userComfirm',
            JSON.stringify([orderId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const userCancel = (orderId) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'userCancel',
            JSON.stringify([orderId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}
