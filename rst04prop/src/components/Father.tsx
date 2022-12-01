export interface properties {
  children: React.ReactNode | React.ReactNode[];
}

export const Father = (props: properties) => {
  return <div id="fatherId">{props.children}</div>;
};
