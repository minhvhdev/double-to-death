import React from 'react';

type Props = {
  open: boolean;
};

const withConditionRender = <P extends Props>(
  Component: React.ComponentType<P>,
) => {
  return (props: P) => {
    if (!props.open) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withConditionRender;
