import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <section id="content">
        <section className="vbox">
          <section className="scrollable wrapper w-f bg-white-only">
            <p className="h4">Contents...</p>
          </section>
          <footer className="footer bg-light">
            <p>This is a footer</p>
          </footer>
        </section>
        <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
      </section>
    );
  }
}
