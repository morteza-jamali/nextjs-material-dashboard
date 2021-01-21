export default function styles(colors: any): IStyleFunction {
  return (theme: any) => ({
    root: {
      height: '100%'
    },
    avatar: {
      backgroundColor: colors.green[600],
      height: 56,
      width: 56
    },
    differenceIcon: {
      color: colors.green[900]
    },
    differenceValue: {
      color: colors.green[900],
      marginRight: theme.spacing(1)
    }
  });
}
