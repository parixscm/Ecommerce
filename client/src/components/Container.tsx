type ContainerProps = {
  children: React.ReactElement;
};

function Container({ children }: ContainerProps) {
  return <div className="max-w-[1500px] mx-auto">{children}</div>;
}

export default Container;
