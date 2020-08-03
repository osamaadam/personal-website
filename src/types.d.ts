import { FluidObject } from "gatsby-image";

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

interface BlogQuery {
  allMarkdownRemark: {
    edges: {
      node: BlogQueryNode;
    }[];
  };
}

interface BlogQueryNode {
  id: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    author: string;
    title: string;
    date: string;
    authorUrl?: string;
    tags?: string[];
    banner?: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    authorImg?: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}
