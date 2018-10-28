// import { UpdateOperatorList } from "./constant";

export class Command {
  public logicParam: object = {};
  private placeholder = "{{{AAA}}}";
  // private baseOperator = ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin'];

  constructor(logicParam?: object) {
    if (logicParam) {
      this.logicParam = logicParam;
    }
  }

  /**
   * Query and Projection Operators
   * https://docs.mongodb.com/manual/reference/operator/query/
   * @param target
   */
  eq(target: any) {
    return new Command(this.baseOperate("$eq", target));
  }

  neq(target: any) {
    return new Command(this.baseOperate("$ne", target));
  }

  gt(target: any) {
    return new Command(this.baseOperate("$gt", target));
  }

  gte(target: any) {
    return new Command(this.baseOperate("$gte", target));
  }

  lt(target: any) {
    return new Command(this.baseOperate("$lt", target));
  }

  lte(target: any) {
    return new Command(this.baseOperate("$lte", target));
  }

  in(target: any[]) {
    return new Command(this.baseOperate("$in", target));
  }

  nin(target: any[]) {
    return new Command(this.baseOperate("$nin", target));
  }

  regex(target: any) {
    var result = new Command(this.baseOperate("$regex", target.regex))
    result.logicParam[this.placeholder]['$options'] = target.options
    return result
  }

  /**
   * Update Operators
   * https://docs.mongodb.com/manual/reference/operator/update/
   * @param target
   */
  mul(target: number) {
    return new Command({ $mul: { [this.placeholder]: target } });
  }

  remove() {
    return new Command({ $unset: { [this.placeholder]: "" } });
  }

  inc(target: number) {
    return new Command({ $inc: { [this.placeholder]: target } });
  }

  set(target: any) {
    return new Command({ $set: { [this.placeholder]: target } });
  }

  push(target: any) {
    let value = target;
    if (Array.isArray(target)) {
      value = { $each: target };
    }

    return new Command({ $push: { [this.placeholder]: value } });
  }

  pop() {
    return new Command({ $pop: { [this.placeholder]: 1 } });
  }

  unshift(target: any) {
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

  private baseOperate(operator: string, target: any): object {
    return {
      [this.placeholder]: { [operator]: target }
    };
  }

  and(...targets: any[]) {
    if (targets.length === 1 && Array.isArray(targets[0])) {
      targets = targets[0]
    }
    return new Command(this.connectOperate("$and", targets));
  }

  or(...targets: any[]) {
    // console.log(targets)
    if (targets.length === 1 && Array.isArray(targets[0])) {
      targets = targets[0]
    }
    return new Command(this.connectOperate("$or", targets));
  }

  // not(target: any) {
  //   return new Command(this.connectOperate("$not", target));
  // }

  private connectOperate(operator: string, targets: any[]) {
    // console.log(targets);
    let logicParams: object[] = [];
    if (Object.keys(this.logicParam).length > 0) {
      logicParams.push(this.logicParam);
    }

    for (let target of targets) {
      if (target instanceof Command) {
        // console.log(target)
        if (Object.keys(target.logicParam).length === 0) {
          continue;
        }
        logicParams.push(target.logicParam);
      } else {
        let tmp = {}
        this.concatKeys(target, '', tmp);
        // console.log(tmp)

        let tmp1 = {}
        for (let keys in tmp) {
          let value = tmp[keys]

          if (value instanceof Command) {
            // const logicParam = value.logicParam
            // logicParams.push(value.parse(keys))
            Object.assign(tmp1, value.parse(keys))
            // if (logicParam.hasOwnProperty('$or') || logicParam.hasOwnProperty('$and')) {
            //   logicParams.push(value.parse(keys))
            // } else {
            //   logicParams.push({
            //     [keys]: logicParam
            //   });
            // }
          } else {
            Object.assign(tmp1, {
              [keys]: value
            })
            // logicParams.push({
            //   [keys]: value
            // });
          }
        }
        logicParams.push(tmp1)
      }
    }

    this.logicParam = [];
    // console.log(logicParams);
    return {
      [operator]: logicParams
    };
  }

  parse(key?: string): object {
    // if (UpdateOperatorList.indexOf(Object.keys(this.logicParam)[0]) > -1) {
    return JSON.parse(
      JSON.stringify(this.logicParam).replace(/{{{AAA}}}/g, key)
    );
    // }
  }

  public toString = (): object => {
    return this.logicParam[0];
  };

  /**
   * ??????
   * @param obj
   */
  public concatKeys(obj: object, key: string, res: object) {
    let keys, value

    for (let k in obj) {
      if (typeof obj[k] === 'object' &&
        obj[k] instanceof Command === false) {
        keys = key ? key + '.' + k : k
        this.concatKeys(obj[k], keys, res)
      } else {
        keys = key ? key + '.' + k : k
        value = obj[k]

        // console.log(res, keys, value)
        Object.assign(res, { [keys]: value })
        // console.log(keys, val)
      }
    }
  }
}
