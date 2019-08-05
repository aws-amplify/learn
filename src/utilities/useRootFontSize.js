import useWindowSize from 'react-use/lib/useWindowSize';

export default () => {
  const {width} = useWindowSize();
  return width > 2200 ? 22.4 : width > 1800 ? 19.2 : 16;
};
