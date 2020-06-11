type Refs = {
  projects?: React.RefObject<HTMLDivElement>;
  contact?: React.RefObject<HTMLDivElement>;
  [key: string]: React.RefObject<HTMLDivElement>;
};

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

type ogMetaData = {
  property: string;
  content: string;
};
