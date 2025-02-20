interface Props {
  size?: number;
  color?: string;
}

export const Logo = (props: Props) => {
  const { size = 30 } = props;
  return <img src="/images/canpan.gif" style={{ width: size }}></img>;
};
