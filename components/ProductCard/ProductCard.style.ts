export default function styles(): IStyleFunction {
  return (theme: any) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    statsItem: {
      alignItems: 'center',
      display: 'flex'
    },
    statsIcon: {
      marginRight: theme.spacing(1)
    }
  });
}
