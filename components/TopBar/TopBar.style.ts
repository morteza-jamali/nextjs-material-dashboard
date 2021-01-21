export default function styles(layout: 'MAIN' | 'DASHBOARD') {
  switch (layout) {
    case 'MAIN':
      return MainLayout();
    case 'DASHBOARD':
      return DashboardLayout();
  }
}

const MainLayout = (): IStyleFunction => {
  return () => ({
    root: {},
    toolbar: {
      height: 64
    }
  });
};

const DashboardLayout = (): IStyleFunction => {
  return () => ({
    root: {},
    avatar: {
      width: 60,
      height: 60
    }
  });
};
