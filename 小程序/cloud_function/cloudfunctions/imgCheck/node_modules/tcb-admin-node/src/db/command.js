"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(logicParam) {
        this.logicParam = {};
        this.placeholder = "{{{AAA}}}";
        this.toString = () => {
            return this.logicParam[0];
        };
        if (logicParam) {
            this.logicParam = logicParam;
        }
    }
    eq(target) {
        return new Command(this.baseOperate("$eq", target));
    }
    neq(target) {
        return new Command(this.baseOperate("$ne", target));
    }
    gt(target) {
        return new Command(this.baseOperate("$gt", target));
    }
    gte(target) {
        return new Command(this.baseOperate("$gte", target));
    }
    lt(target) {
        return new Command(this.baseOperate("$lt", target));
    }
    lte(target) {
        return new Command(this.baseOperate("$lte", target));
    }
    in(target) {
        return new Command(this.baseOperate("$in", target));
    }
    nin(target) {
        return new Command(this.baseOperate("$nin", target));
    }
    regex(target) {
        var result = new Command(this.baseOperate("$regex", target.regex));
        result.logicParam[this.placeholder]['$options'] = target.options;
        return result;
    }
    mul(target) {
        return new Command({ $mul: { [this.placeholder]: target } });
    }
    remove() {
        return new Command({ $unset: { [this.placeholder]: "" } });
    }
    inc(target) {
        return new Command({ $inc: { [this.placeholder]: target } });
    }
    set(target) {
        return new Command({ $set: { [this.placeholder]: target } });
    }
    push(target) {
        let value = target;
        if (Array.isArray(target)) {
            value = { $each: target };
        }
        return new Command({ $push: { [this.placeholder]: value } });
    }
    pop() {
        return new Command({ $pop: { [this.placeholder]: 1 } });
    }
    unshift(target) {
        let value = { $each: [target], $position: 0 };
        if (Array.isArray(target)) {
            value = { $each: target, $position: 0 };
        }
        return new Command({
            $push: { [this.placeholder]: value }
        });
    }
    shift() {
        return new Command({ $pop: { [this.placeholder]: -1 } });
    }
    baseOperate(operator, target) {
        return {
            [this.placeholder]: { [operator]: target }
        };
    }
    and(...targets) {
        if (targets.length === 1 && Array.isArray(targets[0])) {
            targets = targets[0];
        }
        return new Command(this.connectOperate("$and", targets));
    }
    or(...targets) {
        if (targets.length === 1 && Array.isArray(targets[0])) {
            targets = targets[0];
        }
        return new Command(this.connectOperate("$or", targets));
    }
    connectOperate(operator, targets) {
        let logicParams = [];
        if (Object.keys(this.logicParam).length > 0) {
            logicParams.push(this.logicParam);
        }
        for (let target of targets) {
            if (target instanceof Command) {
                if (Object.keys(target.logicParam).length === 0) {
                    continue;
                }
                logicParams.push(target.logicParam);
            }
            else {
                let tmp = {};
                this.concatKeys(target, '', tmp);
                let tmp1 = {};
                for (let keys in tmp) {
                    let value = tmp[keys];
                    if (value instanceof Command) {
                        Object.assign(tmp1, value.parse(keys));
                    }
                    else {
                        Object.assign(tmp1, {
                            [keys]: value
                        });
                    }
                }
                logicParams.push(tmp1);
            }
        }
        this.logicParam = [];
        return {
            [operator]: logicParams
        };
    }
    parse(key) {
        return JSON.parse(JSON.stringify(this.logicParam).replace(/{{{AAA}}}/g, key));
    }
    concatKeys(obj, key, res) {
        let keys, value;
        for (let k in obj) {
            if (typeof obj[k] === 'object' &&
                obj[k] instanceof Command === false) {
                keys = key ? key + '.' + k : k;
                this.concatKeys(obj[k], keys, res);
            }
            else {
                keys = key ? key + '.' + k : k;
                value = obj[k];
                Object.assign(res, { [keys]: value });
            }
        }
    }
}
exports.Command = Command;
