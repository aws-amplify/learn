import mapNodeToProps from './mapNodeToProps';

describe('mapNodeToProps', () => {
  beforeEach(() => {
    delete window.location;
    window.location = new URL('https://www.example.com');
  });
  it('parse relative path to absolute path', () => {
    const data = {
      fields: {
        slug: 'foo/bar',
      },
    };
    const result = mapNodeToProps(data);
    expect(result.to).toBe('/foo/bar');
  });
  it('parse absolute path as is', () => {
    const data = {
      fields: {
        slug: '/foo/bar',
      },
    };
    const result = mapNodeToProps(data);
    expect(result.to).toBe('/foo/bar');
  });
});
