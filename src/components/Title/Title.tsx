import * as React from 'react';

interface Props {
  title: string;
}

const Title: React.FunctionComponent<Props> = (props) => {
  return <h1>{props.title}</h1>;
};

export default Title;
