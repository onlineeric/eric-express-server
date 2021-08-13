import L from '../../common/logger';

let id = 0;
interface Example {
  id: number;
  name: string;
}

const examples: Example[] = [
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
  { id: id++, name: `example ${id-1}` },
];

export class ExamplesService {
  all(): Promise<Example[]> {
    L.info(examples, 'fetch all examples');
    return Promise.resolve(examples);
  }

  byId(id: number): Promise<Example> {
    L.info(`fetch example with id ${id}`);
    return this.all().then((r) => (r.filter((item) => item.id === id)[0]));
  }

  create(name: string): Promise<Example> {
    L.info(`create example with name ${name}`);
    const example: Example = {
      id: id++,
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }

  delete(id: number): Promise<Example> {
    L.info(`delete example with id ${id}`);
    return this.all().then((r) => {
      const idx = r.findIndex((item) => item.id === id);
      return examples.splice(idx, 1)[0];
    })
  }
}

export default new ExamplesService();
