import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

// Global MDX element overrides. Typography lives in globals.css (.post).
const components: MDXComponents = {
  // VS Code pastes images as ../../../public/blog/<slug>/x.png; on the site that's /blog/<slug>/x.png.
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      src={String(props.src).replace(/^(\.\.\/)+public\//, "/")}
      alt={props.alt ?? ""}
      width={1600}
      height={900}
      sizes="(min-width: 768px) 768px, 100vw"
      style={{ width: "100%", height: "auto" }}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
