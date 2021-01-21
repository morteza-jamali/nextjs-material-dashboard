declare interface IPackage {
  homepage: string;
}

declare interface IPath {
  IMAGES: string;
}

declare interface IGlobals {
  TITLE: string;
  PACKAGE: IPackage;
  PATH: IPath;
}

declare const GLOBALS: IGlobals;
