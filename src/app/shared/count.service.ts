export class CountService {

  constructor() { }

  onActive(count: number) {
    return ++count;
  }

  onInactive(count: number) {
    return ++count;
  }

}
