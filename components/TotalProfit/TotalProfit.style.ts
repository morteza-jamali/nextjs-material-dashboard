export default function styles(colors: any): IStyleFunction {
  return () => ({
    root: {
      height: '100%'
    },
    avatar: {
      backgroundColor: colors.indigo[600],
      height: 56,
      width: 56
    }
  });
}
