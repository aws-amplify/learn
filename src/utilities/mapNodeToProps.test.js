import mapNodeToProps from './mapNodeToProps';

describe('mapNodeToProps', () => {
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
