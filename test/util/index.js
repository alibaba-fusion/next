const delay = time => new Promise(resolve => setTimeout(resolve, time));

const render = element => {
  let inc;
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(element, container, function() {
      inc = this;
  });
  return {
      setProps: props => {
          const clonedElement = React.cloneElement(element, props);
          ReactDOM.render(clonedElement, container);
      },
      unmount: () => {
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
      },
      instance: () => {
          return inc;
      },
      find: selector => {
          return container.querySelectorAll(selector);
      },
  };
};
export default {
  delay,
  render
};
