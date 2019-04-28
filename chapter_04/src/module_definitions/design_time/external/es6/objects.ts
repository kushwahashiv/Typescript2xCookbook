import { IObjects } from '../../interfaces';
class Objects implements IObjects {

  // Retrieve all the names of the object's own enumerable properties.
  // e.g. _.keys({one: 1, two: 2, three: 3});
  public keys(obj: Object): Array<string> {
    const result: string[] = [];
    for (const k in obj) {
      result.push(k);
    }
    return result;
  }

  // Return all of the values of the object's own properties.
  // e.g. _.values({one: 1, two: 2, three: 3});
  public values(obj: Object): Array<any> {
    const result: any[] = [];
    for (const k in obj) {
      result.push(obj[k]);
    }
    return result;
  }

}

export default new Objects();
