namespace ndrscr_with_namespaces.objects {

  // Retrieve all the names of the object's own enumerable properties.
  // e.g. _.keys({one: 1, two: 2, three: 3});
  export function keys(obj: Object): Array<string> {
    const result: string[] = [];
    for (const k in obj) {
      result.push(k);
    }
    return result;
  }

  // Return all of the values of the object's own properties.
  // e.g. _.values({one: 1, two: 2, three: 3});
  export function values(obj: Object): Array<any> {
    const result: any[] = [];
    for (const k in obj) {
      result.push(obj[k]);
    }
    return result;
  }

}
