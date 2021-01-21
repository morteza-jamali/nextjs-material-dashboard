export default function styles(page: 'PRODUCT' | 'CUSTOMER'): IStyleFunction {
  switch (page) {
    case 'PRODUCT':
      return ProductToolBarStyle();
    case 'CUSTOMER':
      return CustomerToolBarStyle();
  }
}

const CustomerToolBarStyle = (): IStyleFunction => {
  return (theme: any) => ({
    root: {},
    importButton: {
      marginRight: theme.spacing(1)
    },
    exportButton: {
      marginRight: theme.spacing(1)
    }
  });
};

const ProductToolBarStyle = (): IStyleFunction => {
  return (theme: any) => ({
    root: {},
    importButton: {
      marginRight: theme.spacing(1)
    },
    exportButton: {
      marginRight: theme.spacing(1)
    }
  });
};
