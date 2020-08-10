import * as React from 'react';

interface Props {
  title: string;
}

const Title: React.FunctionComponent<Props> = (props) => {
  return <h3>{props.title}</h3>;
};

export default Title;
